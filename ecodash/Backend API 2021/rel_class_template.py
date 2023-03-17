## References
#https://pro.arcgis.com/en/pro-app/latest/tool-reference/analysis/spatial-join.htm
#https://resourcesbeta.arcgis.com/en/help/main/10.1/index.html#/Add_Join/001700000064000000/
#https://enterprise.arcgis.com/en/portal/latest/use/geoanalytics-join-features.htm
#https://resources.arcgis.com/en/help/main/10.2/index.html#//004t00000002000000
#https://pro.arcgis.com/en/pro-app/latest/tool-reference/data-management/an-overview-of-the-joins-toolset.htm
#https://pro.arcgis.com/en/pro-app/latest/tool-reference/data-management/join-field.htm
#https://developers.arcgis.com/python/api-reference/arcgis.features.analysis.html#join-features

#N.B. This only a template and not a full solution 
# import system modules 
import arcpy
from arcpy import env
import pandas as pd
import os
from arcgis.gis import GIS
from arcgis.features import SpatialDataFrame
from datetime import datetime, timedelta, timezone
import time


# Set environment settings
env.workspace = r"C:\\Users\\p99br\\Documents\\ArcGIS\\Projects\\MyProject\\"
# Set working directory
os.chdir('C:\\Users\\p99br\\Documents\\ArcGIS\\Projects\\MyProject\\')
gis = GIS("home")

# Capture current symbology
p = arcpy.mp.ArcGISProject('C:\\Users\\p99br\\Documents\\ArcGIS\\Projects\\MyProject\\MyProject.aprx')
p
m = p.listMaps("EWDashboard")[0]
m
l = m.listLayers("Building")[0]
l
sym = l.symbology
sym

fc_list =  arcpy.ListFeatureClasses("*")
print (fc_list)


inFeatures = "Building"
layerField = "BUILDINGID"
joinTable = "test_data"
joinField = "BUILDINGID"
#expression = ""
outFeature = "MyProject.gdb/building_join"
    
# # Create a feature layer from the vegtype featureclass
# arcpy.MakeFeatureLayer_management (inFeatures,  layerName)
    
# Join the feature layer to a table
arcpy.AddJoin_management(inFeatures, layerField, joinTable, joinField)

# # Join two feature classes by the BUILDINGID
# fieldList = ["inswat"]
# arcpy.JoinField_management (inFeatures, layerField, joinTable, joinField, fieldList)

test_data = gis.content.get('6c4b09c0bad14062afb6979493e9d646')
test_data_tb= test_data.tables[0]
test_data_tb

# Eastern Time zone is -4 hours from +00 GMT
time_now = (datetime.now())
week_ago = time_now - timedelta(days=7)

one_days_ago = time_now - timedelta(days=1)
print("one_days_ago: ",one_days_ago)

one_days_ago_str = one_days_ago.strftime("%m/%d/%Y %I:%M:%S%p")
print("one_days_ago (string): ",one_days_ago_str)

# time dates should be of format : " 09/23/2021 03:00:00PM "

# fetch data to be compressed the query gets data whikch is older than specified and orders by time 
queried_entries = test_data_tb.query(where="time < '"+one_days_ago_str+"'", order_by_fields="time ASC, BUILDINGID ASC")
# queried_entries
# print(queried_entries.features)
data_len = len(queried_entries.features)

queried_data = []

for j in range(0,data_len):
    timestamp = queried_entries.features[j].attributes["time"] / 1000 
#   print("BUILDINGID: ",queried_entries.features[j].attributes["BUILDINGID"],"  time: ",datetime.fromtimestamp(timestamp),"  average_inswat: ",queried_entries.features[j].attributes["inswat"])
    queried_data.append([queried_entries.features[j].attributes["BUILDINGID"],datetime.fromtimestamp(timestamp),queried_entries.features[j].attributes["inswat"]])

queried_df = pd.DataFrame(queried_data,columns = ['BUILDINGID', 'time', 'inswat'] )
queried_df.describe()
queried_df.info()

# Create a csv using the dataframe 
queried_df.to_csv('data\queried_df.csv')

# Table to table
arcpy.TableToTable_conversion("data\queried_df.csv", "MyProject.gdb", "queried_df_table")

# arcpy.CopyRows_managementinitiumDbf energyTbl 

# Create simple relationship class between "building" layer
# and "Initium.dbf" table with 
#only spatial stuff BUILDING
#perform join on it 
#e.g. most rtecent wattage 
#take the Innitum dataset and trim it most recent for each builidng ( querying)
#add the trimmed field to building layer 
# take entire dataset and do realtionshiup class join to that layer 
# attach via addJoin
#destination table is Builoding's attr table 
# arcpy.management.CreateRelationshipClass(origin_table, destination_table, out_relationship_class, relationship_type, forward_label, 
#                                          backward_label, message_direction, cardinality, attributed,
#                                          origin_primary_key, origin_foreign_key, {destination_primary_key}, {destination_foreign_key})

#ONE_TO_MANY

origin_table = "MyProject.gdb/building_table"
dest_table  =  "MyProject.gdb/queried_df_table"
out_rel_class = "MyProject.gdb/new_rc"

forLabel = "Attributes from initium"
backLabel = "Attributes and Features from building"
primaryKey = "BUILDINGID"

arcpy.CreateRelationshipClass_management(origin_table,
                                         dest_table,
                                         out_rel_class,
                                         "SIMPLE",
                                         forLabel,
                                         backLabel,
                                         "NONE",
                                         "ONE_TO_MANY",
                                         "NONE",
                                         primaryKey,
                                         primaryKey)

