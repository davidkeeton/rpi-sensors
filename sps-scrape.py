#!/usr/bin/env python

import os
import time
import datetime
import glob
import MySQLdb
from time import strftime
import re
import panda 
with open('/home/pi/Sensors/log/sps30-log', 'r') as f:   # Location of spslog output
    content = f.readlines()
    content = [x.strip() for x in content]
    pm05 = content[0]     #.split('particulate_matter_ppcm3{size="pm0.5",sensor="SPS30"} ',1)[1]
    pm1 = content[1]     #.split('particulate_matter_ppcm3{size="pm1",sensor="SPS30"} ',1)[1]
    pm25 = content[2]        #.split('particulate_matter_ppcm3{size="pm2.5",sensor="SPS30"} ',1)[1]
    pm4 = content[3]     #.split('particulate_matter_ppcm3{size="pm4",sensor="SPS30"} ',1)[1]
    pm10 = content[4]       #.split('particulate_matter_ppcm3{size="pm10",sensor="SPS30"} ',1)[1]
    um1 = content[5]     #.split('particulate_matter_ugpm3{size="pm1",sensor="SPS30"} ',1)[1]
    um25 = content[6]        #.split('particulate_matter_ugpm3{size="pm4",sensor="SPS30"} ',1)[1]
    um4 = content[7]      #.split('particulate_matter_ppcm3{size="pm0.5",sensor="SPS30"} ',1)[1]
    um10 = content[8]    #.split('particulate_matter_ugpm3{size="pm10",sensor="SPS30"} ',1)[1]
    um05 = content[9]    #.split('particulate_matter_typpartsize_um{sensor="SPS30"} ',1)[1]


# #Variables for MySQL
db = MySQLdb.connect(host="localhost", user="username", passwd="password", db="sensors")
cur = db.cursor()



def dateTime(): #get UNIX time
    secs = float(time.time())
    secs = secs*1000
    return secs

secs = dateTime()
print secs
add_spsdata = "INSERT INTO sps30 (secs, pm05, pm1, pm25, pm4, pm10, um05, um1, um25, um4, um10) VALUES (%s, %s, %s, %s,%s, %s, %s, %s, %s,%s, %s)"
val = (secs, pm05, pm1, pm25, pm4, pm10, um05, um1, um25, um4, um10)


try:
    print "Writing to the database..."
    cur.execute(add_spsdata, val)
    db.commit()
    print "Write complete"

except MySQLdb.Error, e:
        try:
            print "MySQL Error [%d]: %s" % (e.args[0], e.args[1])
            
        except IndexError:
            print "MySQL Error: %s" % str(e)
            

cur.close()
db.close()
