
import Ellipse from "./img/uncheckedWhite.svg"
import EllipseCheck from "./img/checkedWhite.svg"
import "./buttons.css"
import React from 'react';
import { createComplectActionCreator, createMaximum, maximum } from "../../redux/redusers/currentComplect-reducer.js"
import { changeColorOfButtonActionCreator } from "../../redux/redusers/allComplects-reducer"
import { changeBlocksFromNewComplectActionCreator } from "../../redux/redusers/checkBoxes-action";
import ComplectButtons from "./buttons";
import { connect } from "react-redux";
import { goodsActionCreator } from "../../redux/redusers/deal/goods-reducer";
import { dealFieldActionCreator } from "../../redux/redusers/deal/field-reducer";





let mapStateToProps = (state) => {

    let currentOd = state.od.currentOd
    let numberOfOD
    const weight = state.weight.currentWeight
    state.od.names.forEach((od, index) => {
        if (od === currentOd) {
            numberOfOD = index
        }
    })
    let typeOfContract = state.typeOfContract.value.typeOfGood
    let currentComplect = state.currentComplect

    let infoblocks = state.infoblocks
    let legalTech = state.legalTech
    let er = state.encyclopedias
    let freeBlocks = state.freeBlocks
    let consalting = state.consalting
    let currentTheme = state.theme.style[state.theme.indexOfTheme]
    const dinamicStyleForButtons = (borderColor, textColor, complectColor) => {

        let styleOfButtons = {
            color: textColor,
            backgroundColor: complectColor,
            border: '1px solid',
            borderColor: borderColor,


        }

        return styleOfButtons
    }
    let style = []
    state.allComplects.forEach(complect => {
        let complectColor = complect.color
        let borderColor = complect.color
        let textColor = currentTheme.color
        if (currentComplect) {
            if (complect.name === currentComplect.name) {
                complectColor = complect.color
                borderColor = currentTheme.color
                textColor = currentTheme.textColor
            } else {
                complectColor = currentTheme.backgroundColor
            }
        } else {
            complectColor = currentTheme.backgroundColor
        }
        style.push(dinamicStyleForButtons(borderColor, textColor, complectColor))

    })
    let ellipse = state.allComplects.map(complect => {
        if (currentComplect) {
            if (complect.name === currentComplect.name) {
                return EllipseCheck
            } else {
                return Ellipse
            }
        } else {
            return Ellipse
        }

    })


    let universalClassNames = state.universalComplects.complects.map(complect => {

        if (complect.weight === weight) {
            return `${complect.className}--active`
        } else {
            return complect.className
        }
    })


    return {
        currentComplectsType: state.globalParameters.currentComplectsType,
        currentSupplyName: state.globalParameters.currentSupply,
        currentRegion: state.globalParameters.currentRegion,
        allComplects: state.allComplects,
        universalComplects: state.universalComplects, //state with universal complects and universal currentComplect
        currentTheme: state.theme.style[state.theme.indexOfTheme],
        currentOd: state.od.currentOd,
        ods: state.od.names,
        currentTheme: currentTheme,
        style: style,
        ellipse: ellipse,
        numberOfOD,
        typeOfContract,

        currentComplect,
        infoblocks,
        encyclopedias: state.encyclopedias,
        legalTech,
        er,
        freeBlocks,
        consalting,
        universalClassNames

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        createComplect: (obj, index, ods, currentOd, currentTheme, numberOfOD, typeOfContract, infoblocks, er, lt, freeBlocks, consalting, currentSupplyName, currentComplectsType, currentRegion) => {

            let actionNewComplect = createComplectActionCreator(obj, index, ods, currentOd)
            let actionColorOfButton = changeColorOfButtonActionCreator(index, currentTheme)
            let actionBlocksFromNewComplect = changeBlocksFromNewComplectActionCreator(obj)
            let actionGoods = goodsActionCreator(index, numberOfOD, typeOfContract, currentSupplyName, currentComplectsType, currentRegion)  //устанавливает текущую цену и текущий товар в price/goods - reducers
            let dealField = dealFieldActionCreator(obj, infoblocks, er, lt, freeBlocks, consalting)
            dispatch(actionColorOfButton)
            dispatch(actionNewComplect)
            dispatch(actionBlocksFromNewComplect)

            dispatch(actionGoods)
            dispatch(dealField)

        },
        createMaximum: (obj, index, ods, currentOd, currentTheme, numberOfOD, typeOfContract, infoblocks, er, lt, freeBlocks, consalting, currentSupplyName, currentComplectsType, currentRegion) => {
            
            let actionCeateMaximum = maximum(obj, index, ods, currentOd)
            let actionBlocksFromNewComplect = changeBlocksFromNewComplectActionCreator(obj)
            let actionGoods = goodsActionCreator(index, numberOfOD, typeOfContract, currentSupplyName, currentComplectsType, currentRegion)  //устанавливает текущую цену и текущий товар в price/goods - reducers
            let dealField = dealFieldActionCreator(obj, infoblocks, er, lt, freeBlocks, consalting)

            dispatch(actionCeateMaximum)
            dispatch(actionBlocksFromNewComplect)
            dispatch(actionGoods)
            dispatch(dealField)
        }
        // changeWeight:(infoblocks, encyclopedias) => {
        //     dispatch( weight(infoblocks, encyclopedias))
        // }
    }
}
const ComplectButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ComplectButtons)
export default ComplectButtonsContainer