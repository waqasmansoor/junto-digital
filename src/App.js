import React from 'react';
import NavBar from "./components/NavBar";
import Typewriter from './components/Typewriter';
import Video from './components/Video';


import './App.css';

function App() {
  return (
    <div className="container">
         <NavBar/>
        
      
          <Video/>
          
      <div className="page">
        <span className='page_title'>Hi, we're Junto</span>
        
        <Typewriter/>

        <div className="page_button_and_link">
          <div className="page_button">
            <span>Let's make it happen</span>
          </div>
          <div className="page_link">
            <a href="https://junto.digital/about">How we work</a>
            <div className="link_img">
              <img src="https://junto.digital/wp-content/themes/junto/assets/img/arrow-green.svg" alt=""
                        width='26'
                        height='22'
                        />
            </div>
          </div>
          </div>
      </div>

      
  </div>
  );
}

export default App;
