import React, { ReactNode, useRef } from 'react';
import PageFlip from 'react-pageflip';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { generateRandomColor } from './utils';

type BookProps = {
  adjustPadding: (isMobile: boolean, event: { data: number }) => void;
  bookWidth: number;
  bookHeight: number;
  isMobile: boolean;
  pages: ReactNode[]
};

function FlipBookSample(props: BookProps) {
  const book = useRef<{ pageFlip: () => typeof PageFlip | null }>(null);
  const { bookHeight, bookWidth } = props;

  const prevPage = async () => {
    if (book && book.current) {
      const bookRef = book.current as any;
      bookRef.pageFlip().flipPrev('bottom');
    }
  };

  const nextPage = () => {
    if (book && book.current) {
      (book.current as any).pageFlip().flipNext();
    }
  };


  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginY: 'auto' }}>
      <Grid container alignItems="center" justifyContent="center">

        <Grid item>
          <PageFlip
            style={{}}
            width={bookWidth}
            height={bookHeight}
            className="flipbook-page"
            startPage={0}
            size={'fixed'}
            minWidth={bookWidth}
            maxWidth={bookWidth}
            minHeight={bookHeight}
            maxHeight={bookHeight}
            drawShadow={true}
            flippingTime={400}
            usePortrait={props.isMobile}
            startZIndex={0}
            autoSize={false}
            maxShadowOpacity={1}
            showCover={true}
            mobileScrollSupport={props.isMobile}
            clickEventForward={false}
            onFlip={(flipEvent) => props.adjustPadding(props.isMobile, flipEvent)}
            useMouseEvents={true}
            swipeDistance={0.2}
            showPageCorners={true}
            disableFlipByClick={false}

            ref={book}
          >
            {props.pages}
          </PageFlip>
        </Grid>

      </Grid>
      {/* <Grid>
      <Grid item>
          <IconButton onClick={prevPage}>
            <NavigateBeforeRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={nextPage}>
            <NavigateNextRoundedIcon />
          </IconButton>
        </Grid>
      </Grid> */}
    </Box>
  );
}

export default FlipBookSample;
