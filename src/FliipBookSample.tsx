import React from 'react';
import PageFlip from 'react-pageflip';
import { Box, Typography } from '@mui/material';

const FlipBookSample: React.FC = () => {
  // Define a set of colors for each page
  const colors = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFF9C4', '#D1C4E9'];

  return (
    <PageFlip width={400} height={500} className="flipbook"  style={{ width: "300px", }} startPage={0} size={'fixed'} minWidth={300} maxWidth={0} minHeight={0} maxHeight={0} drawShadow={true} flippingTime={1000} usePortrait={true} startZIndex={0} autoSize={false} maxShadowOpacity={1} showCover={false} mobileScrollSupport={true} clickEventForward={false} useMouseEvents={true} swipeDistance={0.5} showPageCorners={true} disableFlipByClick={true} >
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
