import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlipBook from './FlipBook';
import HTMLFlipBook from 'react-pageflip';
import FlipBookSample from './FliipBookSample';

function App() {
  const pages = [
    <div style={{ background: "red", height: "300px", width: "100px" }}><h1>Cover Page</h1></div>, <div style={{ background: "blue", height: "300px", width: "100px" }}><p>Table of Contents1 </p></div>,
    <div style={{ background: "blue", height: "300px", width: "100px" }}><h1>page2</h1></div>, <div style={{ background: "yellow", height: "300px", width: "100px" }}><p>Table of Contents2</p></div>,
    <div style={{ background: "green", height: "300px", width: "100px" }}><h1> Page3</h1></div>, <div style={{ background: "red", height: "300px", width: "100px" }}><p>Table of Contents3</p></div>
    // Add more pages as needed
  ];


  return (

    <div className="flipbook-container">
    <FlipBookSample />
  </div>

    // <HTMLFlipBook width={300} height={500} style={{ width: "300px", }} className={''} startPage={0} size={'fixed'} minWidth={300} maxWidth={0} minHeight={0} maxHeight={0} drawShadow={true} flippingTime={1000} usePortrait={false} startZIndex={0} autoSize={false} maxShadowOpacity={1} showCover={false} mobileScrollSupport={true} clickEventForward={false} useMouseEvents={true} swipeDistance={1} showPageCorners={false} disableFlipByClick={false} >
    //   {pages}
    // </HTMLFlipBook>
  );
}

export default App;
