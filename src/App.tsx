import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FlipBook from './FlipBook';
import HTMLFlipBook from 'react-pageflip';
import FlipBookSample from './FliipBookSample';

function App() {
  
  const maxWidth = window.innerWidth;
  const desktopAspectRatio = 1.2;
  const mobileAspectRatio = 1.5;
  const deskTopWidthDivider = 0.3;
  const mobileWidthDivider = 0.8;
  // const bookWidth = maxWidth * 0.3;
  // const bookHeight = bookWidth * aspectRatio;


  
  const [paddingLeft,setPaddingLeft] = useState(0);
  const [isMobile,setIsMobile] = useState<boolean|null>(null);
  const [paddingRight,setPaddingRight] = useState(0);
  const [bookWidth,setBookWidth] = useState(maxWidth * deskTopWidthDivider);
  const [bookHeight,setBookHeight] = useState(bookWidth * desktopAspectRatio);

  const adjustPadding=(isMobile:boolean|null,event:{data:number})=>{
    if(!isMobile)
    {if(event.data==9){
      setPaddingLeft(bookWidth);
      setPaddingRight(0);
    }
    else if(event.data==0){
      setPaddingLeft(0);
      setPaddingRight(bookWidth);
    }
    else{
      setPaddingLeft(0);
      setPaddingRight(0);
    }}
    else{
      setPaddingLeft(0);
      setPaddingRight(0);
    }
    console.log("adjusting padding",event.data,paddingLeft, isMobile);
    
  }

  const adjustSize=(isMobile:boolean|null)=>{
    if(!isMobile){
      const calcWidth = maxWidth*deskTopWidthDivider
      const calcHeight = calcWidth*desktopAspectRatio

      setBookWidth(calcWidth);
      setBookHeight(calcHeight);
    }
    else if(isMobile){
      const calcWidth = maxWidth*mobileWidthDivider
      const calcHeight = calcWidth*mobileAspectRatio

      setBookWidth(calcWidth);
      setBookHeight(calcHeight);
      
    }
  }
  
  const checkIfMobile = () => {
    return window.innerWidth < 600;
  };
  useEffect(() => {
    setIsMobile(checkIfMobile());
    adjustSize(isMobile);
    adjustPadding(isMobile, { data: 0 });

    const handleResize = () => {
      
      setIsMobile(checkIfMobile());
      adjustSize(isMobile);
      adjustPadding(isMobile, { data: 0 });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  
  const pages = [
    <div style={{ background: "red", height: "300px", width: "100px" }}><h1>Cover Page</h1></div>, <div style={{ background: "blue", height: "300px", width: "100px" }}><p>Table of Contents1 </p></div>,
    <div style={{ background: "blue", height: "300px", width: "100px" }}><h1>page2</h1></div>, <div style={{ background: "yellow", height: "300px", width: "100px" }}><p>Table of Contents2</p></div>,
    <div style={{ background: "green", height: "300px", width: "100px" }}><h1> Page3</h1></div>, <div style={{ background: "red", height: "300px", width: "100px" }}><p>Table of Contents3</p></div>
    // Add more pages as needed
  ];


  return (

    <div className="flipbook-container">
      <div style={{ paddingLeft: paddingLeft, paddingRight: paddingRight, transition: 'padding 0.5s ease' }}>

        {isMobile!=null && <FlipBookSample adjustPadding={adjustPadding} bookHeight={bookHeight} bookWidth={bookWidth} isMobile={isMobile} />}
       
      </div>

     
  </div>

   
  );
}

export default App;
