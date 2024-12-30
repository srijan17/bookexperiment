import { Box, Typography } from "@mui/material";
import { generateRandomColor } from "../utils";
import FrontPage from "./FrontPageImg/FrontPage";
// import FrontPage from "./FrontPage copy/FrontPage";
import FirstPage from "./FirstPage/FirstPage";
import PageBackground from "./page.jpg";
import first from '../main.png'
import second from '../second.png'
import groom from '../groom.png'
import bride from '../bride.png'
import third from '../third.png'
import fourth from '../fourth.png'
import third1 from '../third1.png'
import third2 from '../third2.png'
import FormPage from "./form";

interface PageProps {
  isMobile: boolean | null;
  side: string;
}
const Pages = (props: PageProps) => {
  const colors = Array.from({ length: 10 }, generateRandomColor);
  let images: String[] = []
  if (props.side.toLowerCase() == "groom") {

    images = [first, groom, third, fourth]
  }
  else {
    images = [first, bride, third, fourth]

  }

  const pages = images.map((image, index) => (
    <Box
      key={index}
      sx={{
        backgroundImage: `url(${image})`,
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
  return [...pages, FormPage({})]
}

export default Pages