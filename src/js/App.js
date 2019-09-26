import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SideBar from './components/SideBar';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className='main main--bg'>
            <Navbar/>
            <SideBar/>
            <Switch>
              <Route exact path='/' component={Home}/>
            </Switch>
            
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
