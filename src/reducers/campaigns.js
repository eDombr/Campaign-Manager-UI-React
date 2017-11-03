const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CAMPAIGNS': 
            return action.payload
        default: 
            return state
    }
}