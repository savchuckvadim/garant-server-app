import { CURRENT_UNIVERSAL, INTERNET, PROF, PROKSIMA, SET_COMPLECTS_TYPE, SET_SUPPLY } from "../global-parameters/global-parameters-reducer";

let TYPE_OF_CONTRACT = 'TYPE_OF_CONTRACT';

let initialState = {

    name: 'Тип договора',
    id: 'UF_CRM_1540190343',
    value: {
        id: '1913',
        name: 'Internet',
        typeOfGood: 'prof',
        units: {
            value: 'Месяц',
            ID: '11',
            CODE: '15',
        }
    },
    typesOfContract: [{
        id: '1913',
        name: 'Internet',
        typeOfGood: 'prof',
        units: {
            value: 'Месяц',
            ID: '11',
            CODE: '15',
        }


    },

    {
        id: '3616',
        name: 'Абонентский полгода',
        typeOfGood: 'abonSix',
        units: {
            value: 'Абон. 6 мес.',
            ID: '12',
            CODE: '20',
        }
    },
    {
        id: '3616',
        name: 'Абонентский год',
        typeOfGood: 'abonEleven',
        units: {
            value: 'Абон. 12 мес.',
            ID: '14',
            CODE: '25',
        }
    },


    ],
    internetTypesOfContract: [{
        id: '1913',
        name: 'Internet',
        typeOfGood: 'prof',
        units: {
            value: 'Месяц',
            ID: '11',
            CODE: '15',
        }
    },

    {
        id: '3616',
        name: 'Абонентский полгода',
        typeOfGood: 'abonSix',
        units: {
            value: 'Абон. 6 мес.',
            ID: '12',
            CODE: '20',
        }
    },
    {
        id: '3616',
        name: 'Абонентский год',
        typeOfGood: 'abonEleven',
        units: {
            value: 'Абон. 12 мес.',
            ID: '14',
            CODE: '25',
        }
    }],
    proximaTypesOfContract: [
        {
            id: '1915',
            name: 'Договор услуг',
            typeOfGood: 'prof',
            units: {
                value: 'Месяц',
                ID: '11',
                CODE: '15',
            }
        },

        // {
        //     id: '3170',
        //     name: 'Лицензионный',
        //     typeOfGood: 'prof'
        // },

    ],
    internetUniversalTypesOfContract: [{
        id: '1913',
        name: 'Internet',
        typeOfGood: 'prof',
        units: {
            value: 'Месяц',
            ID: '11',
            CODE: '15',
        }
    }],

}




export const typeOfContractActionCreator = (index) => ({ type: TYPE_OF_CONTRACT, index })


const changeTypeOfContract = (stateCome, action) => {

    let state = {
        ...stateCome
    }
    state.value = state.typesOfContract[action.index]

    return state
}

export const typeOfContractReducer = (state = initialState, action) => {

    switch (action.type) {
        case TYPE_OF_CONTRACT:

            return changeTypeOfContract(state, action)

        case SET_SUPPLY: //from global-parameters-reducer    
            if (action.index === 1) { //supply = Интернет-Версия
                if (action.currentComplectsType === PROF) {
                    return { ...state, typesOfContract: state.internetTypesOfContract }
                } else if (action.currentComplectsType === CURRENT_UNIVERSAL) {
                    return {
                        ...state, typesOfContract: state.internetUniversalTypesOfContract,
                        value: state.internetUniversalTypesOfContract[0]
                    }
                }

            } else if (action.index === 0) {  //supply = Проксима

                return {
                    ...state,
                    typesOfContract: state.proximaTypesOfContract,
                    value: state.proximaTypesOfContract[0]
                }

            }
            return state

        case SET_COMPLECTS_TYPE: //from global-parameters-reducer  

            if (action.currentSupply === PROKSIMA) {
                return {
                    ...state,
                    typesOfContract: state.proximaTypesOfContract,
                    value: state.proximaTypesOfContract[0]
                }
            } else {
                if (action.index === 0) { //Тип комплекта = Универсалльный
                    if (action.currentSupply === INTERNET) {

                        return {
                            ...state, typesOfContract: state.internetUniversalTypesOfContract,
                            value: state.internetUniversalTypesOfContract[0]
                        }
                    }
                } else if (action.index === 1) { //Тип комплекта = ПРОФ
                    if (action.currentSupply === INTERNET) {

                        return { ...state, typesOfContract: state.internetTypesOfContract }
                    }
                }
            }


            return state


        default:
            return state;
    }

}