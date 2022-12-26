import './footer.scss'

export const Buttondowload = () => {
    if(navigator.userAgent.indexOf("Win") == 13){
        return(
            <button><img src='win.png' alt='loading or error'></img>Baixar para o Windows</button>
        )
    }else if(navigator.userAgent.indexOf("Mac") == 13){
        return(
            <button><img src='mac.png' alt='loading or error'></img>Baixar para o MacOS</button>
        )
    }else if(navigator.userAgent.indexOf("Linux")){
        return(
            <button><img src='linux.png' alt='loading or error'></img>Baixar para o Linux</button>
        )
    }else{
        return(
            <button>Baixar</button>
        )
    }
}

export const Footer = () => {

    return (
        <footer>
            <div className='center'>
                <div className='texts'>
                    <img src='battlenet.png' alt='loading or error'></img>
                    <h4>Baixe agora o battle.net</h4>
                    <ul>
                        <li><img src='footerli1.svg' alt='loading or error'></img>Seus jogos em um só lugar</li>
                        <li><img src='footerli2.svg' alt='loading or error'></img>Conecte-se aos seus amigos</li>
                        <li><img src='footerli3.svg' alt='loading or error'></img>Compre jogos e itens digitais</li>
                    </ul>
                    <Buttondowload></Buttondowload>
                    <div className='mobiledescription'>
                        <img src='movel.svg' alt='loading or error'></img>
                        <p>Também disponível como <a href=''>aplicativo móvel</a></p>
                    </div>
                </div>
                <div className='images'>
                    <img src='footerimg1.png' alt='loading or error'></img>
                    <img src='footerimg2.png' className='two' alt='loading or error'></img>
                </div>
            </div>
        </footer>
    )
} 