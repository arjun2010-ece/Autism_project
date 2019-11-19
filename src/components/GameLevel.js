import React, {useState,useEffect} from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import _ from 'lodash';
import "./GameLevel.css";

const GameLevel = ({toggleIntro, setIndex, index, dtaLength, gdata}) => {
    const [data, setData] = useState(gdata.data);
    const [dropText, setDropText] = useState('');
    const [shuffledArray, setShuffledArray] = useState([]);

    useEffect(() => {
        let shuArray = _.shuffle(data);
        setShuffledArray(shuArray);        
    },[])
    const handleClick = () => {
        if(index < dtaLength){
            index = index + 1;
            setIndex(index)
        }
        console.log(index);
        toggleIntro();
    }

    const highlight = ()=>{
        console.log('highlighted...');
    }
    
    const unHighlight = ()=>{
        console.log('unHighlighted....');
        // setDropText('');
    }

    const dropped=(e)=>{
        setDropText("You are correct!");
        setTimeout(() => {
            setDropText("");
        },3000);
        
        let filteredList = data.filter(el => {
            return el.id !== e.dragData.id    
        })
        setData(filteredList)
        console.log('set data');
        console.log(data);
        if(filteredList.length <= 0){
            if(index < dtaLength){
                index = index + 1;
                setIndex(index)
            }
            toggleIntro();
        }
    }

    const onDrop =(e)=>{
        console.log('onDrop');
    }

    return (
        <div>
            <h3 className="text-center">Drag and Drop Game is here.</h3>
            <p>{dropText}</p>
            <div className="container border-primary">
                {
                     shuffledArray.map(elem => (
                            <DragDropContainer key={elem.id} dragData={elem} targetKey={elem.id} onDrop={onDrop} className='dragdropcontainer'>
                              <p className="mr-4">{elem.word}</p> {" "}
                            </DragDropContainer>
                        ))
                }
                <div className="empty-space"></div>

                {
                 data.map(elem => (
                <DropTarget key={elem.id} targetKey={elem.id} onDragEnter={highlight} onDragLeave={unHighlight} onHit={dropped}>
                    <img src={elem.image} alt={elem.word} width="300px" height="200px" className="mr-4" />
                </DropTarget>
                ))
                }

            </div>
            <button onClick={() => handleClick()}>Back to Intro</button>
        </div>
    )
}
export default GameLevel;