import React, { useEffect, useState } from 'react'
import StylePopular from './Popular.module.css'
import axios from 'axios'

function Popular() {
    const [weatherData, setWeatherData] = useState([])
    const [loadingData, setLoadingData] = useState(true)
    const API_KEY = '109c3653b9c258e6db20576bb6a8ad27'

    useEffect(() => {
        const popularCities = ['Delhi', 'Mumbai', 'Hyderabad', 'Bangalore', 'Kolkata'];
        const fetchWeather = async () => {
            setLoadingData(true)
            try {
                const weatherResponses = await Promise.all(
                    popularCities.map(city =>
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
                    )
                )
                const weatherData = weatherResponses.map(response => response.data)
                setWeatherData(weatherData)
                setLoadingData(false)
            } catch (err) {
                console.log(err)
                setLoadingData(false)
            }
        }
        fetchWeather()
    }, [])

    if (loadingData) {
        return <div>Loading...</div>
    }

    if (!weatherData.length) {
        return null
    }

    return (
        <div>
            <div className={StylePopular['weather-card']}>
                <div className={StylePopular['card-header']}>
                    <span className={StylePopular.title}>Popular Cities</span>
                    <span className={StylePopular['view-more']}>View more</span>
                </div>
                <div className={StylePopular['city-weather']}>
                    {weatherData.map((data, index) => (
                        <div key={index} className={StylePopular.city}>
                            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                alt="Weather Icon"
                            />
                            <span className={StylePopular.dv}>{data.name}</span>
                            <span className={StylePopular.weather}>{data.weather[0].main}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popular
