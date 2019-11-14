import React from 'react';
import Home from './components/Home';
import GameIntro from './components/GameIntro';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className='container mt-5 py-5'>
        <div className="row">
            <BrowserRouter>
              <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/intro' component={GameIntro} />
              </Switch>
            </BrowserRouter>
        </div>
    </div>
  )
}

export default App;