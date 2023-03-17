ArcGIS Online Relevant Content 

The backend data pipeline, used by the frontend app transfers energy building metadata from the Influx DB into the Initium table, located in ArcGIS Online. Every hour, via a scheduled task, the AGOL Python notebook (Energy_data_pull_initium) performs a query to fetch average watts used over a 15 min period from the InfluxDB. The Energy_data_pull_initium notebook maps eigmeter names to their corresponding buildingIDs via a python dictionary and proceeds to compute a sum grouped by buildingID. 

The daily watt hours pipeline notebook is called the NEWER_daily_watt_sum_pipeline. It runs once a day, and should be optimized. 

Initium Table: https://lu.maps.arcgis.com/home/item.html?id=2a0efee0b0d64aed9ca3df2166697802
Energy_data_pull_initium Notebook:
https://lu.maps.arcgis.com/home/item.html?id=3525bdce66e242829a8c2bc0891ee100
NEWER_daily_watt_sum_pipeline Notebook:
https://lu.maps.arcgis.com/home/item.html?id=69e1d3eccecc4a54b9cbe790007f4890

-------------------------------------------------------------------------------------------------------------------------------
energy_data_pull_initium.py and newer_Daily_watt_sum_pipeline.py are essentially just copies of the ArcGIS Notebook scripts. We Stored them into GitHub as a backup. If you have more questions about how these notebooks were created or modeled after, please refer to the README in "Backend API 2021" folder. 


