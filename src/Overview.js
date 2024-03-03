
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
    image: orso,
    description:
      [
        "Orso è un tenero cucciolo di soli un mese di vita, ma con un cuore grande quanto il suo fascino! Nonostante sia il più grande della cucciolata (pesa già 3,3 kg!) si comporta in maniera tenera e dolce con i suoi fratellini e sorelline.",
        "Adora stare e giocare con la sorellina più piccola di tutti, solo 2.2kg, dimostrandosi un vero gigante buono.",
        "Con la sua piccola testina adornata da una fascia più scura, sembra un piccolo principe in cerca di avventure. Ma la sua vera passione? Gli abbracci! Adora essere preso tra le braccia e coccolato come se non ci fosse un domani.",
        "E se gli offri la mano, preparati a un gesto davvero dolce: Orso potrebbe sorprenderti dandoti la zampa! È come se volesse stringerti amicizia in modo così carino e affettuoso.",
      ]
  },
  {
    name: 'Bimba',
    image: bimba,
    description:
      [
        "Bimba è la cucciola più adorabile che tu abbia mai visto! Con le sue guanciotte arancioni e il pelo riccio, sembra proprio un mix di dolcezza e allegria.",
        "Ma la sua vera passione? Le grattatine sul petto! Basta solo iniziare a coccolarla in quel punto e lei inizia a scodinzolare felice come se fosse in paradiso.",
        "È il tipo di cucciola che non vede l'ora di fare nuove amicizie e di giocare senza sosta. Con il suo sorriso contagioso e il suo atteggiamento spensierato, è impossibile non innamorarsi di lei al primo sguardo.",
        "Bimba è la compagna perfetta per portare un po' di allegria e divertimento nella tua vita quotidiana. Non vedrai l'ora di trascorrere ogni istante con lei, condividendo momenti indimenticabili pieni di amore e divertimento!"
      ]
  },
  {
    name: 'Coco',
    image: coco,
    description:
      [
        "Coco è la cucciola più vivace e adorabile che tu possa immaginare! Il suo pelo riccio e scuro le conferisce un'aria di mistero e fascino, ma non lasciarti ingannare: dietro quel aspetto c'è una vera peste birichina!",
        "Questa piccola peste adora giocare senza sosta e non si stanca mai. È come una palla di energia pronta a esplodere in un turbine di divertimento! Basta guardare i suoi occhietti scintillanti e il suo musetto espressivo per capire che ogni momento con Coco sarà un'avventura indimenticabile.",
        "Ma attenzione, perché Coco ha una piccola debolezza: le ciabatte! Le adora talmente tanto che a volte decide di rubarle e nasconderle chissà dove. Nonostante questo piccolo difetto, è impossibile resistere al suo fascino irresistibile.",
        "Con Coco ogni giorno è una festa e non vedrai l'ora di trascorrere ogni momento con lei, ridendo e giocando insieme. È il tipo di cucciola che rende la vita un po' più spensierata e divertente, regalandoti sorrisi e allegria a non finire!"
      ]
  },
  {
    name: 'Rio',
    image: rio,
    description:
      [
        "Rio è il cucciolo più vivace di tutti! Con il suo pelo liscio e nero, sembra un piccolo dracula.",
        "Ma c'è una cosa che Rio ama fare più di qualsiasi altra: giocare! È sempre pronto a correre, saltare e fare capriole. E non c'è cosa che lo fermi: anche se è ancora piccolo, sta già provando a saltare sul divano!",
        "E quando si tratta di mangiare, Rio non scherza: ha un'appetito da leone! Non c'è ciotola abbastanza grande per saziare la sua fame insaziabile.",
        "Ma attenzione, perché Rio ha un piccolo lato birichino: adora provare a rubare il cibo dei suoi fratelli!",
        "Nonostante le sue piccole marachelle, è impossibile non innamorarsi di Rio al primo sguardo. È il compagno perfetto per trasformare ogni giorno in una festa, regalandoti sorrisi e allegria a non finire!"
      ]
  },
  {
    name: 'Mamma',
    image: mamma,
    description:
      [
        "Jetta è una mamma straordinaria. Portata via dalla guerra in Ucraina, adesso ha 4,5 anni e ha trovato la sua casa per sempre qui da noi.",
        "Come madre, Jetta è semplicemente eccezionale. Si prende cura dei suoi cuccioli con dedizione e amore, assicurandosi che crescano felici e sani. La sua calma e la sua pazienza sono un esempio per tutti gli altri genitori a quattro zampe.",
        "Ma non lasciarti ingannare dalla sua aria tranquilla, perché Jetta ha anche un lato goloso! Adora le coccole e le leccornie, e non c'è nulla che la renda più felice di un gustoso boccone da gustare.",
        "Una delle cose più sorprendenti di Jetta è la sua capacità di imparare in fretta qualsiasi cosa. È come se avesse un'intelligenza straordinaria che le permette di padroneggiare nuovi trucchi e comandi con facilità.",
        "In sintesi, Jetta è molto più di una semplice cagnolina: è un membro prezioso della famiglia, una compagna fedele e un esempio di amore incondizionato. La sua presenza rende ogni giorno un po' più speciale, così come sicuramente i suoi cuccioli!."
      ]
  },
  {
    name: 'Papa',
    image: papa,
    description:
      [
        "Bruno è un giovane e allegro cane che porta con sé un'energia contagiosa ovunque vada. La prima volta che lo abbiamo visto nel suo box al Canile ENPA di Val della Torre, ha iniziato a saltellare e a muoversi con entusiasmo!",
        "La sua personalità giocosa e vivace è evidente fin dal primo sguardo. Non c'è momento noioso quando Bruno è intorno: è sempre pronto a correre, saltare e giocare con chiunque sia disposto a fargli compagnia.",
        "Nonostante la sua anima spensierata, Bruno cerca qualcosa di più nella vita: una famiglia da amare e proteggere. Ecco perché è alla ricerca di una casa dove poter condividere tutto il suo amore e la sua gioia con persone che lo apprezzeranno per quello che è.",
        "Se sei interessato a dare a Bruno la famiglia amorevole che merita, non esitare a contattare il Canile ENPA di Val della Torre per maggiori informazioni."
      ]
  },
];
const Overview = (props) => {
  const { setDog } = props;
  return <>
    <Container style={{ marginTop: "20px" }}>
      <Grid container spacing={3} className='cardContainer'>
        {dogs.map((dog, index) => (
          <Grid item key={index} xs={12} sm={6} md={index > 3 ? 6 : 3}>
            <Card className='card' onClick={() => { setDog(dog); }} hoverable>
              <CardContent>
                <img src={dog.image} alt={dog.name} style={{ width: "100%", height: "100%" }} />
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