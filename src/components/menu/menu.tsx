import { useState } from 'react'
import './menu.scss'
import { Menujogos } from '../menujogos/menujogos'
import { Menuesportes } from '../menuesportes/menuesportes'
import { Modal } from '../modal/modal'

interface Modal {
    ref: string
}

export const Menu = () => {

    //const modelon = useRef<HTMLDivElement>(null);

    const [jogoson, setJogoson] = useState(false)
    const [esporteson, setEsporteson] = useState(false)

    const [modalon , setModalon] = useState(false);

    return(
        <>

        {/* Modal login */}

        {modalon == true ? <Modal modal={setModalon}></Modal> : <></>}

        {/* Menu */}

        <header className='centerhead'>
            <div className='menu'>
                <div className='logonav'>
                    <div className='logo'>
                        <img src='logo.png'></img>
                    </div>
                    <nav>
                        <ul className='desktop'>
                            <li onClick={() => {
                                setJogoson(!jogoson)
                                if(esporteson){
                                setEsporteson(!esporteson)   
                                }
                                }}>Jogos <img src={jogoson == true ? 'setab.png' : 'setaw.png'}></img></li>
                            <li onClick={() => {
                                setEsporteson(!esporteson)
                                if(jogoson){
                                    setJogoson(!jogoson)   
                                    }
                                }}>Esportes <img src={esporteson == true ? 'setab.png' : 'setaw.png'}></img></li>
                            <li>Loja</li>
                            <li>Noticias</li>
                            <li>Suporte</li>
                        </ul>
                    </nav>
                </div>
                <div className='buttons'>
                    <button className='criarconta'>Criar conta</button>
                    <button className='logar' onClick={()=>{
                        setModalon(true)
                       // modelon.current?.classList.toggle('none')
                        }}>Logar</button>
                </div>
            </div>
        </header>

        {/* Menu jogos */}
        
        {jogoson == true ? <Menujogos></Menujogos> : <div></div>}

        {/* Menu Esportes*/}

        {esporteson == true ? <Menuesportes></Menuesportes> : <div></div>}

        </>
    )
}