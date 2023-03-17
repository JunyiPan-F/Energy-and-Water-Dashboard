ArcGIS Online Relevant Content 

The backend data pipeline, used by the frontend app transfers energy building metadata from the Influx DB into the Initium table, located in ArcGIS Online. Every 15 minutes, via a scheduled task, the AGOL Python notebook (Data_Pipeline) performs a query to fetch average watts used over a 15 min period from the InfluxDB. The Data_Pipeline notebook maps eigmeter names to their corresponding buildingIDs via a python dictionary and proceeds to compute a sum grouped by buildingID. 

Although rolling up data will most likely not be necessary for some time, if ever, I have created a Python Notebook which rolls data up based on recency called Rollup_Data_Test. 

The daily watt hours pipeline notebook is called the Daily_Watt_Sum_Pipeline. It runs once a day, and will need to be optimized. See daily_watthr_sum_pipeline.py details below. 

Initium Table: https://lu.maps.arcgis.com/home/item.html?id=2a0efee0b0d64aed9ca3df2166697802
Data_Pipeline Notebook:
https://lu.maps.arcgis.com/home/item.html?id=9f768a161b2f4e3daa6cf434835f7860
Rollup_Data_Test
https://lu.maps.arcgis.com/home/item.html?id=f72ad40f03f04ade93bcae961261af50
Daily_Watt_Sum_Pipeline
https://lu.maps.arcgis.com/home/item.html?id=ab528a719bcc49eea0c8eb5e038f641b

-------------------------------------------------------------------------------------------------------------------------------
The Python API folder 
In the Github Repository, the Python_API folder comprises of numerous python scripts which are and have been used to create and manage energy - building metadata. They are all thoroughly commented and provide explanations of the workflow. 

data_pipeline.py - py script from which the Data_Pipeline Notebook was modeled. If any updates and/optimizations need to be done to the AGOL Data_Pipeline Notebook, data_pipeline.py is where to start/test the changes. 

data_pipeline_history.py - py script to generate historical data. It takes about 30 mins for the script to run on my computer. Currently it is set to generate a csv file containing 1 year worth of energy-building metadata but that can be changed by altering the 1st for loop parameter. 

daily_watthr_sum_pipeline.py - py script to generate a csv file of the daily watthour metric for each buildingID. Important to note that influxDB, fails to have a “wathtotal” metric on random days for random eigmeters. Because of this issue, this script will most likely need to be optimized to handle any discrepancies. 

daily_watthr_sum_history.py - the historical version of daily_watthr_sum_pipeline as it generates a csv which has 365 entries ( 1 for each day) for each building_ID (98 buildingIDs at the time documented) of daily watthour sums. 

rel_class_template.py - is not meant to be run as a standalone script but rather in ArcGIS Pro ( Desktop application). It is a template for creating a relationship class. In order to run successfully it must be inputted into the ArcGIS Pro Python Notebook. 



