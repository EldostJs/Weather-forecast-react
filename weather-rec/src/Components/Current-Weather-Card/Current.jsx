import React, { useEffect, useState, useContext } from 'react'
import StyleCurrent from './Current.module.css'
import axios from 'axios'
import CityContext from '../Context/CityContext'

function Current() {
    const { city } = useContext(CityContext)
    const [weatherData, setWeatherData] = useState(null)
    const [loadingData, setLoadingData] = useState(true)
    const API_KEY = '109c3653b9c258e6db20576bb6a8ad27'

    useEffect(() => {
        const fetchWeather = async () => {
            setLoadingData(true)
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
                setWeatherData(response.data)
                setLoadingData(false)
            } catch (err) {
                console.log(err)
                setLoadingData(false)
            }
        }
        if (city) {
            fetchWeather()
        }
    }, [city])

    if (loadingData) {
        return <div>Loading...</div>
    }

    if (!weatherData) {
        return null
    }

    console.log(weatherData);
    return (
        <div>
            <div className={StyleCurrent['weather-card']}>
                <div className={StyleCurrent['weather-header']}>
                    <div className={StyleCurrent['current-weather']}>Current Weather</div>
                    <div className={StyleCurrent.time}>{new Date().toLocaleTimeString()}</div>
                </div>
                <div className={StyleCurrent['weather-info']}>
                    <div className={StyleCurrent['weather-icon']}>
                        <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                            alt="Weather Icon"
                        />
                    </div>
                    <div className={StyleCurrent.temperature}>
                        {weatherData.main.temp}<span className={StyleCurrent['degree-symbol']}>°C</span>
                    </div>
                    <div className={StyleCurrent.description}>{weatherData.weather[0].description}</div>
                </div>
                <div className={StyleCurrent['weather-details']}>
                    <div className={StyleCurrent.detail}>
                        <img src="https://cdn-icons-png.flaticon.com/128/16233/16233851.png" alt="" className={StyleCurrent.pd} />
                        <span className={StyleCurrent.value}>{weatherData.main.feels_like}°C</span>
                    </div>
                    <div className={StyleCurrent.detail}>
                        <img src="https://cdn-icons-png.flaticon.com/128/606/606797.png" alt="" className={StyleCurrent.pd} />
                        <span className={StyleCurrent.value}>{weatherData.main.humidity}%</span>
                    </div>
                    <div className={StyleCurrent.detail}>
                        <img src="https://cdn-icons-png.flaticon.com/128/6232/6232535.png" alt="" className={StyleCurrent.pd} />
                        <span className={StyleCurrent.value}>{weatherData.wind.speed}m/s</span>
                    </div>
                    <div className={StyleCurrent.detail}>
                        <img src="https://cdn-icons-png.flaticon.com/128/106/106061.png" alt="" className={StyleCurrent.pd} />
                        <span className={StyleCurrent.value}>{weatherData.wind.deg}°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Current
