import React, {useState,Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Game from './Game';


const Home = ({history}) => {
    const [time, setTime] = useState(0);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setTime(e.target.value);
    }

    const handleClick = () => {
        setShow(!show);
    }
    return (
    <Fragment>
       { !show && <div className="col-md-6 offset-md-3">
            <form>
                <div className="form-group">
                    <label>Select your category</label>
                    <select className="form-control">
                        <option>choose category</option>
                        <option>Family</option>
                        <option>Job</option>
                        <option>School</option>
                        <option>Market</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Select the game time</label>
                    <select className="form-control" onChange={handleChange}>
                        <option>choose time</option>
                        <option value='5000'>5 second</option>
                        <option value='10000'>10 second</option>
                        <option value='15000'>15 second</option>
                        <option value='20000'>20 second</option>
                        <option value='25000'>25 second</option>
                        <option value='30000'>30 second</option>
                    </select>
                </div>
                <button to='/game' onClick={() => handleClick()} className="btn btn-dark btn-lg btn-block mt-5">Start</button>
            </form>
        </div>}
        { show && <Game time={time} /> }
        </Fragment>
    )
}
export default withRouter(Home);