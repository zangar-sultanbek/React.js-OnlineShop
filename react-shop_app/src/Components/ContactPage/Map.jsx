import React from 'react'
import mapCSS from './Map.module.css';

const Map = () => {
  return (
    <div className={mapCSS.contacts_all}>
        <div className={mapCSS.info_container}>
            <div>
                <h3>Zangar</h3>
                <p>Okopowa 59 | 01-043</p>
                <p>Schedule: <strong>10:00-21:00</strong></p>
            </div>
            <div>
                <p>Phone 1: +48 696 121212</p>
                <p>Phone 2: +48 696 212121</p>
            </div>
        </div>
        <div className={mapCSS.map_container}>
            <iframe className={mapCSS.map} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=akademia%20ekonomizna%20Warsaw+()&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=f73574aaa56595fe5df4b65223db768fae44044f'></script>
            </div>
    </div>
  )
}

export default Map;