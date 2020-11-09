import React from 'react';
import logo from './logo.svg';
import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import myvideo from "./myvideo.mp4"

function App() {
  return (
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
    <h1 className="title red">Yassine Seltene</h1>
    <p>
    <img src={imageInSrc} />
    </p>
    <img src="/imageInPublic.jpg" />
   
   <video width="320" height="240" controls>
    <source src={myvideo} type="video/mp4" />
   </video>
   
   </div>
  );
}

export default App;
