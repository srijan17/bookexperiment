import { Box, Grid2, Typography } from "@mui/material";
import { generateRandomColor } from "../../utils";
import CoverImage  from './mountain.jpeg'
import PaperBackgroundImage  from '../paper.webp'


const FrontPage: React.FC = () => {
    const date = '21/02/2024';
    const place = "Gurgoan";

    return (
        <Box
            sx={{
                padding: 0,
                backgroundImage: `url(${PaperBackgroundImage})`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
            }}
        >
            {/*heading */}
            <Typography 
                sx={{ 
                    margin: 'auto', 
                    paddingTop: 4, 
                    textAlign: 'center' 
                }} 
                variant="h4" 
                gutterBottom
            >
                Wedding Times
            </Typography>
            {/* black line */}
            <Box
                sx={{
                    height: "5px",
                    backgroundColor: "black",
                    marginY: 0,
                }}
            />
            <Box>
            {/*date and place */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingX: 2,
                }}
            >
                <Typography variant="subtitle1" gutterBottom>
                    {date}
                </Typography>
                <Typography variant="subtitle1" align="right" gutterBottom>
                    {place}
                </Typography>
            </Box>
            </Box>
            {/* black line */}
            <Box
                sx={{
                    height: "5px",
                    backgroundColor: "black",
                    marginY: 0,

                }}
            />
            <Box
                sx={{
                    height: "70vh",
                    margin:'auto',
                    marginY: 4,
                    width:"90%",
                    border: "4px solid black",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    backgroundImage: `url(${CoverImage})`,
                    backgroundSize: "cover",
                }}
            >
                <Typography
                    sx={{
                        position: "absolute",
                        bottom: '10vh',
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        justifyContent: "center",
                   
                    }}
                    variant="h6"
                >
                    Join us on our special day
                </Typography>

                </Box>
            
        </Box>
    );
};

export default FrontPage;