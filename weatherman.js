const fs = require('fs');
const { get } = require('http');

const months = {
    "1": "Jan", "2": "Feb", "3": "Mar", "4": "Apr", "5": "May", "6": "Jun", "7": "Jul", "8": "Aug", "9": "Sep",
    "10": "Oct", "11": "Nov", "12": "Dec"
}

//  Return Array of Objects containing info for each day for a Specific Month

function get_data(year, month) {
    return new Promise((resolve, reject) => {
        const final_arry = [];
        month = months[month]
        file_name = 'Murree_weather_' + year + '_' + month + '.txt'
        fs.readFile(file_name, 'utf8', (err, data) => {
            if (err) {
                reject();
                Console.log("Data is Unavailable For the Month " + month + "  Year " + year)
                return;
            }
            let x = data.split(/\r?\n/)
            let k = String(x[0]).split(',')

            for (s = 1; s <= x.length; s++) {
                const weather_json = {}
                let v = String(x[s]).split(',')
                for (i = 0; i <= v.length; i++) {
                    if (k.length == v.length) {
                        if (k[i] == null) {
                            continue
                        }
                        if (v[i] == null) {
                            v[i] == ''
                        }

                        weather_json[k[i]] = v[i]
                    }
                }   
                final_arry.push(weather_json)
            }
            resolve(final_arry);
        });
    });
}

async function data(y,m){
    const data = await get_data(y, m);
    console.log(data)
    return(data)
}

// Return Data for a Given Year with Insights

async function get_year_info(y) {
    let max = [];
    let min = [];
    let max_hum = [];
    const year_info = []
    for (m = 1; m <= 12; m++) {
        try {
            const data = await get_data(y, m)

            for (d = 1; d < data.length; d++) {
                const temp_json = {}
                const max_temp = data[d]['Max TemperatureC']
                temp_json['date'] = data[d]['PKT']
                if (max_temp != undefined) {
                    temp_json['max'] = max_temp
                }
                const min_temp = data[d]['Min TemperatureC']
                if (min_temp != undefined) {
                    temp_json['min'] = min_temp
                }
                const max_hum = data[d]['Max Humidity']
                if (min_temp != undefined) {
                    temp_json['max_hum'] = max_hum
                }

                year_info.push(temp_json)
            }
        }
        catch (err) {
        }
    }

    for (let m = 0; m < year_info.length; m++) {
        if (year_info[m]['max'] != undefined) {
            max.push(year_info[m]['max'])
        }
        if (year_info[m]['min'] != undefined) {
            min.push(year_info[m]['min'])
        }
        if (year_info[m]['max_hum'] != undefined) {
            max_hum.push(year_info[m]['max_hum'])
        }

    }
    console.log("Maximum Temmprature Of the Year " + y + " is " + Math.max(...max) + "C ")
    console.log("Minimum Temmprature Of the Year " + y + " is " + Math.min(...min) + "C ")
    console.log("Most Humidity Of the Year " + y + " is " + Math.max(...max_hum) + "C ")
}

//  Returb Average For the Given Data

function get_avg(temp_arr) {
    sum = 0;
    for (let i = 0; i < temp_arr.length; i++) {
        sum = sum + parseInt(temp_arr[i]);
    }
    let average = sum / temp_arr.length;
    return (average);
}

//  Return Average Maximum Temp, Minimum Temp And Mean Humidity For the given Month

async function month_info(y, m) {
    let max_temprature = [];
    let min_temprature = [];
    let mean_temprature = [];

    const data = await get_data(y, m);
    console.log(data)

    for (d = 0; d < data.length; d++) {
        let max_temp = data[d]['Max TemperatureC'];
        let min_temp = data[d]['Min TemperatureC'];
        let mean_temp = data[d][' Mean Humidity'];
        if (max_temp == undefined) {
            max_temp = 0
        }
        if (min_temp == undefined) {
            min_temp = 0
        }
        if (mean_temp == undefined) {
            mean_temp = 0
        }
        mean_temprature.push(mean_temp);
        max_temprature.push(max_temp);
        min_temprature.push(min_temp);

    }

    let max_avg = get_avg(max_temprature)
    let min_tem_average = get_avg(min_temprature)
    let mean_tem_average = get_avg(mean_temprature)
    console.log('Maximum Average Temperature:', max_avg);
    console.log('Minimum Average Temperature:', min_tem_average);
    console.log("Mean Average Humidity ", mean_tem_average)
}

// Printing Charts For a Given Month

async function print_charts(y, m) {
    const data = await get_data(y, m);
    for (d = 0; d <= data.length; d++) {
        if (data[d]) {
            const maxTemp = data[d]['Max TemperatureC'];
            const minTemp = data[d]['Min TemperatureC'];
            if (maxTemp != undefined) {
                for (max = 0; max <= maxTemp; max++) {
                    process.stdout.write('\x1b[31m+\x1b[0m ');
                }
                process.stdout.write(" " + maxTemp + "C")
                console.log('\n')
                if (minTemp != undefined) {
                    for (min = 0; min <= maxTemp; min++) {
                        process.stdout.write('\x1b[34m+\x1b[0m ');
                    }
                }
                process.stdout.write(" " + minTemp + "C")
                console.log('\n')
            }
        }
    }
}

// data(2014, 6)
get_year_info(2015)
// month_info(2014, 5)
print_charts(2012, 2)