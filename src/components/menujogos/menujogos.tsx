import './menujogos.scss'

export const Menujogos = () => {
    return (
        <div className='menujogos'>
            <nav className='navcima'>
                <ul>
                    <li><img src='diabloII.png' alt='loading or error'></img><span>Diablo® II ressurected</span></li>
                    <li><img src='over2.png' alt='loading or error'></img><span>Overwatch® 2</span></li>
                    <li><img src='wow2.png' alt='loading or error'></img><span>World of Warcraft®</span></li>
                    <li><img src='hs2.png' alt='loading or error'></img><span>Hearthstone®</span></li>
                    <li><img src='hts2.png' alt='loading or error'></img><span>Heroes of the storm®</span></li>
                    <li><img src='wc2.png' alt='loading or error'></img><span>Warcraft® III Reforged</span></li>
                    <li><img src='diablo2.png' alt='loading or error'></img><span>Diablo® IV</span></li>
                    <li><img src='diabloI2.png' alt='loading or error'></img><span>Diablo® Immortal</span></li>
                    <li><img src='diabloIII2.png' alt='loading or error'></img><span>Diablo® III</span></li>
                    <li><img src='stII2.png' alt='loading or error'></img><span>StarCraft® II</span></li>
                    <li><img src='sc2.png' alt='loading or error'></img><span>StarCraft® Remastered</span></li>
                    <li><img src='arcade2.png' alt='loading or error'></img><span>Arcade da Blizzard®</span></li>
                </ul>
            </nav>
            <nav className='navebaixo'>
                <ul>
                    <li><img src='verjogos.svg' alt='loading or error'></img>Ver todos jogos</li>
                    <li><img src='iconbt.svg' alt='loading or error'></img>Aplicativo Battle.net</li>
                    <li><img src='icondw.svg' alt='loading or error'></img>Downloads</li>
                    <li><img src='iconch.svg' alt='loading or error'></img>Fóruns dos jogos</li>
                </ul>
            </nav>
        </div>
    )
}