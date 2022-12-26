import { useState } from 'react'
import './modal.scss'

interface Modal{
    modal: Function;
}

export const Modal = (props: Modal) => {

    return (
        <>
        <div className='bgall' onClick={()=>{props.modal(false)}}>
        </div>
        <div className='modal'>
            <div className='bg'>
            <img src='closemodal.png' className='close' onClick={()=>{props.modal(false)}} alt='loading or error'></img>
            <div className='contentmodel'>
                <img src='battlenet.png' className='logo' alt='loading or error'></img>
                <form>
                    <input placeholder='E-mail ou telefone'></input>
                    <input placeholder='Senha'></input>
                    <button>Conectar-se</button>
                </form>
                <p className='ou'>ou conecte-se com </p>
                <div className='loginsociais'>
                    <div><img src='googlel.svg' alt='loading or error'></img></div>
                    <div><img src='applel.svg' alt='loading or error'></img></div>
                    <div><img src='facel.svg' alt='loading or error'></img></div>
                </div>
                <p><a href='#'>Crie uma conta</a> Battle.net de graça</p>
                <a href='#'>Não consegue logar?</a>
            </div>
            </div>
        </div>
        </>
    )
}