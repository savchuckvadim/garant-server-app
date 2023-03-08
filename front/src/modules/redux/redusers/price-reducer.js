import { setUniversalPrices } from "../../utils/prices";
import { goodsActionCreator } from "./deal/goods-reducer";
import { CURRENT_UNIVERSAL, INTERNET, PROF, PROKSIMA, SET_COMPLECTS_TYPE, SET_SUPPLY, STV, UNIVERSAL } from "./global-parameters/global-parameters-reducer";

const GET_PRICE = 'GET_PRICE';
const SET_PRICES = 'SET_PRICES'
const CHANGE_PRICE_FROM_WEIGHT = 'CHANGE_PRICE_FROM_WEIGHT'

const INPUT_CHANGE_PRICE = 'INPUT_CHANGE_PRICE'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const CHANGE_CURRENT_OD = 'CHANGE_CURRENT_OD'
const RESET = 'RESET'

let GOODS = 'GOODS';
let initialState = {

    currentPrice: {
        value: 0,
        status: false,
        width: 0

    },

    prices: [
        [5400, 5400, 7776, 7776, 6804, 6912, 10908, 13608],
        [6480, 6480, 9396, 9396, 8208, 8316, 13068, 16308],
        [8748, 8748, 12528, 12528, 10908, 11124, 17496, 21708],
        [13068, 13068, 18792, 18792, 16416, 16632, 26244, 32616],
        [17496, 17496, 25056, 25056, 21816, 22248, 35100, 43524],
        [21816, 21816, 31320, 31320, 27432, 27864, 43848, 54432],
        [26244, 26244, 37584, 37584, 32832, 33372, 52704, 65232],
        [30564, 30564, 43848, 43848, 38340, 38988, 61452, 76140]
    ],
    internetPrices: [
        [5400, 5400, 7776, 7776, 6804, 6912, 10908, 13608],
        [6480, 6480, 9396, 9396, 8208, 8316, 13068, 16308],
        [8748, 8748, 12528, 12528, 10908, 11124, 17496, 21708],
        [13068, 13068, 18792, 18792, 16416, 16632, 26244, 32616],
        [17496, 17496, 25056, 25056, 21816, 22248, 35100, 43524],
        [21816, 21816, 31320, 31320, 27432, 27864, 43848, 54432],
        [26244, 26244, 37584, 37584, 32832, 33372, 52704, 65232],
        [30564, 30564, 43848, 43848, 38340, 38988, 61452, 76140]
    ],
    proximaPrices: [
        [5400, 5400, 7776, 7776, 6804, 6912, 10908, 13608],
        [5400, 5400, 7776, 7776, 6804, 6912, 10908, 13608],
        [6480, 6480, 9396, 9396, 8208, 8316, 13068, 16308],
        [8748, 8748, 12528, 12528, 10908, 11124, 17496, 21708],
        [13068, 13068, 18792, 18792, 16416, 16632, 26244, 32616],
        [17496, 17496, 25056, 25056, 21816, 22248, 35100, 43524],
        [21816, 21816, 31320, 31320, 27432, 27864, 43848, 54432],
        [26244, 26244, 37584, 37584, 32832, 33372, 52704, 65232],
        [30564, 30564, 43848, 43848, 38340, 38988, 61452, 76140]
    ],
    universalPricesInternet: [


    ],
    universalPricesProxima: [

    ]



}


export const getPriceActionCreator = () => ({ type: GET_PRICE })
//THUNK
export const changePriceFromWeight = (currentWeight, currentComplect, numberOfOd, currentRegion, currentSupply, currentComplectsType, typeOfContract) => (dispatch) => {
    if (currentComplectsType === 'Универсальный') {

        if (currentWeight === currentComplect.weight) {
            dispatch(goodsActionCreator(currentComplect.number, numberOfOd, typeOfContract, currentSupply, currentComplectsType, currentRegion))
        }


    }
}

const setPrices = (prices) => ({ type: SET_PRICES, prices })
const changeCurrentPrice = (state, action) => {

    if (action.type === 'INPUT_CHANGE_PRICE') {

        if (action.typeOfProduct === 'Гарант') {
            state.currentPrice.width = action.width
            state.currentPrice.value = action.value
            state.currentPrice.status = action.status

        }
    }

    return state
}
const price = (stateCome, action) => {
    let state = { ...stateCome }
    let currentPrice = { ...stateCome.currentPrice }
    state.currentPrice = currentPrice

    return getPrice(state, action)
}
const getPrice = (state, action) => {

    let numberOfComplect = action.numberOfComplect
    let numberOfOD = action.numberOfOD
    let typeOfContract = action.typeOfContract


    if (action.currentComplectsType === PROF) {

        if (typeOfContract === 'abonSix') {
            state.currentPrice.value = state.prices[numberOfOD][numberOfComplect] * 6 * 0.9
        } else if (typeOfContract === 'abonEleven') {
            state.currentPrice.value = state.prices[numberOfOD][numberOfComplect] * 12 * 0.8
        } else {
            state.currentPrice.value = state.prices[numberOfOD][numberOfComplect]
        }
        let currentPriceNumberValue = Number.parseFloat(state.currentPrice.value.toFixed(2))
        state.currentPrice.value = currentPriceNumberValue
        
    } else if (action.currentComplectsType === CURRENT_UNIVERSAL) {
        let regionIndex = 0

        if (action.currentRegion === STV) {
            regionIndex = 1
        }

        state.currentPrice.value = state.prices[regionIndex][numberOfOD][numberOfComplect]
    }



    let currentPriceResult = { ...state.currentPrice }
    return { ...state, currentPrice: currentPriceResult }
}
// const reset = (state) => {
//     state.currentPrice.width = 0
//     return state
// }

export const priceReducer = (state = initialState, action) => {

    switch (action.type) {

        //TODO price from weight!
        case SET_PRICES:
            action.prices.coefficients[0].splice(0, 1)

            return {
                ...state,
                prices: action.prices.internetProf,
                internetPrices: action.prices.internetProf,
                proximaPrices: action.prices.proximaProf,
                universalPricesInternet: setUniversalPrices('internet', action.prices.kmv, action.prices.stv, action.prices.coefficients[0]),
                universalPricesProxima: setUniversalPrices('proxima', action.prices.kmv, action.prices.stv, action.prices.coefficients[0])
            };

        case GOODS:
            return price(state, action)

        case SET_SUPPLY: //from global-parameters-reducer    
            if (action.index === 1) { //supply = Интернет-Версия
                if (action.currentComplectsType === PROF) {
                    return { ...state, prices: state.internetPrices }
                } else if (action.currentComplectsType === CURRENT_UNIVERSAL) {
                    return { ...state, prices: state.universalPricesInternet }
                }

            } else if (action.index === 0) {  //supply = Проксима
                if (action.currentComplectsType === PROF) {
                    return { ...state, prices: state.proximaPrices }
                } else if (action.currentComplectsType === CURRENT_UNIVERSAL) {
                    return { ...state, prices: state.universalPricesProxima }
                }

            }
            return state

        case SET_COMPLECTS_TYPE: //from global-parameters-reducer  


            if (action.index === 0) { //Тип комплекта = Универсалльный
                if (action.currentSupply === INTERNET) {
                    return { ...state, prices: state.universalPricesInternet }
                } else if (action.currentSupply === PROKSIMA) {
                    return { ...state, prices: state.universalPricesProxima }
                }
            } else if (action.index === 1) { //Тип комплекта = ПРОФ
                if (action.currentSupply === INTERNET) {

                    return { ...state, prices: state.internetPrices }
                } else if (action.currentSupply === PROKSIMA) {
                    return { ...state, prices: state.proximaPrices }
                }
            }
            return state

        case RESET:
            const resultCurrentPrice = {
                value: 0,
                status: false,
                width: 0

            }
            return { ...state, currentPrice: resultCurrentPrice }

        default:
            return state;
    }


}