import React from 'react'
import Header from '../Header/Nav'
import Current from '../Current-Weather-Card/Current';
import Map from '../Map/Map';
import Popular from '../Popular/Popular';
import Forecast from '../Forecast/Forecast';
import Summary from '../Summary/Summary';

import StyleMother from './Mother.module.css'

function Mother() {
    return (
        <div className={StyleMother.md}>
            <div className={StyleMother.card1}>
            <Header />
            </div>
            <div className={StyleMother.card2}>
            <Current />
            <Map />
            <Popular />
            </div>
            <div className={StyleMother.card3}>
            <Forecast />
            <Summary />
            </div>
        </div>
    )
}

export default Mother