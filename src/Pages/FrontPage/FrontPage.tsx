import { Box, Grid2, Typography } from "@mui/material";
import { generateRandomColor } from "../../utils";
import CoverImage  from './mountain.jpeg'
const FrontPage = () => {
    const backgroundImage =`url(${CoverImage})` // Replace with your image path

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
            }}
        >
            
            <Typography  variant="h5" sx={{ textAlign: "center", padding: "20px" ,color:'black',backgroundColor:'rgba(255,255,255,1)'}}>
               THE WEDDING POST
            </Typography>
            <Box
            sx={{height:'2vh',
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                 flex: 1,
                    display: "flex",
                    flexDirection: "row",

            }}>
            <Grid2 size={4} sx={{ color:'black',justifyContent:'left'}}>kahan</Grid2>
            <Grid2 size={4} sx={{color:'black',justifyContent:'right'}}>kab</Grid2>
            </Box>
            <Box
                sx={{
                    // flex: 1,
                    // display: "flex",
                    // flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    height: '80vh'
                    // backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            >
                <Typography variant="h3" sx={{marginTop:'0vh',color:'purple'}}>
                    Image Heading
                </Typography>
                <Typography sx={{marginTop:'40vh', color:'purple'}} variant="h5">
                    Mid Page Text
                </Typography> 
            </Box>
        </Box>
    );
};

export default FrontPage;