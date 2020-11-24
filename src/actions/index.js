export const addCategory = (name) => (
    {
       type: 'ADD_CATEGORY', 
       payload : name
    }
)

export const removeCategory = (name) => (
    {
       type: 'REMOVE_CATEGORY', 
       payload : name
    }
)

export const removeLocation = (category, location) => (
    {
       type: 'REMOVE_LOCATION', 
       payload: {category, location} 
    }
)

export const addLocation = (category, location) => (
    {
       type: 'ADD_LOCATION', 
       payload: {category, location} 
    }
)

