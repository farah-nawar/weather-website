import React, { useState } from 'react'
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import '../weather app/weather.css'

export default function Weather() {
    let api_key="51f8c53e76a0f1d6884f7f367e37e3ec";
    const[wicon,setwicon]=useState(clear_icon)
    const search = async() => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value ===''){
            return 0;
        }
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("windspeed");
    const temperature= document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-loc");
    humidity[0].innerHTML=data.main.humidity +" %";
    wind[0].innerHTML=Math.floor(data.wind.speed)+" Km/h";
    temperature[0].innerHTML=Math.floor(data.main.temp)+" C";
    location[0].innerHTML=data.name;

    if (data.weather[0].icon.startsWith('01')) {
        setwicon(clear_icon);
    } else if (data.weather[0].icon.startsWith('02')) {
        setwicon(cloud_icon);
    } else if (data.weather[0].icon.startsWith('03')) {
        setwicon(drizzle_icon);
    } else if (data.weather[0].icon.startsWith('04')) {
        setwicon(drizzle_icon);
    } else if (data.weather[0].icon.startsWith('09')) {
        setwicon(rain_icon);
    } else if (data.weather[0].icon.startsWith('10')) {
        setwicon(rain_icon);
    } else if (data.weather[0].icon.startsWith('13')) {
        setwicon(snow_icon);
    } else {
        setwicon(clear_icon);
    }
}
    
  return (
    <div className='container'>
        <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='Search'/>
        <div className='search_icon' onClick={() => search()}>
            <img src={search_icon} alt="Search"></img>
        </div>
        </div>
        <div className="weather-image">
            <img src={clear_icon} alt="" />
        </div>
       <div className="weather-temp">24</div>
       <div className="weather-loc">London</div>
       <div className="data-container">
        <div className="element">
            <img src={humidity_icon} alt="" className='icon'/>
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className='text'>Humidity</div>
            </div>
        </div>
        <div className="element">
            <img src={wind_icon} alt="" className='icon'/>
            <div className="data">
                <div className="windspeed">18 Km/h</div>
                <div className='text'>Wind Speed</div>
            </div>
        </div>
       </div>
       
    </div>
  )
}
