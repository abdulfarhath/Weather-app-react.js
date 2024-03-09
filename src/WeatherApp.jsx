import Search from './Search'
import Info from './Info'
import { useState } from 'react';
import "./WeatherApp.css";

export default function WeatherApp() {
    
    const [weather , setWeather] = useState({
        city: "Delhi",
        feelslike: 13.25,
        humididy: 71,
        temp: 13.95,
        tempMax: 14.05,
        tempMin: 13.95,
        weather: "haze",
    })

    let updateweatherInfo = (newinfo) =>{
        setWeather(newinfo);
    }

    return (
        <div className='weatherdiv'>
            <Search updateweatherInfo = {updateweatherInfo} />
            <Info  info = {weather} />
        </div>
    );
    
}