export const SET_SUPPLY = 'SET_SUPPLY'
export const SET_COMPLECTS_TYPE = 'SET_COMPLECTS_TYPE'
const SET_REGION = 'SET_REGION'
const SET_REGION_STATUS = 'SET_REGION_STATUS'

//consts
export const INTERNET = 'Интернет'
export const PROKSIMA = 'Проксима'
export const UNIVERSAL = 'Универсальная линейка'
export const CURRENT_UNIVERSAL = 'Универсальный'
export const PROF = 'ПРОФ'
export const KMV = 'КМВ'
export const STV = 'Ставрополь'


const initialState = {
    supplyButton: PROKSIMA,
    currentSupply: INTERNET,
    //supply index = 0 -> current - PROXIMA
    //supply index = 1 -> current - INTERNET
    complectsTypeButton: UNIVERSAL,
    currentComplectsType: PROF,
    //compectsType index = 0 -> current - UNIVERSAL
    //compectsType index = 1 -> current - PROF
    currentRegion: KMV,
    regionInProgress: false
}


// AC
export const setSupply = (index, currentComplectsType) => ({ type: SET_SUPPLY, index, currentComplectsType }) //if index == 0 -> INTERNET, else -> PROKSIMA
export const setComplectsType = (index, currentSupply) => ({ type: SET_COMPLECTS_TYPE, index, currentSupply }) //if index == 0 -> INTERNET, else -> PROKSIMA
export const setRegion = (currentRegion) => ({ type: SET_REGION, currentRegion })
export const setRegionStatus = (bool) => ({ type: SET_REGION_STATUS, bool })


const globalParametersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SUPPLY:

            if (action.index === 1) {
                return { ...state, supplyButton: PROKSIMA, currentSupply: INTERNET }
            } else if (action.index === 0) {
                return { ...state, supplyButton: INTERNET, currentSupply: PROKSIMA }
            }
            return state

        case SET_COMPLECTS_TYPE:

            if (action.index === 1) {
                return {
                    ...state,
                    complectsTypeButton: UNIVERSAL,
                    currentComplectsType: PROF
                }
            } else if (action.index === 0) {
                return {
                    ...state,
                    complectsTypeButton: PROF,
                    currentComplectsType: "Универсальный"
                }
            }
            return state

        case SET_REGION:
            return { ...state, currentRegion: action.currentRegion }

        case SET_REGION_STATUS:
            return { ...state, regionInProgress: action.bool }
        default:
            return state;
    }
}

export default globalParametersReducer