import React from "react";
import imgNFT from "../componentes/imgs/image-equilibrium.jpg";
import ethereum from "../componentes/imgs/icon-ethereum.svg";
import clock from "../componentes/imgs/icon-clock.svg";
import avatar from "../componentes/imgs/image-avatar.png"

const card = document.getElementById('card')

function Card(){
    return(
        <>
            <div id="card">
                <img src={imgNFT} alt='' />
                <p onClick={()=>{card.style.opacity='0'}} className="NFTname"> Equilibrium #3429 </p>
                <p className="NFTdescrition">Nossa coleção Equilibrium promove equilíbrio e calma </p>
                <div className="details">
                    <div className="help">
                        <img className="icons" src={ethereum} alt=''/>
                        <p className="price"> 0.041ETH</p>
                    </div>
                    <div className="help">
                        <img className="icons" src={clock} alt=''/>
                        <p className="hours"> 3 dias atrás </p>
                    </div>
                </div>
                <hr/>
                <div className="creator-container">
                    <img className="photo" src={avatar} alt='' />
                    <p className="createFor">Criado por </p> <a className="nameCreator" href="https://www.linkedin.com/in/pablo-bidiaki/" target='_blank'>Pablo Bidiaki</a>
                </div>
            </div>
        </>    
    )
}

export default Card;