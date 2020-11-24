import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '../../styles/CatAdd.css'

class CatAdd extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            placeholder: true
        }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    
    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        if (this.state.value == '') {
            alert("Category name must not be empty")
            event.preventDefault()
            return
        }
        this.props.addCategory(this.state.value)
        this.props.goBack()
        event.preventDefault()
    }

    render () {
    const nameClicked = () => {
        this.setState({placeholder: false})
    }
        return (
            <form className="CatAddContainer" onSubmit={this.handleSubmit}>
                <div className="CatAddSquare" >
                   <h2 className="CatAddHeader" > 
                      Name:
                   </h2>
                   </div>   
                   <div className="CatAddInputDiv">
                     <input
                        placeholder={this.state.placeholder ? "Write here..." : null}
                        type="text" 
                        value={this.state.value}
                        onClick={nameClicked}
                        onChange={this.handleChange}
                        
                    />
                   </div>
                <button type="submit"> 
                    <FontAwesomeIcon 
                        icon={faPlus} 
                        size={'2x'} 
                        onClick={(e) => this.handleSubmit(e)}    
                    />
                </button>
            </form>
    )}
}

export default CatAdd
