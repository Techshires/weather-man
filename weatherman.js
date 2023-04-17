// const { Console } = require('console');
const fs = require('fs');
const filePath = process.argv[2];
const { runInNewContext } = require('vm');
fs.readFile(filePath, 'utf8', function(err, contents) {
 var dates=[];
 var max_temp=[];
 var mean_temp=[];
 var min_temp=[];
 var dew_point=[];
 var mean_dew_point=[];
 var min_dew_point=[];
 var max_humidity=[];
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



 var temperature=[];
  if (err) throw err;
  var rows = contents.split('\n');
 for (var i = 1; i <rows.length; i++) {
       var cells = rows[i].split(',');

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
        wind.push(cells[22]);; 
   
 }
 //Converting max temp to numeric array
function convert(old){
  var nums = old.map(function(str) {
    return parseInt(str); });
   // console.log(nums);
   return nums;
}
var max_arr = convert(max_temp);
// console.log(max_arr);
var min_arr = convert(min_temp);
 
 //1. For a given year display the highest temperature and day, lowest temperature and day, most humid day and humidity.
 console.log("1. For a given year display the highest temperature and day, lowest temperature and day, most humid day and humidity.")
  //Highest;
     var max_temp_in_a_day=Math.max.apply(null, max_temp);
     const index = max_temp.indexOf(max_temp_in_a_day.toString());
     var date =dates[index];
    // var newdate = date.split(" ")[1];
    // var newdate2= date.split(" ")[3];
    console.log("Highest: " + max_temp_in_a_day + "C On " + date);

    //Lowest

    var min_temp_in_a_day=Math.max.apply(null, min_temp);
    const index_low = min_temp.indexOf(min_temp_in_a_day.toString());
    var date2 =dates[index_low];
   // var newdate_2 = date2.split(" ")[1];
   // var newdate2_2= date2.split(" ")[3];
   console.log("Lowest: " + min_temp_in_a_day + "C On " + date2);

  //Humidity
  // console.log(max_humidity);
   var most_humid_day=Math.max.apply(null, max_humidity);
   const index_humid = max_humidity.indexOf(most_humid_day.toString());
   var date3 =dates[index_humid];
  // var newdate_3 = date.split(" ")[1];
  // var newdate2_3 = date.split(" ")[3];
 
 console.log("Humidity: " + most_humid_day + "C On " + date3);

 //2. For a given month display the average highest temperature, average lowest temperature, average mean humidity.
console.log("   ");
 console.log("2. For a given month display the average highest temperature, average lowest temperature, average mean humidity.");
  var max_arr = convert(max_temp);
  var min_arr = convert(min_temp);
  var mean_humid_array = convert( mean_humidity);
 
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
 
   console.log("Highest Average:" + Sum_values(max_arr)+"C");
   console.log("Lowest Average: " + Sum_values(min_arr)+ "C");
   console.log("Mean Humidity: " + Sum_values(mean_humid_array)+ "%");
 
  // console.log(max_temp);
//3. For a given month draw two horizontal bar charts on the console for the highest and lowest temperature on each day. Highest in red and lowest in blue.
console.log("   ");
console.log("3. For a given month draw two horizontal bar charts on the console for the highest and lowest temperature on each day. Highest in red and lowest in blue.");

function horizontal_bar(){
var array_max =  new Array();
var array_min =  new Array();

var counter=0;
var counter2=0;

for (var i = 0; i <rows.length; i++) {
    var y = max_arr[i];
    var a = min_arr[i];
    array_max.length=0;
    array_min.length=0;
    array_max.push("0"+ ++counter);
    array_min.push("0"+ ++counter2);
    if(y>0){
    for (var j = 0; j <y; j++)
    {
    
      array_max.push("+");
    }
    for (var j = 0; j <a; j++)
    {
      array_min.push("+");
    }
    array_max.push(y+"C");
    array_min .push(a+"C");

    console.log("\x1b[31m" + array_max.join('') ) ;
    console.log("\x1b[34m" + array_min.join('')) ;
    console.log("                             ");
  }}
}
horizontal_bar();

//4. Multiple Reports



//5. BONUS TASK. For a given month draw one horizontal bar chart on the console for the highest and lowest temperature on each day. Highest in red and lowest in blue.
console.log("   ");
console.log("5. BONUS TASK. For a given month draw one horizontal bar chart on the console for the highest and lowest temperature on each day. Highest in red and lowest in blue.");
function horizontal_bar_combined(){
  var array_max =  new Array();
  var array_min =  new Array();
  
  var counter=0;
 
  
  for (var i = 0; i <rows.length; i++) {
      var y = max_arr[i];
      var a = min_arr[i];
      array_max.length=0;
      array_min.length=0;
      array_max.push("0"+ ++counter);
     
      if(y>0){
      for (var j = 0; j <y; j++)
      {
      
        array_max.push("+");
      }
      for (var j = 0; j <a; j++)
      {
        array_min.push("+");
      }
      // array_max.push(y+"C");
      // array_min .push(a+"C");
  
      console.log("\x1b[31m" + array_max.join('') +  "\x1b[34m" + array_min.join('') +" " + a+"C"+  "-"   + y+"C" ) ;
    
      console.log("                             ");
    }}
  }

horizontal_bar_combined();

}); 
