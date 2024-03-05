import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Grid, Link, IconButton } from '@mui/material';
import './App.css';
import Overview from './pages/Overview';
import Details from './pages/Details';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function App() {

  const [dog, setDog] = useState(undefined);

  return (
    <div className='root'>
      <AppBar position="static" style={{ backgroundColor: '#FFA500' }}>
        <Toolbar>
          {
            dog !== undefined &&
            <IconButton onClick={() => { setDog(undefined); }} size='large'>
              <ArrowBackIcon />
            </IconButton>
          }
          <Typography variant="h6">Adotta un cucciolotto!</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3} className='cardContainer'>
          <Grid item xs={12}>
            <Card style={{ width: "100%", margin: "auto", marginTop: "20px" }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Cuccioli nati il 29 gennaio, disponibili per l'adozione da inizio aprile circa. Verranno dati microchippati, sverminati e con il primo vaccino.
                  <br />(Cliccare sulla foto per leggere la descrizione)
                </Typography>
                <Typography variant="body2" style={{ color: "" }}>

                </Typography>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Overview setDog={setDog} />
      <footer className='footer'>
        <Container>
          <Typography variant="body2">
            Se sei interessato ad adottare un cucciolo, scrivi su whatsapp:
          </Typography>
          <Typography variant="body2">
            Simone <a href='https://wa.me/3931413123'>3931413123</a>
          </Typography>
          <Typography variant="body2">
            Cristina <a href='https://wa.me/3403741183'>3403741183</a>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default App;
