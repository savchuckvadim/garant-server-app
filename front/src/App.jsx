import { useEffect } from 'react';
import './App.css'
import MainContainer from './modules/components/main/main-Container';
import Preloader from './modules/components/Preloader/Preloader';
import SelectRegionContainer from './modules/components/Select-Region/Select-Region-Container';


const App = (props) => {
  useEffect(() => {
    props.getPrices()


  }, [])
  useEffect(() => {

    props.initial()

  }, [])
  // if (!props.createdDeal) {
    if (props.preloader === true) {
      return <Preloader />
    }
    if (props.regionInProgress) {
      return <SelectRegionContainer />
    }
    return <MainContainer />
  // }

}


export default App
