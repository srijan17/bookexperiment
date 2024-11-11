import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, Typography, Container, Paper, Grid, Button } from '@mui/material';



function SamplePage() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Sample MUI Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Paper style={{ padding: 16, marginTop: 16 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Sample Page
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper style={{ padding: 16 }}>
                <Typography variant="h6">
                  Section 1
                </Typography>
                <Typography>
                  This is some sample content for section 1.
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: 16 }}>
                  Action 1
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper style={{ padding: 16 }}>
                <Typography variant="h6">
                  Section 2
                </Typography>
                <Typography>
                  This is some sample content for section 2.
                </Typography>
                <Button variant="contained" color="secondary" style={{ marginTop: 16 }}>
                  Action 2
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default SamplePage;

