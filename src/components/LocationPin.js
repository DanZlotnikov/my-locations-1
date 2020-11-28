import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileWink } from '@fortawesome/free-solid-svg-icons'

const LocationPin = ({ text }) => {
    return (
        <div className="pin">
            <FontAwesomeIcon 
                icon={faSmileWink} 
                size={'3x'} 
            />
            <p className="pin-text">{text}</p>
        </div>
)}

export default LocationPin

