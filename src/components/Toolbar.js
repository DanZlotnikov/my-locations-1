import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faTrash, faBackward, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/Toolbar.css'

class Toolbar extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
        }
      }
    render () {
        const cat = this.props.cat
        const catEditing = this.props.catEditing
        var title = cat ? cat.name : "Categories"
        var title = this.props.showLocations ? "Locations" : title
        return (
            <div className="ToolbarContainer">
                {this.props.showBackButton ? 
                    <div className="BackButton" onClick={this.props.goBack}>
                        <FontAwesomeIcon className="BackIcon" icon={faBackward} size={'2x'} />
                    </div> 
                    : null}
                <div className="Toolbar">
                    
                    <h1 className="Title"> {title} </h1>
                        <div className="IconsContainer">
                            {cat && !this.props.showBackButton ? 
                            <FontAwesomeIcon 
                                className="Icon" 
                                onClick={() => this.props.catView(cat)} 
                                icon={faEye} 
                                size={'2x'} /> 
                            : null}
                            {cat && !this.props.showBackButton ?
                            <FontAwesomeIcon 
                                className="Icon" 
                                onClick={() => this.props.catEdit(cat)} 
                                icon={faPencilAlt} 
                                size={'2x'} /> 
                            : null}
                            {cat && !this.props.showBackButton ? 
                            <FontAwesomeIcon 
                                className="Icon" 
                                onClick={() => this.props.catRemove(cat)} 
                                icon={faTrash} 
                                size={'2x'} /> 
                            : null}
                            { !cat ?
                            <FontAwesomeIcon 
                                className="Icon" 
                                onClick={() => this.props.catAdd(cat)} 
                                icon={faPlus} 
                                size={'2x'} 
                            />
                            : null}
                        </div>
                </div>
            </div>
    )}
}

export default Toolbar
