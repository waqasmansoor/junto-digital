import React from 'react';
import "../components/Video.css";


export default function Video(){
    return(
        // <div className="bg">
        //   <img src="https://junto.digital/wp-content/uploads/2018/09/hero-home.jpg"
        //   alt=""
        //   />
        //   </div>
        <div className="video">
        <video muted autoPlay preload='true' loop 
        poster="https://junto.digital/wp-content/uploads/2018/09/hero-home.jpg">
          <source src="https://junto.digital/wp-content/uploads/2018/12/junto-digital-hero.webm" 
          type='video/webm;codecs="vp8, vorbis"'/>
          <source src="https://junto.digital/wp-content/uploads/2018/12/junto-digital-hero.mp4" 
          type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'/>
                  </video>
    </div>
    )
}