import React from 'react'
import Avatar from './imgs/image-avatar.png'

function Criador(){
    return(
        <div className='creator-container'>
            <img className='photo' src={Avatar} /> 
            <p className='createFor'>Criado por </p> <a href='https://www.linkedin.com/in/pablobidiaki' target='_blank' className='nameCreator'> Pablo Bidiaki</a>
        </div>
    )
}

export default Criador;