import { useState } from 'react'
import './bannerhero.scss'

export const Bannerhero = () => {
    const [bg, setBg] = useState('bg-diablo4.png');
    const [title, setTitle] = useState('Retorne à escuridão com o game Diablo IV')
    const [desc, setDesc] = useState('O retorno de Lilith traz uma era de escuridão e sofrimento')
    const [button, setButton] = useState('Jogue agora')
    const [imgr, setImgr] = useState('diablologor.png')
    const [trailer, setTrailer] = useState('diablotrailer.png')
    const [diablo4, setDiablo4] = useState('select')
    const [heartstone, setHeartstone] = useState('')
    const [wow, setWow] = useState('')
    const [diablo, setDiablo] = useState('')
    const [starcraft, setStarcraft] = useState('')

    const [playgif, setPlaygif] = useState('play.png')

    return(
        <section className='bannerhero' style={{backgroundImage: "url("+ bg + ")"}}>
            <div className='center'>
                <div className='jogosecontent'>
                    <div className='jogos'>
                        <ul className='listajogos'>

                            <li className={diablo4} onClick={()=>{
                                setBg('bg-diablo4.png')
                                setTitle('Retorne à escuridão com o game Diablo IV')
                                setDesc('O retorno de Lilith traz uma era de escuridão e sofrimento')
                                setButton('Jogue agora')
                                setImgr('diablologor.png')
                                setTrailer('diablotrailer.png')
                                setDiablo4('select')
                                setHeartstone('')
                                setWow('')
                                setDiablo('')
                                setStarcraft('')
                            }}><img src='diablo4.png' alt='loading or error'></img></li>

                            <li className={heartstone} onClick={()=>{
                                setBg('bg-heartstone.png')
                                setTitle('Novo pacote de expansão de Hearthstone')
                                setDesc('A Horda e a Aliança se encontraram no Vale Alterac para lutar')
                                setButton('Reserve agora na pré-venda')
                                setImgr('heartstonelogor.png')
                                setTrailer('heartstonetrailer.png')
                                setDiablo4('')
                                setHeartstone('select')
                                setWow('')
                                setDiablo('')
                                setStarcraft('')
                            }}><img src='heartstone.png' alt='loading or error'></img></li>

                            <li className={wow} onClick={()=>{
                                setBg('bg-wow.png')
                                setTitle('Desbrave as Terras Sombrias em Shadowlands!')
                                setDesc('O que jaz além do mundo que você conhece?')
                                setButton('Reserve agora na pré-venda')
                                setImgr('wowlogor.png')
                                setTrailer('wowtrailer.png')
                                setDiablo4('')
                                setHeartstone('')
                                setWow('select')
                                setDiablo('')
                                setStarcraft('')
                            }}><img src='wow.png' alt='loading or error'></img></li>

                            <li className={diablo} onClick={()=>{
                                setBg('diabloI.png')
                                setTitle('Retorne à escuridão com o game Diablo')
                                setDesc('O retorno de Lilith traz uma era de escuridão e sofrimento')
                                setButton('Jogue agora')
                                setImgr('diabloIlogor.png')
                                setTrailer('diabloI.png')
                                setDiablo4('')
                                setHeartstone('')
                                setWow('')
                                setDiablo('select')
                                setStarcraft('')
                            }}><img src='diablo.png' alt='loading or error'></img></li>

                            <li className={starcraft} onClick={()=>{
                                setBg('bg-starcraft.png')
                                setTitle('O SUPREMO JOGO DE ESTRATÉGIA EM TEMPO REAL')
                                setDesc('Viva uma experiência de guerra intergaláctica')
                                setButton('Reserve agora na pré-venda')
                                setImgr('starcraftlogor.png')
                                setTrailer('starcrafttrailer.png')
                                setDiablo4('')
                                setHeartstone('')
                                setWow('')
                                setDiablo('')
                                setStarcraft('select')
                            }}><img src='starcraft.png' alt='loading or error'></img></li>

                        </ul>
                    </div>

                    <div className='text'>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <button><img src='person.png' alt='loading or error'></img>{button}</button>
                    </div>
                </div>

                <div className='trailer'>
                    <img src={imgr} alt='loading or error'></img>
                    <div>
                        <p>ASSISTA O TRAILLER</p>
                        <div className='boxtrailler' 
                        onMouseOver={()=>{
                            setPlaygif('playgif.png')
                            if(diablo4 == 'select'){   
                                setTrailer('diablo.gif')
                            }else if(heartstone == 'select'){
                                setTrailer('heartstone.gif')
                            }else if(wow == 'select'){
                                setTrailer('wow.gif')
                            }else if(diablo == 'select'){
                                setTrailer('diabloI.gif')
                            }else if(starcraft == 'select'){
                                setTrailer('starcraft.gif')
                            }
                        }} 

                        onMouseOut={()=> {
                            setPlaygif('play.png')
                            if(diablo4 == 'select'){   
                                setTrailer('diablotrailer.png')
                            }else if(heartstone == 'select'){
                                setTrailer('heartstonetrailer.png')
                            }else if(wow == 'select'){
                                setTrailer('wowtrailer.png')
                            }else if(diablo == 'select'){
                                setTrailer('diabloI.png')
                            }else if(starcraft == 'select'){
                                setTrailer('starcrafttrailer.png')
                            }
                        }}
                        style={{backgroundImage: "url("+ trailer + ")"}}>
                        <img src={playgif} alt='loading or error'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 