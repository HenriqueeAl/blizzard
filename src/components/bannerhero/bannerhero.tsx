import { useRef, useState } from 'react'
import './bannerhero.scss'

export const Bannerhero = () => {
    const [bg, setBg] = useState('bg-diablo4.png');
    const [title, setTitle] = useState('Retorne à escuridão com o game Diablo IV')
    const [desc, setDesc] = useState('O retorno de Lilith traz uma era de escuridão e sofrimento')
    const [button, setButton] = useState('Jogue agora')
    const [imgr, setImgr] = useState('diablologor.png')
    const [trailer, setTrailer] = useState('diablotrailer.png')
    const [diablo, setDiablo] = useState('select')
    const [heartstone, setHeartstone] = useState('')
    const [wow, setWow] = useState('')

    return(
        <section className='bannerhero' style={{backgroundImage: "url("+ bg + ")"}}>
            <div className='center'>
                <div className='jogos'>
                    <ul className='listajogos'>

                        <li className={diablo} onClick={()=>{
                            setBg('bg-diablo4.png')
                            setTitle('Retorne à escuridão com o game Diablo IV')
                            setDesc('O retorno de Lilith traz uma era de escuridão e sofrimento')
                            setButton('Jogue agora')
                            setImgr('diablologor.png')
                            setTrailer('diablotrailer.png')
                            setDiablo('select')
                            setHeartstone('')
                            setWow('')
                        }}><img src='diablo4.png'></img></li>

                        <li className={heartstone} onClick={()=>{
                            setBg('bg-heartstone.png')
                            setTitle('Novo pacote de expansão de Hearthstone')
                            setDesc('A Horda e a Aliança se encontraram no Vale Alterac para lutar')
                            setButton('Reserve agora na pré-venda')
                            setImgr('heartstonelogor.png')
                            setTrailer('heartstonetrailer.png')
                            setDiablo('')
                            setHeartstone('select')
                            setWow('')
                        }}><img src='heartstone.png'></img></li>

                        <li className={wow} onClick={()=>{
                            setBg('bg-wow.png')
                            setTitle('Desbrave as Terras Sombrias em Shadowlands!')
                            setDesc('O que jaz além do mundo que você conhece?')
                            setButton('Reserve agora na pré-venda')
                            setImgr('wowlogor.png')
                            setTrailer('wowtrailer.png')
                            setDiablo('')
                            setHeartstone('')
                            setWow('select')
                        }}><img src='wow.png'></img></li>

                        <li><img src='diablo.png'></img></li>

                        <li><img src='starcraft.png'></img></li>

                    </ul>
                </div>

                <div className='text'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <button><img src='person.png'></img>{button}</button>
                </div>

                <div className='trailer'>
                    <img src={imgr}></img>
                    <div>
                        <p>ASSISTA O TRAILLER</p>
                        <div className='boxtrailler' style={{backgroundImage: "url("+ trailer + ")"}}>
                            <img src='play.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 