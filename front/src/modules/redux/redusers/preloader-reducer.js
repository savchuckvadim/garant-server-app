const initialState = {
    inProgress: true
}

const PRELOADER = 'PRELOADER'

export const preloader = (bool) => ({ type: PRELOADER, bool })
const preloaderReducer = (state = initialState, action) => {

    switch (action.type) {
        case PRELOADER:

            return { ...state, inProgress: action.bool };

        default:
            return state;
    }
}

export default preloaderReducer

