import React from "react";

function NomeNFT(){
    return(
        <>
            <p className="NFTname" onClick={() => {
                const tudo = document.getElementById('card')
                tudo.style.display='none'
                tudo.style.transition='5s'
            }}>Equilibrium #3429</p>
        </>
    )
}

export default NomeNFT;