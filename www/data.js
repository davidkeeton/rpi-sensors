$(function() {

    var x_values1 = [];
    var y_values1 = [];
    var y_values2 = [];

    var switch1 = true;
    $.get('values.php', function(data1) {

          data1 = data1.split(';').reverse();
            for (var i in data1) {
                              
            let tmpData = data1[i].split('/');
            y_values1.push({x: parseInt(tmpData[0])*1, y: parseFloat(tmpData[1])});
            y_values2.push({x: parseInt(tmpData[0])*1, y: parseFloat(tmpData[2])});
         
        
        }         
    
        console.log(y_values1);
        Highcharts.setOptions({
            time: {
                timezoneOffset: 7 * 60
            }
            });
        $('#chart').highcharts({
            chart : {
                type : 'spline'
            },
            title : {
                text : 'Home'
            },
            subtitle : {
                text : 'Temp and Humidity'
            },
            xAxis : {
                type : 'datetime',
                labels: { 
                format: '{value:%b  %e   %l:%M %P }'
                },
                title : {
                    text : 'Date and Time'
                },
                categories : x_values1,
		reversed : false
            },
            yAxis : [{
                title : {
                    text : 'Temperature'
                },  
                labels : {
                    formatter : function() {
                        return this.value + ' C'
                    }
                }
            }, {
                lineWidth: 1,
                opposite: true,
                title: {
                    text: 'Humidity'
                },
                labels : {
                    formatter : function() {
                        return this.value + ' %'
                    }
                }
            }],
            tooltip : {
                crosshairs : true,
                shared : true,
                valueSuffix : '',
            },
            plotOptions : {
		//"line": {
                //"pointInterval": 3600000,
		//}
		spline : {
                    marker : {
                        radius : 4,
                        lineWidth : 1
                    }
                }
            },
            series : [{
                name : 'Temperature',
                data : y_values1,
                color : '#FF0033',
                tooltip : {
                    valueSuffix: ' C'
                }
                }, {
                name : 'Humidity',
                data : y_values2,
                dashStyle: 'shortdot',
                color : '#58ACFA',
                zones : [{
                    value: 40,
                    color: '#FE9A2E',
                }, {
                    value: 60,
                    color: '#2E9AFE',
                }, {
                    value: 100,
                    color: '#FE9A2E',
                }],
                yAxis : 1,
                tooltip : {
                    valueSuffix : ' %'
                }
            }]
        });
    });
});
$(function() {

    var x_values1x = [];
    var y_values1x = [];
    var y_values2x = [];


    var switch2 = true;
    $.get('values2.php', function(data2) {
	i = 0;
	x=0;
	y=0;
          data2 = data2.split(';').reverse();
            for (var i in data2) {
                              
            let tmpData2 = data2[i].split('/');
            y_values1x.push({x: parseInt(tmpData2[0])*1, y: parseFloat(tmpData2[1])});
            y_values2x.push({x: parseInt(tmpData2[0])*1, y: parseFloat(tmpData2[2])});

         
        
        }         
    
   //     console.log(y_values1x);
       Highcharts.setOptions({
            time: {
                timezoneOffset: 7 * 60
            }
            });
     
        $('#chart2').highcharts({
            
            chart : {
                type : 'spline'
            },
            title : {
                text : 'Home'
            },
            subtitle : {
                text : 'Particulate'
            },
            xAxis : {
                type : 'Time',
                labels: { 
                format: '{value:%b  %e   %l:%M %P }'
                },
                title : {
                    text : 'Date and Time'
                },
                categories : x_values1x,
		reversed : false
            },
            yAxis : [{
                title : {
                    text : '0.5 ppm'
                },  
                labels : {
                    formatter : function() {
                        return this.value + ' ppm'
                    }
                }
            }, {
                lineWidth: 1,
                opposite: true,
                title: {
                    text: '2.5 ppm'
                },
                labels : {
                    formatter : function() {
                        return this.value + ' ppm'
                    }
                }
            }],
            tooltip : {
                crosshairs : true,
                shared : true,
                valueSuffix : '',
            },
            plotOptions : {
		//"line": {
                //"pointInterval": 3600000,
		//}
		spline : {
                    marker : {
                        radius : 4,
                        lineWidth : 1
                    }
                }
            },
            series : [{
                name : '0.5 ppm',
                data : y_values1x,
                color : '#FF0033',
                tooltip : {
                    valueSuffix: ' ppm'
                }
                }, {
                name : '2.5 ppm',
                data : y_values2x,
                dashStyle: 'shortdot',
                color : '#58ACFA',
                zones : [{
                    value: 40,
                    color: '#FE9A2E',
                }, {
                    value: 60,
                    color: '#2E9AFE',
                }, {
                    value: 100,
                    color: '#FE9A2E',
                }],
                yAxis : 1,
                tooltip : {
                    valueSuffix : ' ppm'
                }
            }]
        });
    });
});

//adafruit leftover below. might be useful later so I left it in.
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
  var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
