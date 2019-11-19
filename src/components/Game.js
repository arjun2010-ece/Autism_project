import React,{useState} from 'react';
import {gdatas} from './gamedata';
import GameIntro from './GameIntro';
import GameLevel from './GameLevel';

const Game = ({time}) => {
    const [index, setIndex] = useState(0);
    // const [level, setLevel] = useState(0);
    const [showIntro, setShowIntro] = useState(true);


    const toggleIntro = () => {
        setShowIntro(!showIntro);
    }
    if(index >= gdatas.length){
        return <h2>Nothing to display...</h2>
    }
    return (
        <div>
            {showIntro  && <GameIntro gdata={gdatas[index]}   toggleIntro={toggleIntro} time={parseInt(time)} />}
            {!showIntro  && <GameLevel gdata={gdatas[index]}  time={time} gdatas={gdatas}
                    dtaLength={gdatas.length}  setShowIntro={setShowIntro} setIndex={setIndex} index={index}
                    toggleIntro={toggleIntro} />}
        </div>
    )
}
export default Game;