import './bannerhero.scss'

export const Bannerhero = () => {
    return(
        <section className='bannerhero'>
            <div className='center'>
                <div className='jogos'>
                    <ul className='listajogos'>
                        <li className='select'><img src='diablo4.png'></img></li>
                        <li><img src='heartstone.png'></img></li>
                        <li><img src='wow.png'></img></li>
                        <li><img src='diablo.png'></img></li>
                        <li><img src='starcraft.png'></img></li>
                    </ul>
                </div>

                <div className='text'>
                    <h2>Retorne à escuridão com o game Diablo IV</h2>
                    <p>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
                    <button>Jogue agora</button>
                </div>

                <div className='trailer'>
                    <img src='diablologor.png'></img>
                    <div>
                        <p>ASSISTA O TRAILLER</p>
                        <div className='boxtrailler'>
                            <img src='play.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 