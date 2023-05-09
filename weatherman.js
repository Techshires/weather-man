// const { Console } = require('console');
const fs = require('fs');
const { argv } = require('process');
//for part 1
var filePath ;
var p1;
var p2;
var p3;
var concat_path;

var rows;
  var dates=[];
  let max_temp=[];
  var mean_temp=[];
  let min_temp=[];
  var dew_point=[];
  var mean_dew_point=[];
  var min_dew_point=[];
  let max_humidity=[];
  var mean_humidity=[]; 
  var min_humidity=[];
  var max_sealevel=[];
  var mean_sealevel=[]; 
  var min_sealevel=[];
  var max_visibilty=[];
  var mean_visibilty=[]; 
  var min_visibilty=[];
  var max_wind=[];
  var mean_wind=[]; 
  var max_gust_speed=[];
  var precipitation=[]; 
  var cloud_clover=[];
  var events=[]; 
  var wind=[]; 
const months = ["_Jan" ,"_Feb" , "_Mar" , "_Apr" , "_May" , "_Jun" , "_Jul" , "_Aug", "_Sep"  , "_Oct" ,"_Nov" , "_Dec" ];
//function for reading data from files
function read (filepath, callback){
  
    fs.readFile(filepath, 'utf8', function(err , contents) {
              
            var temperature=[];
            if(err)
            return console.log(err);
            if(contents.trim() !== '')
              { rows = contents.split('\n');}
            for (var i = 1; i <rows.length; i++) {
                    if(rows[i].trim() !== '' )
                    {
                  var cells = rows[i].split(',');
            }
              if(cells == '' || cells == '')
                {
                    max_temp.push(0);
                }
                    dates.push(cells[0]); 
                    max_temp.push(cells[1]);
                    mean_temp.push(cells[2]);
                    min_temp.push(cells[3]);
                    dew_point.push(cells[4]);
                    mean_dew_point.push(cells[5]);
                    min_dew_point.push(cells[6]);
                    max_humidity.push(cells[7]);
                    mean_humidity.push(cells[8]);
                    min_humidity.push(cells[9]);
                    max_sealevel.push(cells[10]);
                    mean_sealevel.push(cells[11]); 
                    min_sealevel.push(cells[12]);
                    max_visibilty.push(cells[13]);
                    mean_visibilty.push(cells[14]); 
                    min_visibilty.push(cells[15]);
                    max_wind.push(cells[16]);
                    mean_wind.push(cells[17]);; 
                    max_gust_speed.push(cells[18]);
                    precipitation.push(cells[19]);; 
                    cloud_clover.push(cells[20]);
                    events.push(cells[21]);
                    wind.push(cells[22]);
                  
            }
            
            callback();
            });  
}
// Converting max temp to numeric array
function convert(old){
  var nums = old.map(function(str) {
    return parseInt(str); });
   //console.log(nums);
   return nums;
}



 //function for reading data of whole year

function read_months(months_){
  var first_name = "Murree_weather_";
  for (var  i=0 ; i<11 ; i++){
  var name = first_name + filePath + months_[i] + ".txt";
  console.log("1"+name);
  read(name, function(){
  });}
  var name2 = first_name + filePath + "_Dec" + ".txt";
  read(name2, function(){
   // console.log(max_temp);
    max_min_a_year(max_temp,min_temp,max_humidity,dates);
   });
  }
 function max_min_a_year(max_temp,min_temp,max_humidity,dates)
  {  
   console.log("1. For a given year display the highest temperature and day, lowest temperature and day, most humid day and humidity.")
  //Highest;
 
   var max_arr = convert(max_temp);
   var min_arr = convert(min_temp);
 
  
  
   var max_temp_in_a_day=Math.max.apply(null, max_temp);
     const index = max_temp.indexOf(max_temp_in_a_day.toString());
     var date =dates[index];
    
    console.log("Highest: " + max_temp_in_a_day + "C On " + date);

    //Lowest

    var min_temp_in_a_day=Math.min.apply(null, min_temp);
    const index_low = min_temp.indexOf(min_temp_in_a_day.toString());
    var date2 =dates[index_low];
  
   console.log("Lowest: " + min_temp_in_a_day + "C On " + date2);

  //Humidity
  
   var most_humid_day=Math.max.apply(null, max_humidity);
   const index_humid = max_humidity.indexOf(most_humid_day.toString());
   var date3 =dates[index_humid];
 
 console.log("Humidity: " + most_humid_day + "C On " + date3);
}



//function for reading data for a month

 function read_months_day(months_){
  var first_name_2 = "Murree_weather_";
  
  var name_2 = first_name_2 + p1 + months_[p2-1] + ".txt";
  console.log("sad" + name_2);
  read(name_2, function(){

     max_min_a_month(max_temp,min_temp,mean_humidity);
     bar_charts(max_temp,min_temp,rows,1);
     bar_charts(max_temp,min_temp,rows,2);

  });
 
  }

console.log("   ");

function  max_min_a_month(max_temp,min_temp,mean_humidity){
  console.log("2. For a given month display the average highest temperature, average lowest temperature, average mean humidity.");
  var max_arr = convert(max_temp);
  var min_arr = convert(min_temp);
  var mean_humid_array = convert(mean_humidity);
 
  var sum=0; 

  function Sum_values(values){
  for (var number of values) {
    if(number>=0){
    sum=sum+number;
  } 

}
   average = sum / values.length;
  
   return average;
  }

  var x  = Sum_values(min_arr);
  var y  = Sum_values(max_arr);
  console.log("Highest Average:" + y+"C");
  console.log("Lowest Average: " +x + "C");
  console.log("Mean Humidity: " + Sum_values(mean_humid_array)+ "%");
 
 
}

function bar_charts(max_temp,min_temp,rows,x){
  console.log("   ");
  var max_arr2 = convert(max_temp);
  var min_arr2 = convert(min_temp);
  function horizontal_bar(){
  var array_max =  new Array();
  var array_min =  new Array();
  
  var counter=0;
  var counter2=0;
  
  for (var i = 0; i <rows.length; i++) {
      var y = max_arr2[i];
      var a = min_arr2[i];
      array_max.length=0;
      array_min.length=0;
      if(x==1){
        
      array_max.push("0"+ ++counter + " ");
      array_min.push("0"+ ++counter2)+ " ";}
      if(x==2){
        array_max.push("0"+ ++counter + " ");

      }
      if(y>0){
      for (var j = 0; j <y; j++)
      {
      
        array_max.push("+");
      }
      for (var j = 0; j <a; j++)
      {
        array_min.push("+");
      }
      if(x==1){
        array_max.push(y+"C");
        array_min .push(a+"C");
        console.log("\x1b[31m" + array_max.join('') ) ;
        console.log("\x1b[34m" + array_min.join('')) ;
        console.log("                             ");
      }
        if(x==2){
        //  array_max.push("0"+ ++counter);
          console.log("\x1b[31m" + array_max.join('') +  "\x1b[34m" + array_min.join('') +" " + a+"C"+  "-"   + y+"C" ) ;
      
          console.log("                             ");
        } 
    }}
  }
  horizontal_bar();
}

if(argv.length < 3){
  if(filePath.length>4){
    //for part 2
    filePath = process.argv[2];
     p1 = filePath.slice(0,4);
     p2 = filePath.slice(filePath.length-1,filePath.length);
     read_months_day(months);
     
     bar_draw(months);
     bar_draw_combined(months);
    }
    
    else{
    
     read_months(months);
    
    }
}
//4. Multiple Reports
else
{
for(var i =2 ; i<argv.length ; i++ ){
  filePath = argv[i];
     
    if(filePath.length>4){
     
       p1 = filePath.slice(0,4);
       p2 = filePath.slice(filePath.length-1,filePath.length);

  
       read_months_day(months);
      
     
      }
      
      if(filePath.length<=4){
      
       read_months(months);
      
      }
}
}
