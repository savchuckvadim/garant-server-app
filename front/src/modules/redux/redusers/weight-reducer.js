const WEIGHT = 'WEIGHT'

export const weight = (currentWeight) => ({ type: WEIGHT, currentWeight})

const initialState = {
    currentWeight: 0
}


const weightReducer = (state = initialState, action) => {

    switch (action.type) {
        case WEIGHT:
           
            return {...state, currentWeight: action.currentWeight};
    
        default:
            return state;
    }
}

export default weightReducer