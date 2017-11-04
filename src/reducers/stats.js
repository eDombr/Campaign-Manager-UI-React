const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CURRENT_STATS': 
            return action.payload
        default: 
            return state
    }
};