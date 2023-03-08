import './Select-Region.css'


const SelectRegion = (props) => {
    const onButtonClick = (region) => {
        props.setRegion(region)
        props.setRegionStatus(false)

    }
    return (
        <div className='region__container'>

            <div className='region__main'>
                <div className="regionMenu">
                    <div className='region__buttonWrapper'>
                        <button className='region__button'
                            onClick={() => {
                                onButtonClick(props.KMV)
                            }}
                        >
                            {props.KMV}
                        </button>
                        <button className='region__button'
                            onClick={() => {
                                onButtonClick(props.STV)
                            }}>
                            {props.STV}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SelectRegion