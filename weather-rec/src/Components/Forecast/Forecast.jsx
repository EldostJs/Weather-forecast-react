import React, { useContext, useEffect, useState } from 'react';
import StyleForecast from './Forecast.module.css';
import axios from 'axios';
import CityContext from '../Context/CityContext';

function Forecast() {
    const { city } = useContext(CityContext);
    const {cnt} = 6
    const [weatherData, setWeatherData] = useState(null);
    const [loadingData, setLoadingData] = useState(true);
    const API_KEY = '109c3653b9c258e6db20576bb6a8ad27';

    useEffect(() => {
        const fetchWeather = async () => {
            setLoadingData(true);
            try {
                const response = await axios.get(`api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${API_KEY}`);
                setWeatherData(response.data);
                setLoadingData(false);
            } catch (err) {
                console.log(err);
                setLoadingData(false);
            }
        };

        fetchWeather();
    }, [city]);

    console.log('forecast', weatherData);

    if (loadingData) {
        return <div>Loading...</div>;
    }

    if (!weatherData) {
        return null;
    }

    console.log(weatherData);

    return (
        <div>
            <div className={StyleForecast['forecast-card']}>
                <div className={StyleForecast['card-header']}>
                    <span className={StyleForecast.title}>Forecast</span>
                    <div className={StyleForecast['toggle-buttons']}>
                        <button className={StyleForecast.toggle}>7 Days</button>
                        <button className={StyleForecast.toggle}>10 Days</button>
                    </div>
                </div>
                <div className={StyleForecast['forecast-list']}>
                    {weatherData.list.slice(0,6).map((item, index) => (
                        <div key={index} className={StyleForecast.day}>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                            <span className={StyleForecast.temp}>{item.main.feels_like}° / {item.main.humidity}%</span>
                            <span className={StyleForecast.date}>{item.dt_txt}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Forecast;
