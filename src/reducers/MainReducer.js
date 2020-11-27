import { combineReducers } from 'redux'

const INITIAL_STATE = {
  categories: [
    {
      name: 'Surfing',
      locations: [
      {
        name: 'Tel Baruch',
        address: 'Itzhak Artzi St 2, Tel Aviv-Yafo',
        coordinatesX: 32.16156,
        coordinatesY: 34.79688
      },
      {
        name: 'Marina',
        address: 'HaShunit, Herzliya',
        coordinatesX: 32.01055,
        coordinatesY: 34.73817
      },
      {
        name: 'Sironit',
        address: 'HaShunit, Herzliya',
        coordinatesX: 32.32882,
        coordinatesY: 34.84861
      }
    ]
    },
    {
      name: 'Dancing',
      locations: []
    },
    {
      name: 'Singing',
      locations: []
    }
  ]
}

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      {
        state.categories.push({name: action.payload, locations: []})
        console.log('add_cat reducer', state)
        return state
      }
    case 'REMOVE_CATEGORY':
      {
        console.log('remove_cat reducer', state)
        const index = state.categories.indexOf(action.payload)
        if (index > -1) {
          state.categories.splice(index, 1)
        }
        return state
      }
      case 'ADD_LOCATION':
      {
        console.log('add_loc reducer', action.payload)
        const categoryIndex = state.categories.indexOf(action.payload.category)
        console.log(categoryIndex)
        if (categoryIndex > -1) {
          console.log('if reach')
          state.categories[categoryIndex].locations.push({
            name: action.payload.location.name, 
            address: action.payload.location.address, 
            coordinatesX: action.payload.location.x, 
            coordinatesY: action.payload.location.y
          })
        }
        return state
      }
      
      case 'REMOVE_LOCATION':
      {
        console.log('remove_loc reducer', action.payload)
        const categoryIndex = state.categories.indexOf(action.payload.category)
        if (categoryIndex > -1) {
          const locationIndex = state.categories[categoryIndex].locations.indexOf(action.payload.location)
          if (locationIndex > -1) {
            state.categories[categoryIndex].locations.splice(locationIndex, 1)
          }
        }
        return state
      }
       
    default:
      return state
  }
};

export default combineReducers({
  mainReducer
});