import { useState } from 'react'
import './modal.scss'

interface Modal{
    modal: Function;
}

export const Modal = (props: Modal) => {

    return (
        <div className='bgall'>
            <div className='modal'>
                <div className='bg'>
                <img src='closemodal.png' className='close' onClick={()=>{props.modal(false)}}></img>
                <div className='contentmodel'>
                    <img src='battlenet.png' className='logo'></img>
                    <form>
                        <input placeholder='E-mail ou telefone'></input>
                        <input placeholder='Senha'></input>
                        <button>Conectar-se</button>
                    </form>
                    <p className='ou'>ou conecte-se com </p>
                    <div className='loginsociais'>
                        <div><img src='googlel.svg'></img></div>
                        <div><img src='applel.svg'></img></div>
                        <div><img src='facel.svg'></img></div>
                    </div>
                    <p><a href='#'>Crie uma conta</a> Battle.net de graça</p>
                    <a href='#'>Não consegue logar?</a>
                </div>
                </div>
            </div>
        </div>
    )
}