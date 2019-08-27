const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();

axios
    .get('http://localhost:3001/day1')
    .then(response => {
        if (response.data) {
            const dayilyData = response.data
            let rain = []
            dayilyData.forEach(element => {
                if (element.rain !== null) {
                    rain.push(element.name)
                }
            });
            let day1 = {
                date: dayilyData[0].date,
                cityA: dayilyData[5].name + ' ' + dayilyData[5].temp,
                cityB: dayilyData[6].name + ' ' + dayilyData[6].temp,
                cityC: dayilyData[7].name + ' ' + dayilyData[7].temp,
                cityD: dayilyData[8].name + ' ' + dayilyData[8].temp,
                cityE: dayilyData[9].name + ' ' + dayilyData[9].temp,
                rain: rain
            }
            
            const dataToWrite = JSON.stringify(day1)
           fs.appendFile("solution.csv",dataToWrite + "\n",(err)=>{
               if(err){
               console.log('file not appended')
               }
           })
        }
    })
    .catch(error => {
        console.log(error)
    })
    axios
    .get('http://localhost:3001/day2')
    .then(response => {
        if (response.data) {
            const dayilyData = response.data
            let rain = []
            dayilyData.forEach(element => {
                if (element.rain !== null) {
                    rain.push(element.name)
                }
            });
            let day2 = {
                date: dayilyData[0].date,
                cityA: dayilyData[5].name + ' ' + dayilyData[5].temp,
                cityB: dayilyData[6].name + ' ' + dayilyData[6].temp,
                cityC: dayilyData[7].name + ' ' + dayilyData[7].temp,
                cityD: dayilyData[8].name + ' ' + dayilyData[8].temp,
                cityE: dayilyData[9].name + ' ' + dayilyData[9].temp,
                rain: rain
            }
            
            const dataToWrite = JSON.stringify(day2)
            fs.appendFile("solution.csv",dataToWrite + "\n",(err)=>{
                if(err){
                console.log('file not appended')
                }
            })
            
        }
    })
    .catch(error => {
        console.log(error)
    })
    axios
    .get('http://localhost:3001/day3')
    .then(response => {
        if (response.data) {
            const dayilyData = response.data
            let rain = []
            dayilyData.forEach(element => {
                if (element.rain !== null) {
                    rain.push(element.name)
                }
            });
            let day3 = {
                date: dayilyData[0].date,
                cityA: dayilyData[5].name + ' ' + dayilyData[5].temp,
                cityB: dayilyData[6].name + ' ' + dayilyData[6].temp,
                cityC: dayilyData[7].name + ' ' + dayilyData[7].temp,
                cityD: dayilyData[8].name + ' ' + dayilyData[8].temp,
                cityE: dayilyData[9].name + ' ' + dayilyData[9].temp,
                rain: rain
            }
            const dataToWrite = JSON.stringify(day3)
            fs.appendFile("solution.csv",dataToWrite + "\n",(err)=>{
                if(err){
                console.log('file not appended')
                }
            })
            
        }
    })
    .catch(error => {
        console.log(error)
    })
    axios
    .get('http://localhost:3001/day4')
    .then(response => {
        if (response.data) {
            const dayilyData = response.data
            let rain = []
            dayilyData.forEach(element => {
                if (element.rain !== null) {
                    rain.push(element.name)
                }
            });
            let day4 = {
                date: dayilyData[0].date,
                cityA: dayilyData[5].name + ' ' + dayilyData[5].temp,
                cityB: dayilyData[6].name + ' ' + dayilyData[6].temp,
                cityC: dayilyData[7].name + ' ' + dayilyData[7].temp,
                cityD: dayilyData[8].name + ' ' + dayilyData[8].temp,
                cityE: dayilyData[9].name + ' ' + dayilyData[9].temp,
                rain: rain
            }
            const dataToWrite = JSON.stringify(day4)
            fs.appendFile("solution.csv",dataToWrite + "\n",(err)=>{
                if(err){
                console.log('file not appended')
                }
            })
            
        }
    })
    .catch(error => {
        console.log(error)
    })
    axios
    .get('http://localhost:3001/day5')
    .then(response => {
        if (response.data) {
            const dayilyData = response.data
            let rain = []
            dayilyData.forEach(element => {
                if (element.rain !== null) {
                    rain.push(element.name)
                }
            });
            let day5 = {
                date: dayilyData[0].date,
                cityA: dayilyData[5].name + ' ' + dayilyData[5].temp,
                cityB: dayilyData[6].name + ' ' + dayilyData[6].temp,
                cityC: dayilyData[7].name + ' ' + dayilyData[7].temp,
                cityD: dayilyData[8].name + ' ' + dayilyData[8].temp,
                cityE: dayilyData[9].name + ' ' + dayilyData[9].temp,
                rain: rain
            }
            const dataToWrite = JSON.stringify(day5)
            fs.appendFile("solution.csv",dataToWrite + "\n",(err)=>{
                if(err){
                console.log('file not appended')
                }
            })
            
        }
    })
    .catch(error => {
        console.log(error)
    })

    
    
    const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})