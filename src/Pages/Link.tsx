import { Box, Typography } from '@mui/material';
import React from 'react';
import background from '../background.png'
import './form.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import { Download } from '@mui/icons-material';

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

const LinkPage= (props:PageProps) => {

    return (
        <Box
            key={1}
            sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}
        >

            <Box width="85%" height="85%" style={{ overflow: "scroll", marginTop: "12%", marginLeft: "10%" , display: "flex", flexDirection: "column",  alignItems: "center"}}>
                <h2>Important links</h2>
                <a href="https://maps.app.goo.gl/9xioPyt11y8hmBUy5" target="_blank" rel="noopener noreferrer">
                    <LocationOnIcon></LocationOnIcon> Shaadi Venue
                </a>
                <br></br>

                {props.type% RECEPTION===0 && <><a href="https://maps.app.goo.gl/Pf8Xc761tuGDawNu7" target="_blank" rel="noopener noreferrer">
                     <LocationOnIcon></LocationOnIcon>  Reception Venue
                </a>
                <br></br>
                </> 

                }


               

                {props.type% LAGAN===0 && <>  <a href="https://maps.app.goo.gl/JYaNvbxJQ2Hsn4wKA" target="_blank" rel="noopener noreferrer">
                      <LocationOnIcon></LocationOnIcon>  Lagan Venue
                </a>
                <br></br>
                </> }


                {props.type% HALDI===0 &&   <><a href="https://maps.app.goo.gl/JYaNvbxJQ2Hsn4wKA" target="_blank" rel="noopener noreferrer">
                     <LocationOnIcon></LocationOnIcon>  Haldi/Sangeet Venue
                </a>

                <br></br>
                </>
                }
                

                <Box mt={4} display="flex">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdetw0-WTN0so_lKtehDvPaU6JHBkA5wCyL1yHbeBAJszjcog/viewform?embedded=true" target="_blank" rel="noopener noreferrer"
                    onClick={(e) => {e.stopPropagation()}}>
                        <EventIcon fontSize="large" />
                        <Typography variant="h5" component="span">RSVP Here</Typography>
                    </a>
                </Box>

                <Box mt={4} display="flex" onClick={(e) => e.stopPropagation()}>
                    <a href="/final.pdf" download>
                        <Download fontSize="large" />
                        <Typography variant="h6" component="span">Invite</Typography>
                    </a>
                </Box>

                
            </Box>

        </Box>
    );
}

export default LinkPage;