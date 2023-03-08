import { connect } from "react-redux"
import App from "./App"
import { getPrices } from "./modules/redux/redusers/all-price-reducer"
import { initial } from "./modules/redux/redusers/app-reducer"


const mapStateToProps = (state) => {
    return {
        preloader: state.preloader.inProgress,
        regionInProgress: state.globalParameters.regionInProgress,
        
    }
}

export default connect(mapStateToProps, {
    getPrices,
    initial
})(App)