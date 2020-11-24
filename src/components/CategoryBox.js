import React from 'react'
import '../styles/CategoryBox.css'

class CategoryBox extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {}
      }
 
    render () {
        const cat = this.props.cat
        return (
            <div className="CategoryBox" >
                <h1 className="CategoryText" > {cat.name} </h1>
            </div>
    )}
}

export default CategoryBox
