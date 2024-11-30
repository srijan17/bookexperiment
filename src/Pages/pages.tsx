import { Box, Typography } from "@mui/material";
import { generateRandomColor } from "../utils";
import FrontPage from "./FrontPageImg/FrontPage";
// import FrontPage from "./FrontPage copy/FrontPage";
import FirstPage from "./FirstPage/FirstPage";
import PageBackground from "./page.jpg";

const Pages = () => {
  const colors = Array.from({ length: 10 }, generateRandomColor);


  const pages = colors.map((color, index) => (
    <Box
      key={index}
      sx={{
        backgroundImage: `url(${PageBackground})`,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Typography variant="h4" color="text.primary">
        Page {index + 1}
      </Typography>
    </Box>
  ))

  return [FrontPage({}), FirstPage(), ...pages]
}

export default Pages