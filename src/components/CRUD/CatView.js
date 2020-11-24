import React from 'react'
import '../../styles/CatView.css'

class CatView extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {}
      }
 
    render () {
        const locations = this.props.cat.locations
        return (
            <table className="CatViewContainer">
                <tbody>
                    <tr className="CatViewLocationRow" className="CatViewLocationRow"> 
                        <td className="CatViewLocationHeader">Name</td> 
                        <td className="CatViewLocationHeader">Address</td>
                        <td className="CatViewLocationHeader">CoordinatesX</td>
                        <td className="CatViewLocationHeader">CoordinatesY</td>
                    </tr>
                    {locations.map((location) => {
                        return (
                            <tr key={Math.random()} className="CatViewLocationRow"> 
                                <td className="CatViewLocationCell">{location.name}</td> 
                                <td className="CatViewLocationCell">{location.address}</td>
                                <td className="CatViewLocationCell">{location.coordinatesX}</td>
                                <td className="CatViewLocationCell">{location.coordinatesY}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    )}
}

export default CatView
