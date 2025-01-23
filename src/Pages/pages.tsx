import { Box, Typography } from "@mui/material";
import { generateRandomColor } from "../utils";
import FrontPage from "./FrontPageImg/FrontPage";
// import FrontPage from "./FrontPage copy/FrontPage";
import FirstPage from "./FirstPage/FirstPage";
import PageBackground from "./page.jpg";
import first from '../main.png'
import second from '../second.png'
import groom from '../first.png'
import bride from '../bride.png'
import third from '../third.png'
import fourth from '../fourth.png'
import shadi from '../shadi.png'
import reception from '../reception.png'
import mehendi from '../sangeet.png'
import haldi from '../haldi1.png'
import lagan from '../lagan1.png'
import third1 from '../third1.png'
import third2 from '../third2.png'
import FormPage from "./form";

const HALDI = 59;
const MEHENDI = 61;
const LAGAN = 67;
const SHADI = 71;
const RECEPTION = 73;

interface PageProps {
  isMobile: boolean | null;
  side: string;
  type: number;
}
const Pages = (props: PageProps) => {
  const colors = Array.from({ length: 10 }, generateRandomColor);
  let images: String[] = []
  if (props.side.toLowerCase() == "groom") {

    images = [first, groom]
    images.push(third)

    if (props.type % LAGAN == 0) {
      images.push(lagan)
    }
    if (props.type % HALDI == 0) {
      images.push(haldi)
    }
    if (props.type % MEHENDI == 0) {
      images.push(mehendi)
    }

    if (props.type % SHADI == 0) {
      images.push(shadi)
    }
    if (props.type % RECEPTION == 0) {
      images.push(reception)
    }
    images.push(fourth)
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