import React, { useState, useEffect } from 'react'
import '../../styles/Locations.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faArrowUp, faArrowDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Map from '../Map'

const Locations = ({cats, addLocation, removeLocation}) => {
    const [allLocationItems, setAllLocationtems] = useState([])
    
    const [nameHolder, setNameHolder] = useState('Name')
    const [addressHolder, setAddressHolder] = useState('Address')
    const [xHolder, setXHolder] = useState('X')
    const [yHolder, setYHolder] = useState('Y')

    const [name, setName] = useState('') 
    const [address, setAddress] = useState('') 
    const [x, setX] = useState('') 
    const [y, setY] = useState('') 
    const [chosenCat, setChosenCat] = useState(cats[0]) 
    
    const [location, setLocation] = useState({
        address: '',
        lat: 32.16156,
        lng: 34.79688,
    })

    var itemsTemp

    const verifyAndAddLocation = (cat, location) => {
        if (name == '' || address == '' || x == '' || y == '') {
            alert("location data must not be empty")
            return
        }
        addLocation(cat, location)
    }
    const pushLocationItems = () => {
        itemsTemp = []
        cats.forEach(cat => {
            cat.locations.forEach(location => {
                itemsTemp.push({location, cat})
            })
        })
        setAllLocationtems(itemsTemp)
    }

    useEffect(() => {
        console.log('update locs')
        pushLocationItems()
    }, [])
    
    const updateLocations = () => {
        console.log('update locs')
        pushLocationItems()
    }

    const sortAlphabetically = (reverse) => {
        console.log('sort')
        pushLocationItems()
        if (reverse) {
            
            itemsTemp.sort((a, b) => b.location.name.localeCompare(a.location.name))
            setAllLocationtems(itemsTemp)
        }
        else {
            itemsTemp.sort((a, b) => a.location.name.localeCompare(b.location.name))
            setAllLocationtems(itemsTemp)
        }
        console.log(allLocationItems)
    }

    const sortByCategory = (reverse) => {
        pushLocationItems()
        console.log('sort')
        if (reverse) {
            itemsTemp.sort((a, b) => b.cat.name.localeCompare(a.cat.name))
            setAllLocationtems(itemsTemp)
        }
        else {
            itemsTemp.sort((a, b) => a.cat.name.localeCompare(b.cat.name))
            setAllLocationtems(itemsTemp)
        }
        console.log(allLocationItems)
    }
    
    const filterCategory = (cat) => {
        console.log('filter', cat)
        itemsTemp = []
        cats.forEach(cat => {
            cat.locations.forEach(location => {
                itemsTemp.push({location, cat})
            })
        })
        if (cat == 'all') {
            setAllLocationtems(itemsTemp)
            console.log('all')
        }
        else {
            itemsTemp = itemsTemp.filter((item) => item.cat.name == cat)
            setAllLocationtems(itemsTemp)
        }
    }


        return (
            <div>
                <table className="LocationsContainer">
                    <tbody>
                        <tr className="LocationsLocationRow" className="LocationsLocationRow"> 
                            <td className="LocationSortTd">
                                <div className="LocationsSortDiv">
                                    <button onClick={() => {sortByCategory(true)}} className="LocationsSortButton">
                                        <FontAwesomeIcon 
                                            icon={faArrowUp} 
                                            size={'2x'} 
                                        />
                                    </button>
                                    <button onClick={() => {sortByCategory(false)}} className="LocationsSortButton">
                                        <FontAwesomeIcon 
                                            icon={faArrowDown} 
                                            size={'2x'} 
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div className="LocationsSortDiv">
                                    <button onClick={() => {sortAlphabetically(true)}} className="LocationsSortButton">
                                        <FontAwesomeIcon 
                                            icon={faArrowUp} 
                                            size={'2x'} 
                                        />
                                    </button>
                                    <button onClick={() => {sortAlphabetically(false)}} className="LocationsSortButton">
                                        <FontAwesomeIcon 
                                            icon={faArrowDown} 
                                            size={'2x'} 
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="LocationsLocationRow" className="LocationsLocationRow"> 
                            <td>
                                <select
                                    className="LocationCategorySelect" 
                                    name="cats" 
                                    id="cats"
                                    onSelect={(e)=> {
                                        console.log('cat selected ', e.target.value)
                                        filterCategory(e.target.value)
                                    }}
                                    onChange={(e)=> {
                                        console.log('cat selected ', e.target.value)
                                        filterCategory(e.target.value)
                                    }}
                                >
                                    {cats.map((cat) => {
                                        return (
                                            <option key={Math.random()} value={cat.name}>{cat.name}</option>
                                        )
                                    })}
                                    <option className="HiddenSelect" value="Category"> Category </option>
                                    <option value={"all"}> All </option>
                                </select>    
                            </td> 
                            <td className="LocationsLocationHeader">Name</td> 
                            <td className="LocationsLocationHeader">Address</td>
                            <td className="LocationsLocationHeader">CoordinatesX</td>
                            <td className="LocationsLocationHeader">CoordinatesY</td>
                            <td className="LocationsLocationHeader"></td>
                        </tr>
                        {allLocationItems.map((locationItem) => {
                            return (
                                <tr key={Math.random()} className="LocationsLocationRow"> 
                                    <td className="LocationsLocationCell">{locationItem.cat.name}</td> 
                                    <td className="LocationsLocationCell">{locationItem.location.name}</td> 
                                    <td className="LocationsLocationCell">{locationItem.location.address}</td>
                                    <td className="LocationsLocationCell">{locationItem.location.coordinatesX}</td>
                                    <td className="LocationsLocationCell">{locationItem.location.coordinatesY}</td>
                                    <td className="LocationsLocationCell">
                                        <FontAwesomeIcon 
                                            className="Icon" 
                                            onClick={() => { 
                                                removeLocation(
                                                    locationItem.cat,
                                                    locationItem.location
                                                )
                                                updateLocations()
                                            }}
                                            icon={faTrash} 
                                            size={'1x'} /> 
                                    </td>
                                    <td className="LocationsLocationCell">
                                        <FontAwesomeIcon 
                                            className="Icon" 
                                            onClick={() => { 
                                                setLocation({
                                                    address: locationItem.location.address,
                                                    lat: locationItem.location.coordinatesX,
                                                    lng: locationItem.location.coordinatesY,
                                                })
                                            }}
                                            icon={faMapMarkerAlt} 
                                            size={'1x'} /> 
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="LocAddContainer">
                    <select
                            value={chosenCat.name}
                            className="LocAddSelect" 
                            name="cats" 
                            id="cats"
                            onSelect={(e)=> {
                                const selectedCat = cats.find(cat => cat.name == e.target.value)
                                setChosenCat(selectedCat)
                                console.log('selected ', e.target.value)
                            }}
                            onChange={(e)=> {
                                const selectedCat = cats.find(cat => cat.name == e.target.value)
                                console.log('selected ', selectedCat)
                                setChosenCat(selectedCat)
                            }}
                            >
                            {cats.map((cat) => {
                                return (
                                    <option className="LocAddOption" key={Math.random()} value={cat.name}>{cat.name}</option>
                                )
                            })}
                        </select>
                    <div className="LocAddInput">
                        <input
                            placeholder={nameHolder}
                            type="text" 
                            value={name}
                            onClick={() => {setNameHolder('')}}
                            onChange={(e)=> {
                                setName(e.target.value)
                            }}
                            
                        />
                    </div>
                    <div className="LocAddInput">
                        <input
                            placeholder={addressHolder}
                            type="text" 
                            value={address}
                            onClick={() => {setAddressHolder('')}}
                            onChange={(e)=> {
                                setAddress(e.target.value)
                                console.log(e.target.value)
                            }}         
                        />
                    </div>
                    <div className="LocAddInput">
                        <input
                            placeholder={xHolder}
                            type="text" 
                            value={x}
                            onClick={() => {setXHolder('')}}
                            onChange={(e)=> {
                                setX(e.target.value)
                            }}   
                        />
                    </div>
                    <div className="LocAddInput">
                        <input
                            placeholder={yHolder}
                            type="text" 
                            value={y}
                            onClick={() => {setYHolder('')}}
                            onChange={(e)=> {
                                console.log('e', e.target.value)
                                setY(e.target.value)
                            }}
                        />
                    </div>
                    
                    <div className="LocAddButton" 
                        onClick={() => {
                            verifyAndAddLocation(
                                chosenCat,
                                {
                                    name: name,
                                    address: address,
                                    x: x,
                                    y: y
                                }
                                )
                            updateLocations()
                        }}>
                        <button type="submit" > 
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                size={'2x'} 
                            />
                        </button>
                </div>
            </div>
            <Map location={location} zoomLevel={10} />
        </div>
    )
}

export default Locations
