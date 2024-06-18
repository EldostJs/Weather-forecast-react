import React, { useContext, useEffect, useState } from 'react';
import StyleForecast from './Forecast.module.css';
import axios from 'axios';
import CityContext from '../Context/CityContext';

function Forecast() {
    const { city } = useContext(CityContext);
    const [weatherData, setWeatherData] = useState(null);
    const [loadingData, setLoadingData] = useState(true);
    const [days, setDays] = useState(7);
    const API_KEY = '096bb3d057f540f69db62932241406';

    useEffect(() => {
        const fetchWeather = async () => {
            setLoadingData(true);
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=yes&alerts=yes`);
                setWeatherData(response.data);
                setLoadingData(false);
            } catch (err) {
                console.log(err);
                setLoadingData(false);
            }
        };

        fetchWeather();
    }, [city, days]);

    if (loadingData) {
        return <div>Loading...</div>;
    }

    if (!weatherData) {
        return null;
    }

    const forecastDays = weatherData.forecast.forecastday.slice(0, 6);

    console.log('forecast', weatherData);

    return (
        <div>
            <div className={StyleForecast['forecast-card']}>
                <div className={StyleForecast['card-header']}>
                    <span className={StyleForecast.title}>Forecast</span>
                    <div className={StyleForecast['toggle-buttons']}>
                        <button 
                            className={StyleForecast.toggle} 
                            onClick={() => setDays(3)}
                        >
                            3 Days
                        </button>
                        <button 
                            className={StyleForecast.toggle} 
                            onClick={() => setDays(6)}
                        >
                            6 Days
                        </button>
                    </div>
                </div>
                <div className={StyleForecast['forecast-list']}>
                    {forecastDays.map((item, index) => (
                        <div key={index} className={StyleForecast.day}>
                            <img src={`https:${item.day.condition.icon}`} alt={item.day.condition.text} />
                            <span className={StyleForecast.temp}>{item.day.maxtemp_c}°C / {item.day.avghumidity}%</span>
                            <span className={StyleForecast.date}>{item.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Forecast;
