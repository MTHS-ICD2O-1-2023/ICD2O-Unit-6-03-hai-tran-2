// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Get API info.
 */

async function showCurrentWeather() {
  try {
    const resultJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const jsonData = await resultJSON.json()
    const currentWeather = jsonData["weather"][0]["description"]
    const weatherIcon = jsonData["weather"][0]["icon"]
    const urlAddress = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
    let img = document.createElement("img")
    img.src = urlAddress
    document.getElementById("result").appendChild(img)
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<br />" + "The current weather is " + currentWeather
  } catch (error) {
    console.error(error)
  }
}
