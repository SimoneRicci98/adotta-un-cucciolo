
import React from 'react';
import { Container, Grid } from '@mui/material';
import '../App.css';
import StyledCard from '../components/StyledCard';
import orso from '../images/Orso/Orso.jpeg';
import bimba from '../images/Bimba/Bimba.jpeg';
import coco from '../images/Coco/Coco.jpeg';
import rio from '../images/Rio/Rio.jpeg';
import mamma from '../images/Mamma/Mamma.jpeg';
import papa from '../images/Papa/Papa.jpeg';

const Overview = (props) => {
  const { cucciolo } = props;
  const dogs =
    [
      {
        name: 'Orso',
        gender: 'm',
        image: orso,
        short_desc: 'Un piccolo gigante buono',
        pitch_sale: 'Adoro il contatto umano, mi piace passare il tempo con i miei fratellini e farmi una dormita in una bella cuccia comoda',
        description:
          [
            "Orso è un tenero cucciolo con un cuore grande quanto il suo fascino! Nonostante sia il più grande della cucciolata si comporta in maniera tenera e dolce con i suoi fratellini e sorelline.",
            "Adora stare e giocare con la sorellina più piccola di tutti, dimostrandosi un vero gigante buono.",
            "Con la sua piccola testina adornata da una fascia più scura, sembra un piccolo principe in cerca di avventure. Ma la sua vera passione? Gli abbracci! Adora essere preso tra le braccia e coccolato come se non ci fosse un domani.",
            "E se gli offri la mano, preparati a un gesto davvero dolce: Orso potrebbe sorprenderti dandoti la zampa! È come se volesse stringere amicizia in modo così carino e affettuoso.",
          ]
      },
      {
        name: 'Bimba',
        gender: 'f',
        image: bimba,
        short_desc: 'La rubacuori',
        pitch_sale: 'Le mie super guanciotte ti faranno innamorare, vienimi a trovare!',
        description:
          [
            "Bimba è la cucciola più adorabile che tu abbia mai visto! Con le sue guanciotte arancioni, sembra proprio un mix di dolcezza e allegria.",
            "Ma la sua vera passione? Le grattatine sul petto! Basta solo iniziare a coccolarla in quel punto e lei inizia a scodinzolare felice come se fosse in paradiso.",
            "È il tipo di cucciola che non vede l'ora di fare nuove amicizie e di giocare senza sosta. Con il suo sorriso contagioso e il suo atteggiamento spensierato è impossibile non innamorarsi di lei al primo sguardo.",
            "Bimba è la compagna perfetta per portare un po' di allegria e divertimento nella tua vita quotidiana. Non vedrai l'ora di trascorrere ogni istante con lei, condividendo momenti indimenticabili pieni di amore e divertimento!"
          ]
      },
      {
        name: 'Coco',
        gender: 'f',
        image: coco,
        short_desc: 'Giochiamo?!',
        pitch_sale: 'Ogni scusa e momento è buono per giocare, lo facciamo insieme?',
        description:
          [
            "Coco è la cucciola più vivace e adorabile che tu possa immaginare! Il suo pelo riccio e scuro le conferisce un'aria di mistero e fascino, ma non lasciarti ingannare: dietro quell'aspetto c'è una vera birichina!",
            "Questa piccola peste adora giocare senza sosta e non si stanca mai. È come una palla di energia pronta a esplodere in un turbine di divertimento! Basta guardare i suoi occhietti scintillanti e il suo musetto espressivo per capire che ogni momento con Coco sarà un'avventura indimenticabile.",
            "Ma attenzione, perché Coco ha una piccola debolezza: le ciabatte! Le adora talmente tanto che a volte decide di rubarle e nasconderle chissà dove. Nonostante questo piccolo difetto, è impossibile resistere al suo fascino irresistibile.",
            "Con Coco ogni giorno è una festa e non vedrai l'ora di trascorrere ogni momento con lei, ridendo e giocando insieme. È il tipo di cucciola che rende la vita un po' più spensierata e divertente, regalandoti sorrisi e allegria a non finire!"
          ]
      },
      {
        name: 'Rio',
        image: rio,
        short_desc: 'Come il famoso carnevale',
        pitch_sale: 'Sono un piccolo prinicipe della notte e ho già trovato famiglia!',
        gender: 'm',
        description:
          [
            "Rio è il cucciolo più energico di tutti! Con il suo pelo liscio e nero sembra un piccolo dracula.",
            "Ma c'è una cosa che Rio ama fare più di qualsiasi altra: giocare! È sempre pronto a correre, saltare e fare capriole. E non c'è cosa che lo fermi: anche se è ancora piccolo, sta già provando a saltare sul divano!",
            "E quando si tratta di mangiare, Rio non scherza: ha un'appetito da leone! Non c'è ciotola abbastanza grande per saziare la sua fame.",
            "Ma attenzione, perché Rio ha un piccolo lato birichino: adora provare a rubare il cibo dei suoi fratelli!",
            "Nonostante le sue piccole marachelle, è impossibile non innamorarsi di Rio al primo sguardo. È il compagno perfetto per trasformare ogni giorno in una festa, regalandoti sorrisi e allegria a non finire!"
          ]
      },
      {
        name: 'Papà',
        image: papa,
        short_desc: 'Anch\'io cerco casa!',
        pitch_sale: 'Ciao, sono Bruno, un cucciolone classe 2022. Cerco una famiglia dinamica da amare per sempre.',
        gender: 'm',
        description:
          [
            "Bruno è un giovane e allegro cane (classe 2022), dolcissimo, dinamico ed esuberante.",
            "Bruno adora e richiede il contatto umano, infatti la prima volta che lo abbiamo visto nel suo box, al Canile ENPA di Val della Torre, ha iniziato a saltellare e farsi coccolare con entusiasmo!",
            "Nonostante la sua anima spensierata, Bruno cerca qualcosa di più nella vita: una famiglia dinamica da amare. Ecco perché è alla ricerca di una casa dove poter condividere tutto il suo amore e la sua gioia con persone che lo apprezzeranno per quello che è.",
            "Se sei interessato a dare a Bruno la famiglia amorevole che merita, non esitare a contattare il Canile ENPA di Val della Torre per maggiori informazioni."
          ]
      },
      {
        name: 'Mamma',
        image: mamma,
        short_desc: 'Biscotto?',
        pitch_sale: 'Ciao, sono Jetta, arrivo dall\'Ucraina, adoro i biscotti e ho trovato casa da Simone e Cristina.',
        gender: 'f',
        description:
          [
            "Jetta è una mamma straordinaria. Portata via dalla guerra in Ucraina, adesso ha 4,5 anni e ha trovato la sua casa per sempre qui da noi.",
            "Jetta è una taglia media intorno ai 20/25 kg, probabilmente un incrocio con un cane da pastore.",
            "Come madre, Jetta è semplicemente eccezionale. Si prende cura dei suoi cuccioli con dedizione e amore, assicurandosi che crescano felici e sani. La sua calma e la sua pazienza sono un esempio per tutti gli altri genitori a quattro zampe.",
            "Ma non lasciarti ingannare dalla sua aria tranquilla, perché Jetta ha anche un lato goloso! Adora le coccole e le leccornie, e non c'è nulla che la renda più felice di un gustoso bocconcino.",
            "Una delle cose più sorprendenti di Jetta è la sua capacità di imparare in fretta qualsiasi cosa. È come se avesse un'intelligenza straordinaria che le permette di padroneggiare nuovi trucchi e comandi con facilità.",
            "In sintesi, Jetta è molto più di una semplice cagnolina: è un membro prezioso della famiglia, una compagna fedele e un esempio di amore incondizionato. La sua presenza rende ogni giorno un po' più speciale, così come sicuramente i suoi cuccioli."
          ]
      },
    ]

  return <>
    <Container style={{ margin: "20px auto" }}>
      <Grid container spacing={3} className='cardContainer'>
        {dogs.map((dog, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <StyledCard dog={dog} cucciolo={cucciolo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
}

export default Overview;