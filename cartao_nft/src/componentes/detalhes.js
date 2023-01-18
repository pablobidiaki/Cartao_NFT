import React from "react";
import ethereum from './imgs/icon-ethereum.svg'
import clock from './imgs/icon-clock.svg'

function Detalhes(){
    return(
        <div className="details">
            <div className="help">
                <img className="icons" src={ethereum} />
                <p className="price"> 0.041ETH </p>
            </div>
            <div className="help">
                <img className="icons" src={clock} />
                <p className="hours">3 dias atrás</p>
            </div>
        </div>
    )
}

export default Detalhes;