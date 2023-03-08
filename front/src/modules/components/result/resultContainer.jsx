
import React from "react"
import { connect } from "react-redux"
import { getWeight } from "../../utils/weight"
import InputTextContainer from "../main/textInput-Container"
import Result from "./result"
import "./result.css"

let mapStateToProps = (state) => {
    //weight, globalParameters, universalComplects for dispatch weight in universal complect reducer
    const weight = getWeight(state.infoblocks, state.encyclopedias);
    let weightLt = state.legalTech.weightLt;
    let price = state.price.currentPrice.value;
    let priceOfLt = state.legalTech.priceOfLt;
    let totalPrice = price + priceOfLt;
    let width = 50;
    let input = ''
    if (state.currentComplect.name) {
    
        width = state.currentComplect.name.length * 8.4;
        input = state.currentComplect.name
    }
    let getToolTipText = () => {

        return (
            <div className="information">
                <pre>Малый пакет Legal Tech   - 2 сервиса </pre>
                <pre>Средний пакет Legal Tech - 5 сервисов </pre>
                <pre>Большой пакет Legal Tech - 11 сервиса </pre>
                <p> Сейчас набрано - <span className="spanResult">{weightLt}</span> </p>
            </div>
        )
    };
    let toolTip = getToolTipText();
    

    // <InputTextContainer
    //     // state={state}
    //     // dispatch={props.dispatch}

    //     type="nameOfComplect"
    //     // autofocus={state.currentComplect.currentStatusInputComplectName}
    //     value={state.currentComplect.name}
    //     // placeholder='Гарант'
    //     // width={width}
    //     typeOfAction="INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT"

    // />

    let numberOfOd = 0
    state.od.names.forEach((name, index) => {
        if (name === state.od.currentOd) {
            numberOfOd = index
        }
    });

    let resultValues = {
        name: state.currentComplect.name,
        od: state.od.currentOd,

        ltIncluded: state.legalTech.ltIncluded,
        nameOflt: state.legalTech.nameOflt,

        styleLt: {
            display: state.legalTech.display
        },
        styleResult: {
            backgroundColor: state.currentComplect.color,
            color: 'white',
            textDecoration: 'none'
        },


        weight: weight,
        weightLt: weightLt,
        price: price,
        priceOfLt: priceOfLt,
        totalPrice: totalPrice,
        width: width,
        toolTipText: toolTip,
        inputText: input
    }
    return {
        values: resultValues,
        numberOfOd,
        currentComplect: state.currentComplect,
        state: state,
        globalParameters: state.globalParameters,
        universalComplects: state.universalComplects,
        typeOfContract: state.typeOfContract.value.typeOfGood
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Result)
export default ResultContainer