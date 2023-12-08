import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import PublicIcon from '@mui/icons-material/Public';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
  {
    title: "le changement climatique c'est qoui ?   ",
    description: "Occupant une part de plus en plus importante au sein des préoccupations mondiales, le changement climatique est le résultat de l'influence des gaz à effet de serre produits par les activités humaines sur le climat de la Terre. Certains de ses impacts sont déjà visibles tandis que ceux à plus long terme sont anticipables grâce aux modèles de prévisions de climat développés par les scientifiques.",
    image: 'https://images.unsplash.com/photo-1570095378004-ce65d6c2d5bb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "le climat de la Terre",
    description: " Selon l’Organisation météorologique mondiale (OMM), le climat correspond aux conditions météorologiques et atmosphériques moyennes observées à un endroit donné (température, précipitations, ensoleillement, humidité, etc.) et calculées à partir d’observations d’au moins 30 ans. Les climats terrestres sont variés (équatorial, tropical, tempéré, polaire, désertique, etc.).",
    image: 'https://images.unsplash.com/photo-1465917566611-efba2904dd8a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: "L'effet de serre",
    description: "L'effet de serre se produit lorsque les rayons du soleil atteignent la Terre. Une partie est absorbée, réchauffant les compartiments terrestres, tandis qu'une autre partie est réfléchie. En raison de la forme sphérique de la Terre, certaines zones, comme l'équateur, reçoivent plus de rayons solaires que d'autres, formant ainsi les différents climats terrestres.",
    image: 'https://images.unsplash.com/photo-1624324378932-68e20f332982?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: " Le déséquilibre climatique",
    description: " Le climat terrestre varie naturellement sur différentes échelles temporelles, allant de l'intra-saisonnier à l'alternance de périodes glaciaires et interglaciaires sur des dizaines de milliers d'années. Cependant, depuis le XXe siècle, les activités humaines ont entraîné une modification rapide et anormale du climat, principalement due à l'augmentation des gaz à effet de serre depuis la révolution industrielle. Ce phénomène, appelé réchauffement climatique, se traduit par une augmentation des températures à la surface du globe.",
      image: 'https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  
  
];

const defaultTheme = createTheme();

export default function Web() {
  const scrollToCards = () => {
    const cardsSection = document.getElementById('cards');
    cardsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz');
    quizSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PublicIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            climate.talk
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              climate change infos
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Bienvenue sur notre site dédié au changement climatique. Nous vous fournissons des informations précises sur les causes et les impacts du changement climatique, tout en démystifiant les idées fausses. Explorez nos ressources pour une compréhension éclairée et des actions concrètes en faveur d'un avenir durable.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={scrollToCards}>
                Découvrir le climat.
              </Button>
              <Button variant="outlined" onClick={scrollToQuiz}>
                Essayez notre quiz.
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md" id="cards">
          <Grid container spacing={4} maxWidth="lg">
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Typography
          variant="h4"
          sx={{ width: '50%' }}
          position={'relative'}
          ml="350px"
        
        >
          idées fausses courantes sur le changement climatique et leurs corrections
        </Typography>
        
        <Grid item xs={10} md={4}>
          
            <Box bgcolor="red" p={2} color="white" maxWidth="md" ml="310px">
              Le climat de la Terre a toujours été constant.
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="lightgreen" p={2} color="white" maxWidth="md" ml="310px">
              Correction : Le climat de la Terre a connu des variations naturelles, mais les changements actuels sont largement influencés par les activités humaines.
            </Box>
          </Grid>    
          <Grid item xs={12} md={6}>
            <Box bgcolor="red" p={2} color="white" maxWidth="md" ml="310px">
              Le climat de la Terre a toujours été constant.
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="lightgreen" p={2} color="white" maxWidth="md" ml="310px">
              Correction : Le climat de la Terre a connu des variations naturelles, mais les changements actuels sont largement influencés par les activités humaines.
            </Box>
          </Grid>   <Grid item xs={12} md={6}>
            <Box bgcolor="red" p={2} color="white" maxWidth="md" ml="310px">
              Le climat de la Terre a toujours été constant.
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="lightgreen" p={2} color="white" maxWidth="md" ml="310px">
              Correction : Le climat de la Terre a connu des variations naturelles, mais les changements actuels sont largement influencés par les activités humaines.
            </Box>
          </Grid>   <Grid item xs={12} md={6}>
            <Box bgcolor="red" p={2} color="white" maxWidth="md" ml="310px">
              Le climat de la Terre a toujours été constant.
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="lightgreen" p={2} color="white" maxWidth="md" ml="310px">
              Correction : Le climat de la Terre a connu des variations naturelles, mais les changements actuels sont largement influencés par les activités humaines.
            </Box>
          </Grid> 
          <div id="quiz"></div>
        {/* ... your quiz content ... */}
      </main>
    </ThemeProvider>
  );
}
