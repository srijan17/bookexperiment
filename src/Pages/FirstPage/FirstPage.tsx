import { Box, Grid2, Typography } from "@mui/material";
import { generateRandomColor } from "../../utils";
import PaperBackgroundImage  from '../paper.webp'
const FirstPage = () => {
    const backgroundImage =`url(${PaperBackgroundImage})` // Replace with your image path

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
            
           
           
        </Box>
    );
};

export default FirstPage;