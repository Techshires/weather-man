# Arbi-Weather-Man
Write an application that generates the following reports. The user can specify more than one report at the same time. You have 3 days to submit the first iteration from the day you are assigned this task. 
The program should be designed as follows: 
1. Define a data structure for holding each weather reading. 
2. Define a function for parsing the files and populating the readings data structure with correct data types.
3. Define a data structure for holding the calculations results. 
4. Define a function for computing the calculations given the readings data structure.
5. Define a function for creating the reports given the results data structure.
6. Define main function for assembling the above and running the program. 

### 1. For a given year display the highest temperature and day, lowest temperature and day, most humid day and humidity. 
```
$ node weatherman.js /path/to/files-dir -e 2002
```
Highest: 45C on June 23 <br />
Lowest: 01C on December 22 <br />
Humidity: 95% on August 14 <br />

### 2. For a given month display the average highest temperature, average lowest temperature, average mean humidity. 
```
$ node weatherman.js /path/to/files-dir -a 2005/6 
```
Highest Average: 39C <br />
Lowest Average: 18C <br />
Average Mean Humidity: 71% <br />
### 3. For a given month draw two horizontal bar charts on the console for the highest and lowest temperature on each day. Highest in red and lowest in blue. 
```
$ weatherman.js /path/to/files-dir -c 2011/03 
```
March 2011 <br />
01 +++++++++++++++++++++++++ 25C <br />
01 +++++++++++ 11C <br />
02 ++++++++++++++++++++++ 22C <br />
02 ++++++++ 08C <br />
### 4. Multiple Reports 
```
$ node weatherman.js /path/to/files-dir -c 2011/03 -a 2011/3 -e 2011
```

### 5. BONUS TASK. For a given month draw one horizontal bar chart on the console for the highest and lowest temperature on each day. Highest in red and lowest in blue. 
```
$ node weatherman.js /path/to/files-dir -c 2011/3 
```
March 2011 <br />
01 ++++++++++++++++++++++++++++++++++++ 11C - 25C <br />
02 ++++++++++++++++++++++++++++++ 08C - 22C <br />
