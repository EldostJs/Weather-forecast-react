import React from 'react'
import StyleForecast from './Forecast.module.css'

function Forecast() {
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
                    <div className={StyleForecast.day}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Rain" />
                        <span className={StyleForecast.temp}>24° / 22°</span>
                        <span className={StyleForecast.date}>25 Jul, Thu</span>
                    </div>
                    <div className={StyleForecast.day}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Rain" />
                        <span className={StyleForecast.temp}>24° / 22°</span>
                        <span className={StyleForecast.date}>26 Jul, Fri</span>
                    </div>
                    <div className={StyleForecast.day}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Rain" />
                        <span className={StyleForecast.temp}>24° / 22°</span>
                        <span className={StyleForecast.date}>27 Jul, Sat</span>
                    </div>
                    <div className={StyleForecast.day}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Rain" />
                        <span className={StyleForecast.temp}>24° / 22°</span>
                        <span className={StyleForecast.date}>28 Jul, Sun</span>
                    </div>
                    <div className={StyleForecast.day}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Rain" />
                        <span className={StyleForecast.temp}>24° / 22°</span>
                        <span className={StyleForecast.date}>29 Jul, Mon</span>
                    </div>
                    <div className={StyleForecast.day}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Rain" />
                        <span className={StyleForecast.temp}>24° / 22°</span>
                        <span className={StyleForecast.date}>30 Jul, Tue</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast