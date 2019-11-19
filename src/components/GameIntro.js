import React,{useEffect} from 'react';

const GameIntro = ({gdata,toggleIntro,time}) => {

    useEffect(() => {
        let id = setTimeout(() => {
            toggleIntro();
        }, time);

        return () => clearTimeout(id); 
    },[]);
    const gameData = gdata.data.map((elm,i) => {
        return (
        <div className="col-md-6" key={i}>
            <div className="card">
                <img src={elm.image} className="card-img-top img-fluid" 
                    alt={elm.word} style={{'width' : '350px' , 'height' : '350px'}} />
                <div className="card-body">
                    <h5 className="card-title mt-3">{elm.word}</h5>
                </div>
            </div>
        </div>
        )
    })
    return (
        <div className="container">
            <h1 className="text-center mb-3">Instruction page</h1>
            <div className="row">
                {gameData }
            </div>
        </div>
        
    )
}
export default GameIntro;