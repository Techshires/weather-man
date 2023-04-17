const { constants } = require('buffer');
const fs = require('fs');
const { get } = require('http');
const weather_json = {}

const months = {"1": "Jan", "2":"Feb","3":"Mar","4":"Apr","5":"May","6":"Jun","7":"Jul","8":"Aug","9":"Sep",
                "10":"Oct","11":"Nov","12":"Dec"}

function get_data(year, month){
    const final_arry = []
    month = months[month]
    file_name = 'Murree_weather_'+year+'_'+month+'.txt'
    fs.readFile(file_name, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        //   "Split file with new line and storing 1st row as key and other lines a values"
        let x = data.split(/\r?\n/)
        let k = String(x[0]).split(',')
    
        for (s = 1; s <= x.length; s++) {
            let v = String(x[s]).split(',')
            for (i = 0; i <= v.length; i++) {
                if (k.length == v.length){
                    if (k[i] == null){
                        continue
                    }
                    if(v[i] == null){
                        v[i] == ''
                    }
                weather_json[k[i]] = v[i]
                }
                
            }
            // console.log(weather_json)
            // final_json[weather_json.PKT] = weather_json
            final_arry.push(weather_json)
        }
        console.log(final_arry)
    });

}

function get_max(y,m){
    let temp_arr  = get_data(y,m)
    console.log(temp_arr)
}

get_max(2004,6)