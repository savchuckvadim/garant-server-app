import { UNIVERSAL } from '../../redux/redusers/global-parameters/global-parameters-reducer'
import './Global-Parameters.css'

const GlobalParameters = (props) => {
    const changeSupply = () => {
        
        
        if (props.supplyButton === 'Проксима') {
            if (props.complectsTypeButton === UNIVERSAL) {
                
                props.reset()
                props.setSupply(0, props.currentComplectsType)

            } else {
                props.reset()
                
                props.setSupply(0, props.currentComplectsType)
                props.createComplect(props.universalComplectObj, 8, props.od.names, props.od.currentOd) //(obj, index, ods, currentOd)
            }

        } else {
            if (props.complectsTypeButton === UNIVERSAL) {
                props.reset()
                props.setSupply(1, props.currentComplectsType)

            } else {
                props.reset()
                props.setSupply(1, props.currentComplectsType)
                props.createComplect(props.universalComplectObj, 8, props.od.names, props.od.currentOd) //(obj, index, ods, currentOd)
            }
        }

    }
    const changeComplectsType = () => {
        if (props.complectsTypeButton === UNIVERSAL) {
            props.reset()
            props.setComplectsType(0, props.currentSupply)
            props.createComplect(props.universalComplectObj, 8, props.od.names, props.od.currentOd) //(obj, index, ods, currentOd)
            props.setRegionStatus(true)
        } else {
            props.reset()
            props.setComplectsType(1, props.currentSupply)
        }

    }
    return (
        <div className="app__header">
            <p className="complect__title" id="complect__title">Выберите подходящий {props.currentComplectsType} комплект <span className='current__supply'> "Гарант - {props.currentSupply}"</span></p>
            <div className="global__parametrs">
                <p className="global__parametr"
                    onClick={changeComplectsType}
                >{props.complectsTypeButton}</p>
                <p className="global__parametr"
                    onClick={changeSupply}>{props.supplyButton}</p>
            </div>
        </div>
    )
}

export default GlobalParameters