import React from 'react'
import StylePopular from './Popular.module.css'

function Popular() {
    return (
        <div>
            <div className={StylePopular['weather-card']}>
                <div className={StylePopular['card-header']}>
                    <span className={StylePopular.title}>Popular Cities</span>
                    <span className={StylePopular['view-more']}>View more</span>
                </div>
                <div className={StylePopular['city-weather']}>
                    <div className={StylePopular.city}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Cloudy" />
                        <span className={StylePopular.dv}>Delhi</span>
                        <span className={StylePopular.weather}>Partly Cloudy</span>
                    </div>
                    <div className={StylePopular.city}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Drizzle Rain" />
                        <span className={StylePopular.dv}>Mumbai</span>
                        <span className={StylePopular.weather}>Drizzle Rain</span>
                    </div>
                    <div className={StylePopular.city}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Heavy Rain" />
                        <span className={StylePopular.dv}>Hyderabad</span>
                        <span className={StylePopular.weather}>Heavy Rain</span>
                    </div>
                    <div className={StylePopular.city}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Light Thunders" />
                        <span className={StylePopular.dv}>Bangalore</span>
                        <span className={StylePopular.weather}>Light Thunders</span>
                    </div>
                    <div className={StylePopular.city}>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Mostly Sunny" />
                        <span className={StylePopular.dv}>Kolkata</span>
                        <span className={StylePopular.weather}>Mostly Sunny</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular