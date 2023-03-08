
import "./buttons.css"
import { odChangeActionCreator } from "../../redux/redusers/od-reducer";
import ODButtons from "./od";
import { connect } from "react-redux";
import { goodsActionCreator } from "../../redux/redusers/deal/goods-reducer";




let mapStateToProps = (state) => {
  let currentComplect = state.currentComplect
  let allOds = state.od.names
  let currentTheme = state.theme.style[state.theme.indexOfTheme]
  let odClassName = currentTheme.currentMainClass
  let currentOd = state.od.currentOd
  const style = {
    height: 54,
    backgroundColor: currentTheme.backgroundColor,
    color: currentTheme.color


  }
  let typeOfContract = state.typeOfContract.value.typeOfGood
  let numberOfComplect = 0
  if (currentComplect) {
    numberOfComplect = currentComplect.number
  }
  return {
    currentSupplyName: state.globalParameters.currentSupply,
    currentComplectsType: state.globalParameters.currentComplectsType,
    currentRegion: state.globalParameters.currentRegion,
    currentComplect,
    numberOfComplect,
    allOds,
    odClassName,
    currentOd,
    style,
    typeOfContract

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    odChange: (name, names, currentComplect, numberOfComplect, index, typeOfContract, currentSupplyName, currentComplectsType, currentRegion) => {
      if (!currentComplect || currentComplect.name === 'Универсальный комплект') {
        window.alert('сначала выберите комплект')
      } else {

        const actionOd = odChangeActionCreator(name, names, currentComplect)
        const actionGoods = goodsActionCreator(numberOfComplect, index, typeOfContract, currentSupplyName, currentComplectsType, currentRegion)
        dispatch(actionOd)
        dispatch(actionGoods)

      }

    }
  }
}
const ODButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ODButtons)
export default ODButtonsContainer