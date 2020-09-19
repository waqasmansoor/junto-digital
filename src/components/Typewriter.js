import React from 'react';
import Typing from 'react-typing-animation';
import "../components/Typewriter.css"

export default function Typewriter(){
    var dataText=["outrank the competition.","create badass content.","generate more leads.",
                    "look sexy online.","close more deals.","grow your business.",
                    "optimize conversions."," "]
    
    return(
        <div className="typewriter_container">
          <h1><span className="static_title">We're here to help you</span>
          </h1>
          <h1>
              <Typing loop={true} speed={25}>
                <Typing.Reset count={1}/>
                <span>{dataText[0]}</span>
                <Typing.Delay ms={2500} />
                <Typing.Backspace count={dataText[0].length+1} />
                
                <span>{dataText[1]}</span>
                <Typing.Delay ms={2500} />
                <Typing.Backspace count={dataText[1].length+1} />
                
                <span>{dataText[2]}</span>
                <Typing.Delay ms={2500} />
                <Typing.Backspace count={dataText[2].length+1} />
                
                <span>{dataText[3]}</span>
                <Typing.Delay ms={2500} />
                <Typing.Backspace count={dataText[3].length+1} />
                
                <span>{dataText[4]}</span>
                <Typing.Delay ms={2500} />
                <Typing.Backspace count={dataText[4].length+1} />
                
                <span>{dataText[5]}</span>
                <Typing.Delay ms={2500} />
                <Typing.Backspace count={dataText[5].length+1} />
                
                <span>{dataText[6]}</span>
                <Typing.Delay ms={2500} />
                <Typing.Backspace count={dataText[6].length+1} />
                
                <span>{dataText[7]}</span>
                <Typing.Delay ms={2500} />
                <Typing.Backspace count={dataText[7].length+1} />
                
              </Typing>
          </h1>
          

          
          
        </div>
    
    
    )
}


