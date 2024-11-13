import React, { useState } from 'react';
import PageFlip from 'react-pageflip';
import { Box, Typography } from '@mui/material';

type BookProps = {
  adjustPadding: (isMobile:boolean,event: { data: number }) => void;
  bookWidth:number;
  bookHeight:number;
  isMobile: boolean
};
function FlipBookSample(props:BookProps)  {
  // Define a set of colors for each page
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const {bookHeight,bookWidth} = props

  const colors = Array.from({ length: 10 }, generateRandomColor);
  // const colors = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFF9C4', '#D1C4E9'];
  console.log("joined with ",props.isMobile)

  return (
    <PageFlip width={bookWidth} height={bookHeight}
      className="flipbook-page"
      style={{}}
      startPage={0}
      size={'stretch'}
      minWidth={bookWidth}
      maxWidth={bookWidth}
      minHeight={bookHeight}
      maxHeight={bookHeight}
      drawShadow={true}
      flippingTime={1000}
      usePortrait={props.isMobile} // affects if single page or not
      startZIndex={0}
      autoSize={false}
      maxShadowOpacity={1}
      showCover={true}
      mobileScrollSupport={props.isMobile}
      clickEventForward={false}
      onFlip={(flipEvent)=>props.adjustPadding(props.isMobile,flipEvent)}
      useMouseEvents={true}
      swipeDistance={0.5}
      showPageCorners={true}
      disableFlipByClick={true} >
      {colors.map((color, index) => (
        <Box
          key={index}
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" color="text.primary">
            Page {index + 1}
          </Typography>
        </Box>
      ))}
    </PageFlip>
  );
};

export default FlipBookSample;
