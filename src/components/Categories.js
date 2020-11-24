import React from 'react'
import '../styles/Categories.css'
import CategoryBox from './CategoryBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

class Categories extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            catChosen: null
        }
      }
    
    catPressed = (cat) => {
        if (this.state.catChosen != cat) {
            this.setState({catChosen: cat})
            this.props.catPressed(cat)
        }
        else {
            this.setState({catChosen: null})
            this.props.catUnpressed(cat)
        }
        
    }
    render () {
        const cats = this.props.cats
        return (
            <div>
                {cats.map((cat) => {
                    console.log('cat', cat)
                    return (
                    <div className="Row" key={Math.random()} onClick={() => this.catPressed(cat)}>
                        {this.state.catChosen == cat ? <FontAwesomeIcon className="ArrowIconRight" icon={faArrowRight} size={'2x'} /> : null}
                        <CategoryBox cat={cat} />
                        <div onClick={this.props.goBack}>
                            {this.state.catChosen == cat ? <FontAwesomeIcon className="ArrowIconLeft" icon={faArrowLeft} size={'2x'} /> : null}
                        </div> 
                    </div>)
                })}
            </div>
    )}
}

export default Categories
