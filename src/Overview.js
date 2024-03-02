
import React from 'react';
import { Typography, Container, Card, CardContent, Grid } from '@mui/material';
import './App.css';

import orso from './images/Orso/Orso.jpeg';
import bimba from './images/Bimba/Bimba.jpeg';
import coco from './images/Coco/Coco.jpeg';
import rio from './images/Rio/Rio.jpeg';
import mamma from './images/Mamma/Mamma.jpeg';
import papa from './images/Papa/Papa.jpeg';

const dogs = [
    {
      name: 'Orso',
      image: orso
    },
    {
      name: 'Bimba',
      image: bimba,
    },
    {
      name: 'Coco',
      image: coco,
    },
    {
      name: 'Rio',
      image: rio,
    },
    {
      name: 'Mamma',
      image: mamma,
    },
    {
      name: 'Papa',
      image: papa,
    },
  ];
const Overview = (props) => {
    const {setDog} = props;
    return<>
          <Container>
        <Grid container spacing={3} className='cardContainer'>
          {dogs.map((dog, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className='card' onClick={()=>{setDog(dog.name); console.log(dog)}} hoverable>
                <CardContent>
                  <img src={dog.image} alt={dog.name} style={{width : "100%", height: "100%"}} />
                  <Typography gutterBottom variant="h5" component="h2">
                    {dog.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
}

export default Overview;