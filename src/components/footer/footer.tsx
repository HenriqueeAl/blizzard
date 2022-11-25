import './footer.scss'

const Buttondowload = () => {
    if(navigator.userAgent.indexOf("Win") == 13){
        return(
            <button><img src='win.png'></img>Baixar para o Windows</button>
        )
    }else if(navigator.userAgent.indexOf("Mac") == 13){
        return(
            <button><img src='mac.png'></img>Baixar para o MacOS</button>
        )
    }else if(navigator.userAgent.indexOf("Linux")){
        return(
            <button><img src='linux.png'></img>Baixar para o Linux</button>
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
                    <img src='battlenet.png'></img>
                    <h4>Baixe agora o battle.net</h4>
                    <ul>
                        <li><img src='footerli1.svg'></img>Seus jogos em um só lugar</li>
                        <li><img src='footerli2.svg'></img>Conecte-se aos seus amigos</li>
                        <li><img src='footerli3.svg'></img>Compre jogos e itens digitais</li>
                    </ul>
                    <Buttondowload></Buttondowload>
                    <div className='mobiledescription'>
                        <img src='movel.svg'></img>
                        <p>Também disponível como <a href=''>aplicativo móvel</a></p>
                    </div>
                </div>
                <div className='images'>
                    <img src='footerimg1.png'></img>
                    <img src='footerimg2.png' className='two'></img>
                </div>
            </div>
        </footer>
    )
} 