import { useEffect, useState } from 'react';
import './jogosexclusivo.scss'

interface Games {
    image: string;
    logo: string;
    name: string;
    category: string;
}

const Games = (props: Games) => {
    return (
            <div className="game">
                <div className='bggame' style={{backgroundImage: "url(" + props.image + ")"}}>
                    <img src={props.logo} className='logo' alt='loading or error'></img>
                    <div className='effect'></div>
                </div>
                <p className="name">{props.name}</p>
                <p className="description">{props.category}</p>
            </div>
    )
}


export const Jogosexclusivo = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('https://api-brchallenges.vercel.app/api/blizzard/games', {
        method: "GET"
        }).then((response) => response.json())
        .then(data => setGames(data))
    }, [])


    return (
        <section className='jogosexclusivos'>
            <div className='center'>
                <div className='header'>
                    <div className='title'>
                        <p className='games'>GAMES</p>
                    </div>
                    <div className='infos'>
                        <h4>Jogos exclusivos</h4>
                        <div className='logos'>
                            <img src='battle.svg' alt='loading or error'></img>
                            <img src='nitendo.svg' alt='loading or error'></img>
                            <img src='xbox.svg' alt='loading or error'></img>
                            <img src='ps.svg' alt='loading or error'></img>
                        </div>
                        <p className='allgames'><img src='verjogos.svg' alt='loading or error'></img>Ver todos jogos</p>
                    </div>
                </div>
                <div className='listgames'>
                    {games.map((game: Games)=> 
                        <Games image={game.image} logo={game.logo} name={game.name} category={game.category} key={Math.random()}></Games>
                    )}
                    <div className="moregame">
                        <img src='logo.png' className='logo' alt='loading or error'></img>
                        <div className='verjogosg'>
                            <img src='verjogosg.svg' alt='loading or error'></img>
                            <p>Ver todos jogos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}