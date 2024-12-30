import { Box } from '@mui/material';
import React from 'react';
import background from '../background.png'
import './form.css';

const FormPage: React.FC = () => {

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
            <iframe
                className="custom-scrollbar"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdetw0-WTN0so_lKtehDvPaU6JHBkA5wCyL1yHbeBAJszjcog/viewform?embedded=true"
                width="80%"
                height="80%"
                style={{
                    overflow: "scroll",
                    marginTop: "10%",
                    marginLeft: "10%",
                }}
            >Loading…</iframe>
        </Box>
    );
}

export default FormPage;