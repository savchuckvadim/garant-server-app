import { connect } from "react-redux"
import { KMV, setRegion, setRegionStatus, STV } from "../../redux/redusers/global-parameters/global-parameters-reducer"
import SelectRegion from "./Select-Region"


const mapState = (state) => {
    return {
        KMV,
        STV
    }
}

const SelectRegionContainer = connect(mapState, {
    setRegionStatus,
    setRegion
})(SelectRegion)

export default SelectRegionContainer