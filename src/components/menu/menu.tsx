import { useRef } from 'react'
import './menu.scss'
import '../modal/modal.scss'

interface Modal {
    ref: string
}

export const Menu = () => {

    const modelon = useRef<HTMLDivElement>(null);

    return(
        <>

        {/* Modal login */}
        
        <div ref={modelon} className='modal'>
            <div className='bg'>
            <img src='closemodal.png' className='close' onClick={()=>modelon.current?.classList.toggle('none')}></img>
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

        {/* Menu */}

        <header className='centerhead'>
            <div className='menu'>
                <div className='logonav'>
                    <div className='logo'>
                        <img src='logo.png'></img>
                    </div>
                    <nav>
                        <ul className='desktop'>
                            <li>Jogos</li>
                            <li>Esportes</li>
                            <li>Loja</li>
                            <li>Noticias</li>
                            <li>Suporte</li>
                        </ul>
                    </nav>
                </div>
                <div className='buttons'>
                    <button className='criarconta'>Criar conta</button>
                    <button className='logar' onClick={()=>{
                        modelon.current?.classList.toggle('none')
                        }}>Logar</button>
                </div>
            </div>
        </header>
        </>
    )
}