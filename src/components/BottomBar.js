import React from 'react'
import '../styles/BottomBar.css'

const BottomBar = ({goBack, openLocations}) => {
    return (
        <div className="BottomBarContainer">
            <div className="BottomBar">
                <h1 className="BottomBarTitle" onClick={() => goBack()}> Categories </h1>
                <h1 className="BottomBarTitle" onClick={() => {
                    goBack()
                    openLocations()
                }}> Locations </h1>
            </div>
        </div>
    )
}

export default BottomBar