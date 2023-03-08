import { CURRENT_UNIVERSAL } from "./global-parameters/global-parameters-reducer"

export const CREATE_COMPLECT = 'CREATE_COMPLECT'
export const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS'
export const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER'
const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'
export const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER'
const CHANGE_WEIGHT_AND_NAME_OF_UNIVERSAL_COMPLECT = 'CHANGE_WEIGHT_AND_NAME_OF_UNIVERSAL_COMPLECT'
const INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT = 'INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT'
export const MAXIMUM = 'MAXIMUM'
export const RESET = 'RESET'


let initialState = null

export const maximum = (obj, index, ods, currentOd) => ({
    type: MAXIMUM, obj: obj,
    index: index,
    currentComplect: obj,
    ods: ods,
    currentOd: currentOd
})
export const resetActionCreator = () => ({ type: RESET })
export const changeUniversalComplect = (weight, globalParameters, universalComplects) => ({ type: CHANGE_WEIGHT_AND_NAME_OF_UNIVERSAL_COMPLECT, weight, globalParameters, universalComplects })
export const createComplectActionCreator = (obj, index, ods, currentOd) => {


    return {
        type: CREATE_COMPLECT,
        obj: obj,
        index: index,
        currentComplect: obj,
        ods: ods,
        currentOd: currentOd

    }
}

const changeCurrentInfoblocks = (state, action) => { //меняет текущее наполнение в currentComplect

    if (state) {

        if (state.name !== 'Бухгалтер' && state.name !== 'Бухгалтер госсектора') {

            if (action.checked) {

                state.currentFilling.forEach((elem, idx) => {

                    if (elem === action.value) {

                        state.currentFilling.splice(idx, 1)
                    }
                })


            } else {
                state.currentFilling.push(action.value)
            }

        }

    }

    return { ...state }

}

const createComplect = (state, action) => {

    if (action.obj) {
        localStorage.removeItem('currentPrice')
        state = action.obj
        let freeBlocks = [0, 1, 2, 3, 4];

        if (state.filling.includes('Практика арбитражных судов округов')) {
            freeBlocks.push(5)
        }
        if (state.filling.includes('Практика судов общей юрисдикции')) {
            freeBlocks.push(6)
        }
        let complect = {
            'name': state.name,
            'number': state.number,
            'weight': state.weight,
            // 'defaultFilling': state.currentComplect.defaultFilling,
            'currentFilling': state.filling, //в текущее наполнение вставляет наполнение по-умолчанию из allComplects[idx]
            'fillingInfoblocksIndexes': state.fillingInfoblocksIndexes,
            'fillingPaketsERIndexes': state.fillingPaketsERIndexes,
            'fillingEncyclopediasIndexes': state.fillingEncyclopediasIndexes,
            'fillingLTIndexes': state.fillingLTIndexes,
            'fillingPaketLT': state.fillingPaketLT,
            'currentStatusInputComplectName': false,
            'freeBlocks': state.freeBlocks,
            'consalting': state.consalting

        }
        state = complect

        // addToStorage(complect, 'currentComplect')
    }

    return state
}
const createMaximum = (state, action) => {

    if (action.obj) {

        state = action.obj
        let freeBlocks = [0, 1, 2, 3, 4];

        if (state.filling.includes('Практика арбитражных судов округов')) {
            freeBlocks.push(5)
        }
        if (state.filling.includes('Практика судов общей юрисдикции')) {
            freeBlocks.push(6)
        }
        let complect = {
            'name': state.name,
            'number': state.number,
            'weight': state.weight,
            // 'defaultFilling': state.currentComplect.defaultFilling,
            'currentFilling': state.filling, //в текущее наполнение вставляет наполнение по-умолчанию из allComplects[idx]
            'fillingInfoblocksIndexes': state.fillingInfoblocksIndexes,
            'fillingPaketsERIndexes': state.fillingPaketsERIndexes,
            'fillingEncyclopediasIndexes': state.fillingEncyclopediasIndexes,
            'fillingLTIndexes': state.fillingLTIndexes,
            'fillingPaketLT': state.fillingPaketLT,
            'currentStatusInputComplectName': false,
            'freeBlocks': state.freeBlocks,
            'consalting': state.consalting

        }
        state = complect

        // addToStorage(complect, 'currentComplect')
    }

    return state
}

const changeCurrentEr = (state, action) => { //меняет currentComplect

    let filling = [...state.fillingEncyclopediasIndexes]

    const changeErInState = (checked, index, filling) => { //для ЭР и Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

        if (checked === true) {
            if (filling.length > 0) {
                filling.forEach((elem, idx) => {
                    if (elem === index) {
                        filling.splice(idx, 1)
                    }
                })
            }
        } else {
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////            // 
            // state.encyclopedias[1].value[index].checked = true;


            if (!filling.includes(index)) filling.push(index)
        }
    }

    if (state.name !== 'Бухгалтер' && state.name !== 'Бухгалтер госсектора') {
        changeErInState(action.checked, action.index, filling)

    }
    state.fillingEncyclopediasIndexes = filling
    return state
}
const changeCurrentPketsEr = (state, action) => { //меняет currentComplect
    let fillingPaketsERIndexes = [...state.fillingPaketsERIndexes]

    const changePaketsInState = (checked, index) => { // если текущий комплект не офис для Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

        if (checked === true) {
            fillingPaketsERIndexes = [] // - очищает информацию о входящих в комплект пакетах в state.currentComplect
        } else {
            fillingPaketsERIndexes = [index]
        }

        // changePaketsErFromCurrent(state);
    }

    if (state.name !== 'Бухгалтер' && state.name !== 'Бухгалтер госсектора') {

        if (state.name !== 'Офис') {
            changePaketsInState(action.checked, action.index)
             // изменяет индекс входящих в комплект пакетов
//TODO: if universal complect
        } else {

            window.alert('в комплекте Гарант-Офис должны содержаться два любых Пакета ЭР')
            if (action.checked === true) {
                if (action.index === 0) {
                    fillingPaketsERIndexes = [1, 2]
                } else if (action.index === 1) {
                    fillingPaketsERIndexes = [0, 2]
                } else if (action.index === 2) {
                    fillingPaketsERIndexes = [0, 1]
                }

            } else { //checked == false
                if (action.index === 0) {
                    fillingPaketsERIndexes = [0, 2]
                } else if (action.index === 1) {
                    fillingPaketsERIndexes = [0, 1]
                } else if (action.index === 2) {
                    fillingPaketsERIndexes = [1, 2]
                }
            }
            // changePaketsErFromCurrent (state);

            //
        }
    }

    state.fillingPaketsERIndexes = fillingPaketsERIndexes
    return state
}
const changeLt = (state, action) => {

    state.fillingLTIndexes = [...state.fillingLTIndexes]
    state.fillingPaketLT = [...state.fillingPaketLT]
    const currentWeightOfIncludedLT = (state) => {
        let currentWeight = 0


        // state.legalTech.value.forEach((elem, idx) => { //считаем текущий вес всех LT - если меньше пяти засовываем в инклудед, если 5 и больше - засовываем в дополнительный LT
        //     state.currentComplect.fillingLTIndexes.forEach((el) => {

        //         if (idx === el) {
        //             if (elem.checked === true) {
        //                 currentWeight += elem.weight
        //             }
        //         }
        //     })


        // })

        currentWeight = state.fillingLTIndexes.length

        return currentWeight
    }

    if (state) {
        if (state.name === 'Офис') {
            // let currentWeight
            let currentWeightOfIncluded
            if (state.fillingLTIndexes.includes(action.index) === false) { //если сервис НЕ входит в инклудед - по умолчанию в комплект
                if (action.checked === false) {


                    // state.legalTech.value[action.index].checked = true // в state в дате отмечает check

                    // currentWeight = currentWeightOfLT(state) // считает вес всех check
                    currentWeightOfIncluded = currentWeightOfIncludedLT(state)
                    currentWeightOfIncluded >= 5 ? state.fillingPaketLT.push(action.index) : state.fillingLTIndexes.push(action.index) //если 5 и более пушит в доп LT если нет, то в included


                } else {

                    //действия по отключению LT не входящих в included  - 
                    // state.legalTech.value[action.index].checked = false

                    state.fillingPaketLT.forEach((elem, idx) => {

                        if (elem === action.index) {
                            state.fillingPaketLT.splice(idx, 1)
                        }


                    })
                }
            } else { //если сервис входит в инклудед - по умолчанию в комплект
                if (action.checked === false) {

                } else {
                    // state.legalTech.value[action.index].checked = false
                    state.fillingLTIndexes.forEach((elem, idx) => {
                        if (elem === action.index) {
                            state.fillingLTIndexes.splice(idx, 1)
                        }

                    })
                    currentWeightOfIncluded = currentWeightOfIncludedLT(state)

                    if (currentWeightOfIncluded < 5) { //если included <5 а в доп сервисах что-то есть - переносим из доп в инклудед
                        if (state.fillingPaketLT.length > 0) {
                            state.fillingLTIndexes.push(state.fillingPaketLT[state.fillingPaketLT.length - 1]) //пушим в инклудед последний индекс из доп
                            state.fillingPaketLT.splice(state.fillingPaketLT.length - 1, 1) //и вырезаем его из доп
                        } else {
                            window.alert(`В комплекте Гарант-Офис должно быть минимум 5 сервисов Legal Tech, сейчас их ${currentWeightOfIncluded} в комплекте`)

                        }
                    }
                }
            }

        } else {

            if (state.fillingLTIndexes.includes(action.index) === false) {
                if (action.checked === false) {
                    state.fillingPaketLT.push(action.index)
                } else {

                    state.fillingPaketLT.forEach((elem, idx) => {
                        if (elem === action.index) {
                            state.fillingPaketLT.splice(idx, 1)
                        }
                    })
                }
            }
        }
    }

    return state


}
const changeNameOfComplect = (state, action) => {

    if (action.type === 'INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT') {
        state.name = action.value
        state.fillingLTIndexes = []
        state.width = action.width
        state.currentStatusInputComplectName = action.status

    }

    return state
}

const reset = (state) => {
    state = null
    return state
}

export const currentComplect = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COMPLECT:
            return createComplect(state, action)
        case MAXIMUM:
            return createMaximum(state, action)
        case CHANGE_WEIGHT_AND_NAME_OF_UNIVERSAL_COMPLECT:
            if (state) {
                if (action.globalParameters.currentComplectsType === 'Универсальный') {
                    let indexOfRightComplect = 0
                    action.universalComplects.complects.forEach(complect => {

                        if (action.weight === complect.weight) {
                            indexOfRightComplect++
                            state.number = complect.number
                            state.name = complect.name
                            state.weight = complect.weight
                        }
                    })
                    if (!indexOfRightComplect && action.weight) {
                        state.name = 'СОБРАН НЕВЕРНО!'
                    }
                    return { ...state }
                }
                return state
            }
            return state

        case CHANGE_CURRENT_INFOBLOCKS:
            return changeCurrentInfoblocks(state, action)

        case CHANGE_CURRENT_ER:
            return changeCurrentEr(state, action)

        case CHANGE_CURRENT_PAKETS_ER:
            return changeCurrentPketsEr(state, action)

        case CHANGE_CURRENT_LT:
            return changeLt(state, action)

        case INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT:
            return changeNameOfComplect(state, action)

        case RESET:
            return reset(state)
        default:
            return state
    }


}