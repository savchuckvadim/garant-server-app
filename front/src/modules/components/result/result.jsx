import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeUniversalComplect } from "../../redux/redusers/currentComplect-reducer"
import { changePriceFromWeight } from "../../redux/redusers/price-reducer"
import { weight } from "../../redux/redusers/weight-reducer"
import ResultModalButtonContainer from "../buttons/modal/result-modal-Container"
import ItemResult from "./items-result"
import "./result.css"
// import "../main/main.css"

const Result = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(weight(props.values.weight));
        dispatch(changeUniversalComplect(props.values.weight, props.globalParameters, props.universalComplects))
        dispatch(changePriceFromWeight(
            props.values.weight, props.currentComplect,
            props.numberOfOd, props.globalParameters.currentRegion,
            props.globalParameters.currentSupply, props.globalParameters.currentComplectsType,
            props.typeOfContract))
    }, [props.values.weight])



    let containerStyle = {
        borderColor: 'rgb(160, 179, 179)',
    }
    if (props.currentComplect.name) {
        return (
            <div id="" style={containerStyle} className="result__container">
                <div className="information">
                    <ItemResult values={props.values} state={props.state} textLt="textLt" styleText="text" styleSpanResult="spanResult" />

                    {/* <p className="text"> <NavLink className="text" as={Link} to="/description"> Описание комплекта </NavLink></p> */}
                </div>
                {/* <NavLink className="result__text btn btn-primary result__btn" style={props.values.styleResult} as={Button} to="/deal">Выбрать комплект</NavLink> */}
                <ResultModalButtonContainer />

            </div>
        )
    } else {
        return null

    }


}

export default Result