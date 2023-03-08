import { connect } from "react-redux"
import { goodsActionCreator } from "../../redux/redusers/deal/goods-reducer"
import { typeOfContractActionCreator } from "../../redux/redusers/deal/typeOfContract-reducer"
import TypeOfContract from "./typeOfContract"

const mapStateToProps = (state) => {
    let numberOfComplect = 0
    if(state.currentComplect) {
        numberOfComplect = state.currentComplect.number
    }
    let numberOfOD 
    state.od.names.forEach((el, ind) => {
        if(el === state.od.currentOd){
            numberOfOD = ind
        }
    })      
    
    return {
        currentComplectsType: state.globalParameters.currentComplectsType,
        currentSupplyName: state.globalParameters.currentSupply,
        currentRegion: state.globalParameters.currentRegion,
        name: state.typeOfContract.name,
        id: state.typeOfContract.id,
        value: state.typeOfContract.value,
        typesOfContract: state.typeOfContract.typesOfContract,
        numberOfComplect,
        numberOfOD
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        changeTypeOfContract: (index, numberOfComplect, numberOfOD, typeOfContract, currentSupply,  currentComplectsType, currentRegion) => {
            let actionContract = typeOfContractActionCreator(index)
            let actionGoods = goodsActionCreator(numberOfComplect, numberOfOD, typeOfContract, currentSupply,  currentComplectsType, currentRegion)

            dispatch(actionContract)
            dispatch(actionGoods)
        }
    }
}

export const TypeOfContractContainer = connect(mapStateToProps, mapDispatchToProps)(TypeOfContract)