import './menu.scss'

export const Menu = () => {
    return (
        <header className='centerhead'>
            <div className='menu'>
                <div className='logonav'>
                    <img src='logo.png'></img>
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
                    <button className='logar'>Logar</button>
                </div>
            </div>
        </header>
    )
}