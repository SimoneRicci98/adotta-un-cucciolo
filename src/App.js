import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Grid, Collapse, CardActions } from '@mui/material';
import './App.css';
import Overview from './pages/Overview';

function App() {
  const [cucciolo, setCucciolo] = useState(undefined)
  const [expanded, setExpanded] = useState(false);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = params.get('cucciolo');
    setCucciolo(c)
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='root'>
      <AppBar position="static" style={{ backgroundColor: '#FFA500' }}>
        <Toolbar>
          <Typography variant="h6">Adotta un cucciolotto!</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={3} className='cardContainer'>
          <Grid item xs={12}>
            <Card style={{ width: "100%", margin: "0 auto" }} onClick={handleExpandClick}>
              <CardContent>
                <Typography variant="h5" component="h2" style={{ color: "rgba(0, 0, 0, 0.87)", padding: "5px 0" }}>
                  Cuccioli nati il 29 gennaio, futura taglia media (20-25kg), disponibili per l'adozione da metà aprile. Verranno dati microchippati, sverminati e con il primo vaccino.
                </Typography>
                <Typography variant="h6" component="h4" style={{ color: "#ffa500", padding: "5px 0" }}>
                  Se vuoi avere maggiori informazioni su un cucciolo specifico clicca sulla sua descrizione o sulla sua foto se vuoi vederne altre!
                </Typography>
                <CardActions disableSpacing onClick={handleExpandClick} style={{ backgroundColor: "rgba(255, 165, 0, 0.1)", borderRadius: "20px", cursor: "pointer" }}>
                  <Typography style={{ margin: "0 auto", }}>Mostra di {expanded ? "meno" : "più!"}</Typography>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography style={{ color: "rgba(0, 0, 0, 0.87)", padding: "5px 0" }}>
                      Crescendo in un ambiente casalingo, i cuccioli si sono abituati alle persone e ai rumori tipici della vita quotidiana, come l'aspirapolvere che ronza e la televisione che mormora in sottofondo.
                    </Typography>
                    <Typography style={{ color: "rgba(0, 0, 0, 0.87)", padding: "5px 0" }}>
                      Con il coinvolgimento del nostro altro cane (amorevolmente chiamato lo zio Tony) e della loro bravissima mamma, stanno crescendo imparando le interazioni e il rispetto verso gli altri cani. Osservandoli interagire, si può percepire quanto i due membri più grandi della famiglia siano importanti per loro.
                    </Typography >
                    <Typography style={{ color: "rgba(0, 0, 0, 0.87)", padding: "5px 0" }}>
                      E non c'è cosa che entusiasmi di più i cuccioli che l'idea di esplorare gli spazi aperti! Con l'arrivo delle belle giornate avranno la possibilità di scoprire gli spazi esterni (nel nostro giardino) in totale sicurezza.
                    </Typography>
                    <Typography style={{ color: "rgba(0, 0, 0, 0.87)", padding: "5px 0" }}>
                      La prima visita veterinaria al CVT di Rivoli effettuata il 07/03 ha confermato che sono tutti in ottima salute! Non vedono l'ora di trovare una casa dove poter portare ancora più gioia e amore, e siamo sicuri che chiunque li adotti avrà la fortuna di accogliere una parte speciale della famiglia.
                    </Typography>
                  </CardContent>
                </Collapse>
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