# rpi-sensors
hobby rpi project to display sensor data 




#########################################################################
Day 1. Installed 2 useful driver paks relavent to the sensors I have.
DHT22 - Adafruit_DHT Python Pak
Raspi-Driver-SBS30 for the SBS Sensor 
  modified output of log file to output data only and changed log path (sps30-service(modified).py)

Initialised Maria db with following structure

sensors - db
  dht22 - table
    secs, humidity, temperature - fields
  sps30 - table
    secs, pm05, pm1, pm25, pm4, pm10, um05, um1, um25, um10 - fields
    
Wrote a small script to pull DHT22 data and insert it into SQL - dht22-sql.py
Wrote a script to parse log file and insert into sql "sps-scrape.py"

Modified a highcharts template to display data (/html)
data.js -- dirty dirty code haha but it seems to work. basically highcharts formatting and calling values.php and values2
values.php - sql connector for dht22
values2.php sql connector for sps30
index.html -- self explainatory charts are called by name (chart)


Well its working. I have new sensors arriving soon. I will have to modify this again,.. hope this can be helpful to someone :)
