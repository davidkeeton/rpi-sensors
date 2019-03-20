
#!/usr/bin/env python

import os
import time
import datetime
import glob
import MySQLdb
from time import strftime
import Adafruit_DHT

#Get Sensor Data
humidity, temperature = Adafruit_DHT.read(22, 4) //22 is the type of sensor, 4 is the gpio location


db = MySQLdb.connect(host="localhost", user=, passwd="password", db="sensordatabase")
cur = db.cursor()

def dateTime(): #get UNIX time
        secs = float(time.time())
        secs = secs*1000
        return secs


secs = dateTime()

sql = ("""INSERT INTO dht22 (datetime,temperature,humidity) VALUES (%s,%s,%s)""", (secs, temperature, humidity))

try:
    print "Writing to the database..."
    cur.execute(*sql)
    db.commit()
    print "Write complete"

except:
    db.rollback()
    print "We have a problem"

cur.close()
db.close()

print secs
print temperature
print humidity
