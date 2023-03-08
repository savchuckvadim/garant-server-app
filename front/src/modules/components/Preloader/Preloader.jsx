import './Preloader.css'
import logo from '../../../assets/logo.svg'

const Preloader = () => {

    return (
        <div className='preloader__container'>
            <div className="logoWrapper">
                <img className="logo" src={logo} alt=""></img>
            </div>
        </div>
    )
}
export default Preloader