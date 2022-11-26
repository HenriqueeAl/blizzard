import './menuesportes.scss'

export const Menuesportes = () => {
    
    return (
        <div className='menuesportes'>
            <nav>
                <ul>
                    <li><img src='hse2.png'></img>Hearthstone® masters</li>
                    <li><img src='wowe2.png'></img>Campeonato Mundial de Arena WoW®</li>
                    <li><img src='sce2.png'></img>StarCraft® II WCS</li>
                    <li><img src='owe2.png'></img>Copa Mundial de Overwatch®</li>
                    <li><img src='owle2.png'></img>Liga de Overwatch®</li>
                </ul>
            </nav>
            <div className='footer'>
                <div className='center'>     
                    <img src='trofeu.png'></img>
                    <p>Torneios da comunidade</p>
                </div>
            </div>
        </div>
    )
}