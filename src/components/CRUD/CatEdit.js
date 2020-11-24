import React from 'react'
import '../../styles/CatEdit.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

class CatEdit extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            x: '',
            y: '',
            placeholderName: true,
            placeholderAddress: true,
            placeholderX: true,
            placeholderY: true
        }
    
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
        this.handleChangeX = this.handleChangeX.bind(this)
        this.handleChangeY = this.handleChangeY.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    
    handleChangeName(event) {
        this.setState({name: event.target.value})
    }
    handleChangeAddress(event) {
        this.setState({address: event.target.value})
    }
    handleChangeX(event) {
        this.setState({x: event.target.value})
    }
    handleChangeY(event) {
        this.setState({y: event.target.value})
    }

    handleSubmit(event) {
        if (this.state.name == '' || this.state.address == '' || this.state.x == '' || this.state.y == '') {
            alert("location data must not be empty")
            return
        }
        this.props.addLocation(this.props.cat, {
            name: this.state.name, 
            address: this.state.address, 
            x: this.state.x,
            y: this.state.y
        })
        event.preventDefault()
    }
    render () {
        const locations = this.props.cat.locations
        console.log('edit screen')
        const nameClicked = () => {
            this.setState({placeholderName: false})        
        }
        const addressClicked = () => {
            this.setState({placeholderAddress: false})        
        }
        const xClicked = () => {
            this.setState({placeholderX: false})        
        }
        const yClicked = () => {
            this.setState({placeholderY: false})        
        }
        return (
            <div>
                <table className="CatEditContainer">
                    <tbody>
                        <tr className="CatEditLocationRow" className="CatEditLocationRow"> 
                            <td className="CatEditLocationHeader">Name</td> 
                            <td className="CatEditLocationHeader">Address</td>
                            <td className="CatEditLocationHeader">CoordinatesX</td>
                            <td className="CatEditLocationHeader">CoordinatesY</td>
                            <td className="CatEditLocationHeader"></td>
                        </tr>
                        {locations.map((location) => {
                            return (
                                <tr key={Math.random()} className="CatEditLocationRow"> 
                                    <td className="CatEditLocationCell">{location.name}</td> 
                                    <td className="CatEditLocationCell">{location.address}</td>
                                    <td className="CatEditLocationCell">{location.coordinatesX}</td>
                                    <td className="CatEditLocationCell">{location.coordinatesY}</td>
                                    <td className="CatEditLocationCell">
                                        <FontAwesomeIcon 
                                            className="Icon" 
                                            onClick={() => this.props.removeLocation(this.props.cat, location)} 
                                            icon={faTrash} 
                                            size={'1x'} /> 
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="LocAddContainer">
                    <div className="LocAddInput">
                        <input
                            placeholder={this.state.placeholderName ? "Name" : null}
                            type="text" 
                            value={this.state.name}
                            onClick={nameClicked}
                            onChange={this.handleChangeName}
                            
                        />
                    </div>
                    <div className="LocAddInput">
                        <input
                            placeholder={this.state.placeholderAddress ? "Address" : null}
                            type="text" 
                            value={this.state.address}
                            onClick={addressClicked}
                            onChange={this.handleChangeAddress}
                            
                        />
                    </div>
                    <div className="LocAddInput">
                        <input
                            placeholder={this.state.placeholderX ? "X" : null}
                            type="text" 
                            value={this.state.x}
                            onClick={xClicked}
                            onChange={this.handleChangeX}
                            
                        />
                    </div>
                    <div className="LocAddInput">
                        <input
                            placeholder={this.state.placeholderY ? "Y" : null}
                            type="text" 
                            value={this.state.y}
                            onClick={yClicked}
                            onChange={this.handleChangeY}
                            
                        />
                    </div>
                    <div className="LocAddButton" onClick={(e) => this.handleSubmit(e)}    >
                        <button type="submit" > 
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                size={'2x'} 
                            />
                        </button>
                </div>
            </div>
        </div>
    )}
}

export default CatEdit
