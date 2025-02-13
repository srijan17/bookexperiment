import { Box, Typography } from "@mui/material";
import { generateRandomColor } from "../utils";
import first from '../FINAL/small/MAIN.png'
import groom from '../FINAL/small/Groom.png'
import bride from '../FINAL/small/Bride.png'
import third from '../FINAL/small/Timeline.png'
import fourth from '../FINAL/small/Last.png'
import shadi from '../FINAL/small/Schedule.png'
import reception from '../FINAL/small/Reception.png'
import mehendi from '../FINAL/small/Sangeet.png'
import haldi from '../FINAL/small/Haldi.png'
import lagan from '../FINAL/small/Lagan.png'


import wedBride from '../FINAL/Bride/wed.png'
import haldiBride from '../FINAL/Bride/haldi.png'
import mehandiBride from '../FINAL/Bride/mehandi.png'
import FormPage from "./form";
import LinkPage from "./Link";

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
    if(props.type==999952)
      props.type=59 * 61 * 67 * 71 * 73
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
    images = [first, wedBride,haldiBride,mehandiBride,fourth]

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
  // if (props.side.toLowerCase() == "groom") {
  return [...pages,LinkPage({...props})]
// }
// else{
  // return pages
// }
}

export default Pages