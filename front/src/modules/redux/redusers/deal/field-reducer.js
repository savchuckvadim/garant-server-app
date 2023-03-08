const DEAL_FIELD = 'DEAL_FIELD'

let initialState = {
    infoblocks: '',
    infoblocksDescription: [],
    er: '',
    lt: '',
    freeBlocks: '',
    consalting: '',
    current: '',
    description: [],

    descriptionUrls: {
        npa: '',
        judge: '',
        judge2: '',
        judgeFree: '',
        comments: '',
        special: '',
        new: '',
        er: '',
        er2: '',
        lt: '',
        lt2: '',
        lt3: '',

        consalting: ''
    }
}
export const dealFieldActionCreator = (currentComplect, infoblocks = 0, er = 0, lt = 0, freeBlocks = 0, consalting = 0) => {


    return {
        type: DEAL_FIELD,
        infoblocks,
        er,
        lt,
        freeBlocks,
        consalting,
        currentComplect
    }
}


let infoblocks = (array) => {
    let result = []


    array.forEach((elem, idx) => {
        let resultArray = ``
        let type = array[idx].nameOfType
        elem.value.forEach((element) => {

            if (element.checked) {
                resultArray += `${element.name} %0A`
            }
        })
        if (resultArray) {
            result.push(resultArray)
        }
    })
    let stringResult = ``
    result.forEach(element => {
        stringResult += `${element} `
    })

    return (
        stringResult
    )
}

let blockOfInfoblock = (array) => {
    let resultArray = ``
    array.value.forEach((element) => {

        if (element.checked) {
            resultArray +=
                `${element.name}
`


        }
    })


    return resultArray
}
const getConsaltingBlocks = (currentComplect, consaltingBlocks) => {

    let resultArray = ``
    if (currentComplect) {
        if (currentComplect.consalting.length > 0) {
            currentComplect.consalting.forEach((element) => {
                resultArray += `${consaltingBlocks[element].name} %0A`
            })
        }
    }

    return resultArray
}
const enciclopedias = (currentComplect, arrayOfPakets, arrayOfEr) => {

    let result = ``
    let indexesOfIncludedErs = []
    let paketsEr = (currentComplect, arrayOfPakets, arrayOfEr) => {
        let paketsNames = ``
        let includedOfPakets = ``
        let paketsAndFilling = ``
        if (currentComplect) {
            if (currentComplect.fillingPaketsERIndexes) {
                // if(currentComplect.fillingPaketsERIndexes.length < 2){ //если в текущем комплекте меньше двух пакетов ЭР - т.е. не Офис
                currentComplect.fillingPaketsERIndexes.forEach(paketIndex => {
                    paketsNames += `${arrayOfPakets.value[paketIndex].name} %0A
                     `


                    arrayOfPakets.value[paketIndex].including.forEach(indexOfEr => {
                        //                         if(!includedOfPakets.includes(indexOfEr)){

                        //                             includedOfPakets += `
                        // ${arrayOfEr.value[indexOfEr].name}</br>`
                        //                         }
                        if (!indexesOfIncludedErs.includes(indexOfEr)) {

                            indexesOfIncludedErs.push(indexOfEr)
                        }
                    })
                })
                indexesOfIncludedErs.forEach(indexOfEr => {
                    includedOfPakets += `${arrayOfEr.value[indexOfEr].name} %0A`
                })

                paketsAndFilling = `${paketsNames} %0A`
                paketsAndFilling += `${includedOfPakets} %0A`
            }
        }

        return paketsAndFilling
    }

    let er = (currentComplect, arrayOfEr, indexesOfIncludedErs) => {

        let result = ``

        if (currentComplect.fillingEncyclopediasIndexes.length > 0) {
            result = `${arrayOfEr.nameOfType} %0A`

            arrayOfEr.value.forEach((element, index) => {
                if (element.checked === true) {

                    if (!indexesOfIncludedErs.includes(index)) {
                        result += `${element.name} %0A`
                    }

                }
            })


        }

        return result
    }
    let paketsString = paketsEr(currentComplect, arrayOfPakets, arrayOfEr)
    let erString = er(currentComplect, arrayOfEr, indexesOfIncludedErs)


    result += paketsString
    result += erString
    // result += `/<pre>`


    return result
}

let legalTech = (currentComplect, legalTech) => {

    let ltInComplect = ``
    let paketLT = ``
    let fillingLt = ``
    let nameOfPaketLt = ``
    let getNameOfLt = (number) => {
        if (number === 2) {
            return `%0A Малый сервисный Пакет Legal Tech %0A`
        } else if (number === 5) {
            return `%0A Средний сервисный Пакет Legal Tech %0A`
        } else if (number === 10) {
            return `%0A Большой сервисный Пакет Legal Tech %0A`
        }
        return ``
    }
    nameOfPaketLt = getNameOfLt(currentComplect.fillingPaketLT.length)
    currentComplect.fillingLTIndexes.forEach(ltIndex => {
        ltInComplect += `${legalTech.value[ltIndex].name} %0A`
    })
    if (currentComplect.fillingPaketLT) {
        paketLT = `${nameOfPaketLt}`
        currentComplect.fillingPaketLT.forEach(ltIndex => {
            paketLT += `${legalTech.value[ltIndex].name} %0A`
        })
    }
    fillingLt = `${ltInComplect} %0A`
    fillingLt += `${paketLT} %0A`
    return fillingLt
}



// let descriptionErs = (ers, state) => {
//     let result = {
//         ...state,
//         descriptions: {
//             ...state.descriptions,
//             er: [],
//             er2: [],
//         },
//         descriptionUrls: {
//             ...state.descriptionUrls,
//             er: '',
//             er2: ''
//         }

//     }
//     let count = -1
//     let count2 = -1

//     ers.value.forEach((er, index) => {

//         if (er.checked && er.description !== '' && index < ers.value.length / 2) {

//             result.descriptionUrls.er += `FIELDS[UF_CRM_1677133674][${count + 1}]=${`${er.name} %0A`}&`
//             if (index < ers.value.length - 1) {
//                 result.descriptionUrls.er += `FIELDS[UF_CRM_1677133674][${count + 2}]=${`${er.description} %0A`}&`
//             } else {
//                 result.descriptionUrls.er += `FIELDS[UF_CRM_1677133674][${count + 2}]=${`${er.description} %0A`}`
//             }


//             count = count + 2
//         }
//         else if (er.checked && er.description !== '' && index >= ers.value.length / 2) {

//             result.descriptionUrls.er2 += `FIELDS[UF_CRM_1677139653][${count2 + 1}]=${`${er.name} %0A`}&`
//             if (index < ers.value.length - 1) {
//                 result.descriptionUrls.er2 += `FIELDS[UF_CRM_1677139653][${count2 + 2}]=${`${er.description} %0A`}&`
//             } else {
//                 result.descriptionUrls.er2 += `FIELDS[UF_CRM_1677139653][${count2 + 2}]=${`${er.description} %0A`}`
//             }

//             count2 = count2 + 2
//         }


//     })



//     return result
// }


const changeField = (stateCome, action) => {

    if (action.currentComplect) {
        let infoblocksString = ''
        let erString = ''
        let ltString = ''
        let freeBlocks = ''
        let consalting = ''


        let descriptions = { ...stateCome.descriptions }
        let descriptionUrls = { ...stateCome.descriptionUrls }


        let state = {
            ...stateCome
        }
        if (action.infoblocks) {
            infoblocksString = infoblocks(action.infoblocks)
        
            // descriptionUrls = infoblocksDescription.descriptionUrls

        }
        if (action.er) {
            erString = enciclopedias(action.currentComplect, action.er[0], action.er[1])
            
        }
        if (action.lt) {
            ltString = legalTech(action.currentComplect, action.lt)



        }
        // if (action.freeBlocks) {
        //     freeBlocks =  blockOfInfoblock(action.freeBlocks)
        // }
        if (action.consalting) {
            
            consalting = getConsaltingBlocks(action.currentComplect, action.consalting.value)
        }



        state.infoblocks = infoblocksString
        state.er = erString
        state.lt = ltString
        state.freeBlocks = freeBlocks
        state.consalting = consalting
        state.descriptions = descriptions
        state.descriptionUrls = descriptionUrls

        state.current = `
        ${infoblocksString}
        ${erString}
        ${ltString}
        ${consalting}
        `
        console.log(state.current)
        return state
    } else {
        return stateCome
    }

}
const changeDescription = (stateCome, action) => {

    let infoblocksString = ''
    let erString = ''
    let ltString = ''

    let state = {
        ...stateCome
    }
    if (action.infoblocks) {
        infoblocksString = infoblocks(action.infoblocks, true)

    }
    // if (action.er) {
    //     erString = enciclopedias(action.currentComplect, action.er[0], action.er[1])
    // }
    // if (action.lt) {
    //     ltString = legalTech(action.currentComplect, action.lt)
    // }



    let inf = infoblocksString
    // let er = erString
    // let lt = ltString

    state.description = `
    ${infoblocksString}
        `
    return state
}
const changeFieldAndDescription = (state, action) => {
    changeField(state, action);
    return changeDescription(state, action);
}
export const dealFieldReducer = (state = initialState, action) => {

    if (action.type === DEAL_FIELD) {
        return changeField(state, action);
    }

    return state
}