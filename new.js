const data = require('../json/newjson.json')
// console.log(data);

function getData(date){
  const weatherData = data.Murree_weather.filter((d) => d.PKT === date);
  return weatherData[0];
  };
    // if see all data of full month
    // console.log("Muree Weather Aug 2006",getData("2006-12-25"))
    // console.log("Muree Weather Sep 2004",getData("2004-9-1"))
    // console.log("Muree Weather oct 2005",getData("2004-10-1"))
    
     
    // dateof by single value of weather
    // const dataOf2004_9_2 = getData("2004-9-2");
    // console.log("date of",dataOf2004_9_2['PKT']);
    // console.log(dataOf2004_9_2['PKT']," : " , "MAX", dataOf2004_9_2['Max TemperatureC'],"C");
    // console.log("Min Temperature on sep : " , dataOf2004_9_2['Min TemperatureC'], "C")
    // console.log(dataOf2004_8_1['PKT']);
    // console.log(dataOf2004_8_1['PKT']);
    
    //  only change date and you see which date diiferent values:
  const dataOfMurree_weather = getData("2004-8-25");
    let weather_detail={};
    weather_detail.date = dataOfMurree_weather['PKT'];
    weather_detail.max = dataOfMurree_weather['Max TemperatureC'];
    weather_detail.min = dataOfMurree_weather['Min TemperatureC'],"C";
    weather_detail.date= dataOfMurree_weather['PKT']
    weather_detail.MH = dataOfMurree_weather['Max Humidity']
    console.log("date of month : " , weather_detail.date);
    console.log("max tem : ",weather_detail.max ,"C" );
    console.log("min tem : " ,weather_detail.min , "C") ; 
    console.log("Max Humidity : ", weather_detail.MH) 

    
