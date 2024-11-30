import { Box, Grid2, Typography } from "@mui/material";
import { generateRandomColor } from "../../utils";
import PaperBackgroundImage from '../page.jpg'
const FirstPage = () => {
    const backgroundImage = `url(${PaperBackgroundImage})` // Replace with your image path

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
                backgroundColor: "rgba(255,255,255,0.5)",
            }}
        >



        </Box>
    );
};

export default FirstPage;