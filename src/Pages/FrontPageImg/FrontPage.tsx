import { Box, Grid2, Typography } from "@mui/material";
import { generateRandomColor } from "../../utils";
import CoverImage from './CardCover.jpeg'
import PaperBackgroundImage from '../paper.webp'


const FrontPage: React.FC = () => {
  const date = '21/02/2024';
  const place = "Gurgoan";

  return (
    <Box
      component="img"
      sx={{
        padding: 0,
        width: '100vw',
        height: '100vh'
      }}
      alt="The house from the offer."
      src={CoverImage}
    />
    // <Box
    //     sx={{
    //         backgroundImage: `url(${CoverImage})`,
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //         width: '100%',
    //         height: '100vh',
    //     }}
    // >

    // </Box>
  );
};

export default FrontPage;