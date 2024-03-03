import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Grid, Link, IconButton } from '@mui/material';
import './App.css';
import Overview from './Overview';
import orso from './images/Orso/Orso.jpeg';
import bimba from './images/Bimba/Bimba.jpeg';
import coco from './images/Coco/Coco.jpeg';
import rio from './images/Rio/Rio.jpeg';
import mamma from './images/Mamma/Mamma.jpeg';
import papa from './images/Papa/Papa.jpeg';
import Details from './Details';

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
      {
        dog === undefined ?
          <Overview setDog={setDog} />
          :
          <Details dog={dog} />
      }
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
