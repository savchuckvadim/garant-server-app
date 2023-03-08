import Button from '@material-ui/core/Button';
import { PROF } from '../../redux/redusers/global-parameters/global-parameters-reducer';
import "./buttons.css";



const ResetButton = (props) => {

    let imgStyle = {
        display: 'flex'
    }
    if (props.currentComplectsType === PROF) {
        return (
            <Button
                style={props.style}
                onClick={props.reset}
                className="btn__reset"
                type="button" >
                <div>СБРОСИТЬ</div>
                <div className="ellipseWrapper">
                    <img src={props.deleteIcon} style={imgStyle} alt="delete icon" />
                </div>
            </Button>
        )
    }else{
        return null
    }

}

export default ResetButton