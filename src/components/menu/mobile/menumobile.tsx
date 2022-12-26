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

            <div className='menumobile'>
                <img src='close.png' onClick={()=>{props.Menumobile(false)}}></img>
                <nav>
                    <ul>
                        <li>Jogos</li>
                        <li>Esportes</li>
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