import EllipseCheck from "./img/checkedWhite.svg"
import "./buttons.css"
import Button from '@material-ui/core/Button';
import React from 'react';
import { PROF } from "../../redux/redusers/global-parameters/global-parameters-reducer";



const ComplectButtons = (props) => {

    let buttons = [];

    if (props.currentComplectsType === PROF) {
        props.allComplects.forEach((complect, index) => {
            buttons.push(
                <Button
                    key={`btn-${index}`}
                    style={props.style[index]}
                    onClick={() => {
                        props.createComplect(
                            complect,
                            index,
                            props.ods,
                            props.currentOd,
                            props.currentTheme,
                            props.numberOfOD,
                            props.typeOfContract,
                            props.infoblocks,
                            props.er,
                            props.legalTech,
                            props.freeBlocks,
                            props.consalting,
                            props.currentSupplyName,
                            props.currentComplectsType,
                            props.currentRegion
                        )

                    }

                    }
                    className={complect.className}
                    number={index}
                    type="button" > {complect.name}
                    < div className="ellipseWrapper" >
                        <img className="ellipse" src={props.ellipse[index]} alt=""></img>
                    </div >
                </Button >)
        })
    } else {
        if (props.currentComplect) {
            buttons = props.universalComplects.complects.map((complect, index) => {
                if (index === props.universalComplects.complects.length - 1 || props.currentComplect.name === complect.name) {
                    return (
                        <Button
                            key={`btn-${index}`}
                            className={props.universalClassNames[index]}
                            number={index}
                            onClick={() => {
                                if (complect.name === 'Максимум') {
                                    props.createMaximum(
                                        complect,
                                        index,
                                        props.ods,
                                        props.currentOd,
                                        props.currentTheme,
                                        props.numberOfOD,
                                        props.typeOfContract,//TODO: сделать тип контракта Универсальные->Интернет/Проксима
                                        props.infoblocks,
                                        props.er,
                                        props.legalTech,
                                        props.freeBlocks,
                                        props.consalting,
                                        props.currentSupplyName,
                                        props.currentComplectsType,
                                        props.currentRegion
                                    )
                                }
                            }}
                            type="button" >{complect.name}

                            <div className="ellipseWrapper">
                                {/* {index === props.universalComplects.complects.length - 1 && */}
                                <img className="ellipse" src={EllipseCheck} alt=""></img>
                            </div>
                        </Button>
                    )
                } else {

                    return (
                        <Button
                            key={`btn-${index}`}
                            className={props.universalClassNames[index]}
                            number={index}
                            type="button" >{complect.name}

                        </Button>
                    )
                }


            })
        }
    }



    return (
        buttons
    )
}

export default ComplectButtons