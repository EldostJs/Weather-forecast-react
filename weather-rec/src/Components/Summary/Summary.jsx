import React, { useContext, useEffect, useState } from 'react';
import StyleSummary from './Summary.module.css';
import axios from 'axios';
import CityContext from '../Context/CityContext';

function Summary() {
    const { city } = useContext(CityContext);
    const [weatherData, setWeatherData] = useState(null);
    const [loadingData, setLoadingData] = useState(true);
    const API_KEY = '109c3653b9c258e6db20576bb6a8ad27';

    useEffect(() => {
        const fetchWeather = async () => {
            setLoadingData(true);
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
                setWeatherData(response.data);
                setLoadingData(false);
            } catch (err) {
                console.log(err);
                setLoadingData(false);
            }
        };

        fetchWeather();
    }, [city]);

    console.log('aaa', weatherData);

    if (loadingData) {
        return <div>Loading...</div>;
    }

    if (!weatherData) {
        return null;
    }

    console.log(weatherData);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${month}-${day} ${hours}:${minutes}`;
    };

    return (
        <div>
            <div className={StyleSummary.card}>
                <div className={StyleSummary['summary-header']}>
                    <span className={StyleSummary.title}>Summary</span>
                    <div className={StyleSummary.tabs}>
                        <span className={StyleSummary.tab}>Summary</span>
                        <span className={StyleSummary.tab}>Hourly</span>
                        <span className={StyleSummary.tab}>More Details</span>
                    </div>
                </div>
                <div className={StyleSummary['weather-info']}>
                    {weatherData.list.slice(0, 10).map((item, index) => (
                        <div key={index} className={StyleSummary['weather-block']}>
                            <div className={StyleSummary.temp}>{(item.main.feels_like - 273.15).toFixed(2)}°C</div>
                            <div className={StyleSummary.rain}>{item.main.humidity}%</div>
                            <div className={StyleSummary.time}>{formatDate(item.dt_txt)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Summary;
