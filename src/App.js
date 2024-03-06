import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import './App.css';
import Overview from './pages/Overview';

function App() {
  const [cucciolo, setCucciolo] = useState(undefined)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = params.get('cucciolo');
    setCucciolo(c)
  }, []);

  return (
    <div className='root'>
      <AppBar position="static" style={{ backgroundColor: '#FFA500' }}>
        <Toolbar>
          <Typography variant="h6">Adotta un cucciolotto!</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{marginTop:"20px"}}>
        <Grid container spacing={3} className='cardContainer'>
          <Grid item xs={12}>
            <Card style={{ width: "100%", margin: "0 auto" }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Cuccioli nati il 29 gennaio, disponibili per l'adozione da inizio aprile circa. Verranno dati microchippati, sverminati e con il primo vaccino.
                  <br />(Cliccare sulla foto per leggere la descrizione)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Overview cucciolo={cucciolo} />
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
