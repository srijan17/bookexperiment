import { Box, Grid, Typography } from "@mui/material";
import { generateRandomColor } from "../../utils";
import CoverImage  from './mountain.jpeg'
const FrontPage = () => {
    const backgroundImage =`url(${CoverImage})` // Replace with your image path

    return (
        <Box
            sx={{
            backgroundImage: backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            padding: 4,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}
        >
            <Typography variant="h2" gutterBottom>
            Front Page
            </Typography>
            <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 2, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Article 1
                </Typography>
                <img src="path/to/article1-image.jpg" alt="Article 1" style={{ width: '100%', borderRadius: 2 }} />
                <Typography variant="body1" paragraph>
                    Segment 1 of Article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Typography>
                <Typography variant="body1" paragraph>
                    Segment 2 of Article 1. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 2, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Article 2
                </Typography>
                <img src="path/to/article2-image.jpg" alt="Article 2" style={{ width: '100%', borderRadius: 2 }} />
                <Typography variant="body1" paragraph>
                    Segment 1 of Article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Typography>
                <Typography variant="body1" paragraph>
                    Segment 2 of Article 2. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                </Typography>
                </Box>
            </Grid>
            </Grid>
        </Box>
    );
};

export default FrontPage;