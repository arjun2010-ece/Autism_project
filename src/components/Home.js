import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="col-md-6 offset-md-3">
            <form>
                <div class="form-group">
                    <label>Select your category</label>
                    <select class="form-control">
                        <option>choose category</option>
                        <option>Family</option>
                        <option>Job</option>
                        <option>School</option>
                        <option>Market</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Select the game time</label>
                    <select class="form-control">
                        <option>choose time</option>
                        <option>5 second</option>
                        <option>10 second</option>
                        <option>15 second</option>
                        <option>20 second</option>
                        <option>25 second</option>
                        <option>30 second</option>
                    </select>
                </div>
                <Link to='/intro' class="btn btn-dark btn-lg btn-block mt-5">Start</Link>
            </form>
        </div>
    )
}
export default Home;