import React from 'react'
import StyleSummary from './Summary.module.css'

function Summary() {
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
                    <div className={StyleSummary['weather-block']}>
                        <div className={StyleSummary.temp}>22°</div>
                        <div className={StyleSummary.rain}>78%</div>
                        <div className={StyleSummary.time}>Now</div>
                    </div>
                    <div className={StyleSummary['weather-block']}>
                        <div className={StyleSummary.temp}>20°</div>
                        <div className={StyleSummary.rain}>79%</div>
                        <div className={StyleSummary.time}>7 PM</div>
                    </div>
                    <div className={StyleSummary['weather-block']}>
                        <div className={StyleSummary.temp}>22°</div>
                        <div className={StyleSummary.rain}>76%</div>
                        <div className={StyleSummary.time}>9 PM</div>
                    </div>
                    <div className={StyleSummary['weather-block']}>
                        <div className={StyleSummary.temp}>19°</div>
                        <div className={StyleSummary.rain}>81%</div>
                        <div className={StyleSummary.time}>11 PM</div>
                    </div>
                    <div className={StyleSummary['weather-block']}>
                        <div className={StyleSummary.temp}>21°</div>
                        <div className={StyleSummary.rain}>76%</div>
                        <div className={StyleSummary.time}>1 PM</div>
                    </div>
                    <div className={StyleSummary['weather-block']}>
                        <div className={StyleSummary.temp}>22°</div>
                        <div className={StyleSummary.rain}>78%</div>
                        <div className={StyleSummary.time}>3 PM</div>
                    </div>
                    <div className={StyleSummary['weather-block']}>
                        <div className={StyleSummary.temp}>23°</div>
                        <div className={StyleSummary.rain}>68%</div>
                        <div className={StyleSummary.time}>5 PM</div>
                    </div>
                    <div className={StyleSummary['weather-block']}>
                        <div className={StyleSummary.temp}>24°</div>
                        <div className={StyleSummary.rain}>61%</div>
                        <div className={StyleSummary.time}>7 AM</div>
                    </div>
                    <div className={StyleSummary['weather-block']}>
                        <div className={StyleSummary.temp}>25°</div>
                        <div className={StyleSummary.rain}>69%</div>
                        <div className={StyleSummary.time}>9 AM</div>
                    </div>
                    <div className={StyleSummary['weather-block']}>
                        <div className={StyleSummary.temp}>23°</div>
                        <div className={StyleSummary.rain}>70%</div>
                        <div className={StyleSummary.time}>11 AM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary