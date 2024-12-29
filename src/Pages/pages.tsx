import { Box, Typography } from "@mui/material";
import { generateRandomColor } from "../utils";
import FrontPage from "./FrontPageImg/FrontPage";
// import FrontPage from "./FrontPage copy/FrontPage";
import FirstPage from "./FirstPage/FirstPage";
import PageBackground from "./page.jpg";
import first from '../main.png'
import second from '../second.png'
import third from '../third.png'
import fourth from '../fourth.png'
const Pages = () => {
  const colors = Array.from({ length: 10 }, generateRandomColor);

  const images = [first, second, third, fourth]
  const pages = colors.map((color, index) => (
    <Box
      key={index}
      sx={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
    </Box>
  ))
  // FrontPage({}), FirstPage(),
  return [...pages]
}

export default Pages