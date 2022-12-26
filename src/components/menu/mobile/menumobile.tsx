import { useState } from 'react'
import { Buttondowload } from '../../footer/footer';
import './menumobile.scss'

interface Menumobile {
    Menumobile: Function;
    Modalmobile: Function;
}

export const Menumobile = (props : Menumobile) => {

    return(
        <>
            <div className='area' onClick={()=>{props.Menumobile(false)}}>
            </div>

            <div className='menumobile'>
            <img className='close' src='close.png' onClick={()=>{props.Menumobile(false)}} alt='loading or error'></img>
            <nav>
                <ul>
                    <li>Jogos<img src='setaw.png' alt='loading or error'></img></li>
                    <li>Esportes<img src='setaw.png' alt='loading or error'></img></li>
                    <li>Loja</li>
                    <li>Noticias</li>
                    <li>Suporte</li>
                </ul>
                <div className='buttonsm'>
                    <button className='criarconta'>Criar conta</button>
                    <button className='logar' onClick={()=>{
                        props.Modalmobile(true)
                        }}>Logar</button>
                </div>
            </nav>
            </div>
        </>
    )
}