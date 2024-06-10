import React from 'react'
import StyleMap from './Map.module.css'

function Map() {
    return (
        <div>
            <div className={StyleMap.map}>
                <div id="map"></div>
            </div>
        </div>
    )
}

export default Map