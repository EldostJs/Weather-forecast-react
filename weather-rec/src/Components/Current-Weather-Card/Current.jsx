import React from 'react'
import StyleCurrent from './Current.module.css'

function Current() {
    return (
        <div>
            <div className={StyleCurrent['weather-card']}>
                <div className={StyleCurrent['weather-header']}>
                    <div className={StyleCurrent['current-weather']}>Current Weather</div>
                    <div className={StyleCurrent.time}>6:25 PM</div>
                </div>
                <div className={StyleCurrent['weather-info']}>
                    <div className={StyleCurrent['weather-icon']}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Weather Icon" />
                    </div>
                    <div className={StyleCurrent.temperature}>
                        24<span className={StyleCurrent['degree-symbol']}>°C</span>
                    </div>
                    <div className={StyleCurrent.description}>Heavy Rain</div>
                </div>
                <div className={StyleCurrent['weather-details']}>
                    <div className={StyleCurrent.detail}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="" className={StyleCurrent.pd} />
                        <span className={StyleCurrent.value}>173</span>
                    </div>
                    <div className={StyleCurrent.detail}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="" className={StyleCurrent.pd} />
                        <span className={StyleCurrent.value}>92%</span>
                    </div>
                    <div className={StyleCurrent.detail}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="" className={StyleCurrent.pd} />
                        <span className={StyleCurrent.value}>6km/h</span>
                    </div>
                    <div className={StyleCurrent.detail}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="" className={StyleCurrent.pd} />
                        <span className={StyleCurrent.value}>3</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Current