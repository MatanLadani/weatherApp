const express = require('express');
const axios = require('axios');

const app = express();

const getdata = () => {
    try {
        return axios.get('http://localhost:3000')
    } catch (error) {
        throw error
    }
}

const manageData = async() => {
    const data = getdata().then(response => {
        if (response.data) {
            const dayilyData = response.data
            let allData = []
            dayilyData.forEach(element => {
                element
                    .days
                    .forEach((item, key) => {
                        objectData = {
                            id: key,
                            name: element.city,
                            date: item.dt_txt,
                            temp: item.main.temp,
                            rain: item.rain
                                ? item.rain
                                : null
                        }
                        allData.push(objectData)
                    })
            });
            app.get('/', (req, res) => {
                res.send(allData)
            })
            let day1 = []
            let day2 = []
            let day3 = []
            let day4 = []
            let day5 = []
            for (let i = 0; i < allData.length; i++) {
                if (allData[i].id === 0) {
                    day1.push(allData[i])
                }
                if (allData[i].id === 1) {
                    day2.push(allData[i])
                }
                if (allData[i].id === 2) {
                    day3.push(allData[i])
                }
                if (allData[i].id === 3) {
                    day4.push(allData[i])
                }
                if (allData[i].id === 4) {
                    day5.push(allData[i])
                }
            }
            let sortDay1 = day1.sort((a, b) => {
                return a.temp - b.temp
            })
            app.get('/day1', (req, res) => {
                res.send(sortDay1)
            })
            let sortDay2 = day2.sort((a, b) => {
                return a.temp - b.temp
            })
            app.get('/day2', (req, res) => {
                res.send(sortDay2)
            })
            let sortDay3 = day3.sort((a, b) => {
                return a.temp - b.temp
            })
            app.get('/day3', (req, res) => {
                res.send(sortDay3)
            })
            let sortDay4 = day4.sort((a, b) => {
                return a.temp - b.temp
            })
            app.get('/day4', (req, res) => {
                res.send(sortDay4)
            })
            let sortDay5 = day5.sort((a, b) => {
                return a.temp - b.temp
            })
            app.get('/day5', (req, res) => {
                res.send(sortDay5)
            })

        }
    }).catch(error => {
        console.log(error)
    })
}
manageData()

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`started at port: ${port}`)
})