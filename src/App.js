import React from 'react'
import Toolbar from './components/Toolbar'
import BottomBar from './components/BottomBar'
import Categories from './components/Categories'
import CatView from './components/CRUD/CatView'
import CatAdd from './components/CRUD/CatAdd'
import CatEdit from './components/CRUD/CatEdit'
import Locations from './components/CRUD/Locations'
import './styles/App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCategory, removeCategory, addLocation, removeLocation } from './actions/index'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: this.props.mainReducer.categories,
      chosenCat: null,
      catEditing: null,
      catViewing: null,
      catAdding: null,
      showLocations: false,
      showCats: true
    }
  }

  catPressed = (cat) => {
    this.setState({chosenCat: cat})
  }

  catUnpressed = () => {
    this.setState({chosenCat: null})
  }

  goBack = () => {
    this.setState({chosenCat: null})
    this.setState({
      catEditing: null,
      catViewing: null,
      catAdding: null,
      showLocations: false,
      showCats: true
    })
  } 

  catAdd = () => {
    console.log('add')
    this.setState({catAdding: true})
    this.setState({showCats: false})
  } 

  catEdit = (cat) => {
    console.log('edit', cat)
    this.setState({catEditing: cat})
    this.setState({showCats: false})
  } 

  catRemove = (cat) => {
    console.log('remove', cat)
    this.props.removeCategory(cat)
    this.setState({showCats: true})
    this.goBack()
  } 

  catView = (cat) => {
    console.log('view', cat)
    this.setState({catViewing: cat})
    this.setState({showCats: false})
  } 

  openLocations = () => {
    console.log('show locations')
    this.setState({showLocations: true})
    this.setState({showCats: false})
  }

  removeLocation = (cat, location) => {
    this.props.removeLocation(cat, location)
    this.setState({})
  }

  addLocation = (cat, location) => {
    console.log('app.js - add location')
    this.props.addLocation(cat, location)
    this.setState({})
  }
  
  render() {
    return (
          <div className="App">
            <Toolbar
              showLocations={this.state.showLocations} 
              cat={this.state.chosenCat} 
              catEdit={this.catEdit} 
              catRemove={this.catRemove}
              catView={this.catView}
              catAdd={this.catAdd} 
              goBack={this.goBack}
              showBackButton={this.state.catEditing || this.state.catViewing || this.state.catAdding || this.state.showLocations}
            />
            {this.state.showCats ? 
              <Categories 
                cats={this.state.categories} 
                catUnpressed={this.catUnpressed} 
                catPressed={this.catPressed}
              /> 
            : null}
            {this.state.catViewing ? 
              <CatView 
                cat={this.state.chosenCat} 
              /> 
            : null}
            {this.state.catAdding ? 
              <CatAdd 
                addCategory={this.props.addCategory} 
                goBack={this.goBack}
              /> 
            : null}
            {this.state.catEditing ? 
              <CatEdit
                cat={this.state.chosenCat}
                addLocation={this.addLocation}
                removeLocation={this.removeLocation}
                goBack={this.goBack}
              /> 
            : null}
            {this.state.showLocations ? 
              <Locations
                cats={this.state.categories}
                addLocation={this.addLocation}
                removeLocation={this.removeLocation}
              /> 
            : null}
            <BottomBar 
              goBack={this.goBack} 
              openLocations={this.openLocations}  
            />
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addCategory,
    removeCategory,
    addLocation,
    removeLocation
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
