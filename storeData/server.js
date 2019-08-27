const express = require('express');
const axios = require('axios');

const app = express();

const API_KEY = 'fff9f900987a05902f07d757aba5540f';
const cityId = [
    281184,
    5128581,
    292223,
    2267057,
    3143244,
    2988507,
    2950159,
    264371,
    1835848,
    1880252
]

let alldata = []

for (let i = 0; i < cityId.length; i++) {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId[i]}&units=metric&appid=${API_KEY}`
    axios
        .get(weatherURL)
        .then(response => {
            return (data = response.data)
        })
        .then(data => {
            const name = data.city.name
            const dailyData = data
                .list
                .filter(reading => reading.dt_txt.includes("18:00:00"))
            let obj = {
                city: name,
                days: dailyData
            }
            alldata.push(obj)
            app.get("/", (req, res) => {
                res.json(alldata)
            })
        })
        .catch(err => {
            if (err) {
                throw err
            }
        })
}

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server is running at port:${port}`);
})