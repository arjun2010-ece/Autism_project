import React from 'react';
import {gdatas} from './gamedata';

const GameIntro = () => {
    const gameData = gdatas.map(gd => {
        return gd.data.map((elm, i) =>(
        <div className="card" key={i}>
            <img src={elm.image} className="card-img-top img-fluid" 
                alt={elm.word} style={{'width' : '350px' , 'height' : '350px'}} />
            <div className="card-body">
                <h5 className="card-title mt-3">{elm.word}</h5>
            </div>
        </div>
        ))
    })
    return (
        <div className="col-md-12 border-primary">
            {gameData}
        </div>
    )
}
export default GameIntro;