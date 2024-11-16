import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FlipBookSample from './FliipBookSample';
import Book from './BookEffect/Book';
import { generateRandomColor } from './utils';
import { Box, Typography } from '@mui/material';
import Pages from './Pages/pages';

function App() {

  const maxWidth = window.innerWidth;
  const desktopAspectRatio = 1.2;
  const mobileAspectRatio = 1.5;
  const deskTopWidthDivider = 0.3;
  const mobileWidthDivider = 0.8;
  // const bookWidth = maxWidth * 0.3;
  // const bookHeight = bookWidth * aspectRatio;



  const [paddingLeft, setPaddingLeft] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [paddingRight, setPaddingRight] = useState(0);
  const [bookWidth, setBookWidth] = useState(maxWidth * deskTopWidthDivider);
  const [bookHeight, setBookHeight] = useState(bookWidth * desktopAspectRatio);

  const adjustPadding = (isMobile: boolean | null, event: { data: number }) => {
    if (!isMobile) {
      if (event.data == 9) {
        setPaddingLeft(bookWidth);
        setPaddingRight(0);
      }
      else if (event.data == 0) {
        setPaddingLeft(0);
        setPaddingRight(bookWidth);
      }
      else {
        setPaddingLeft(0);
        setPaddingRight(0);
      }
    }
    else {
      setPaddingLeft(0);
      setPaddingRight(0);
    }
    console.log("adjusting padding", event.data, paddingLeft, isMobile);

  }

  const adjustSize = (isMobile: boolean | null) => {
    if (!isMobile) {
      const calcWidth = maxWidth * deskTopWidthDivider
      const calcHeight = calcWidth * desktopAspectRatio

      setBookWidth(calcWidth);
      setBookHeight(calcHeight);
    }
    else if (isMobile) {
      const calcWidth = maxWidth 
      const calcHeight = calcWidth * mobileAspectRatio

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
  


  return (


    <div style={{ paddingLeft: paddingLeft, paddingRight: paddingRight, transition: 'padding 0.5s ease' }}>

    {isMobile != null && <FlipBookSample pages={Pages()} adjustPadding={adjustPadding} bookHeight={bookHeight} bookWidth={bookWidth} isMobile={isMobile} />}

  </div>

  );
}

export default App;
