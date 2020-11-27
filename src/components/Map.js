import React from 'react'
import GoogleMapReact from 'google-map-react' 
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import LocationPin from './LocationPin'
import '../styles/Map.css'

const Map = ({ location, zoomLevel }) => {
    console.log('location', location)
    return (
        <div className="map">
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB3D9pTFxIfXdU-kOJZmja40gGFKxvvUzo' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
                </GoogleMapReact>
            </div>
        </div>
  )
}

  export default Map