import React from "react";
import imgNFT from "../componentes/imgs/image-equilibrium.jpg";
import ethereum from "../componentes/imgs/icon-ethereum.svg";
import clock from "../componentes/imgs/icon-clock.svg";
import avatar from "../componentes/imgs/image-avatar.png";

function Card(){
    return(
        <>
            <div id="modal-NFT">
                <img className="center-img" src={imgNFT} /> <br/>
                <button className="btnFechar" onClick={() => {
                    const card = document.getElementById('card')
                    const modal = document.getElementById('modal-NFT')
                    card.style.transition='2s'
                    card.style.opacity='1'
                    modal.style.transition='1s'
                    modal.style.opacity='0'
                }}>FECHAR </button>
            </div> 
            <div id="card">
                <img style={{cursor:'pointer'}} onClick={()=>{
                    const card = document.getElementById('card')
                    const modal = document.getElementById('modal-NFT')
                    card.style.transition='.8s'
                    card.style.opacity='0'
                    modal.style.transition='1s'
                    modal.style.opacity='1'
                }} src={imgNFT} alt='' />
                <p onClick={()=>{
                    const card = document.getElementById('card')
                    const modal = document.getElementById('modal-NFT')
                    card.style.transition='.8s'
                    card.style.opacity='0'
                    modal.style.transition='1s'
                    modal.style.opacity='1'
                }} className="NFTname"> Equilibrium #3429 </p>
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