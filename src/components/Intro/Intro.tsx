import { Box, Button, Stack, Typography } from '@mui/material';

import Lottie from 'lottie-react';

import animationData from '../../assets/animation.json';
import CurriculoPDF from '../../assets/curriculo.pdf';
import Reveal from '../Reveal';

import CircleSpan from './styles/CircleSpan';

function Intro() {
  return (
    <Stack 
      component="section"
      direction={{ xs: 'column', md: 'row' }}
      alignItems="center"
      sx={{ minHeight: '100vh' }}
      mt={{ xs: '15vh', md: 0 }}
      spacing={{ xs: 6, md: 8 }}
    >
      <Reveal>
        <Stack component="section" spacing={2}>
          <Typography
            variant='h1'
            fontWeight={ 900 }
            fontSize={ { xs: '2.7rem', md: '3.6rem', lg: '4rem' } }
          >
            Oi, eu sou Leo
            <CircleSpan />
          </Typography>
          <Typography
            variant='h2'
            fontWeight={ 200 }
            fontSize={ { xs: '1.4rem', md: '1.8 rem', lg: '2 rem', xl: '2.2rem' } }
            color="#ebecf3"
          >
            <span style={{ color: '#0aff9d', fontWeight: '700' }}>Desenvolvedor Web Fullstack</span>
            {' '}
            e Engenheiro Civil
          </Typography>
          <Button
            LinkComponent={ 'a' }
            href={CurriculoPDF}
            download="leonardo-brandao-curriculo.pdf"
            variant='contained' 
            color="primary" 
            sx={ { width: 140, p: 1, fontWeight: '400', textTransform: 'capitalize', fontSize: '1.1rem'  } }>
            Currículo
          </Button>
        </Stack>
      </Reveal> 
      <Reveal>
        <Box width={ { xs: 300, md: 330 } }>
          <Lottie
            animationData={ animationData }
          >
          </Lottie>
        </Box>
      </Reveal>
    </Stack>
  );
}

export default Intro;
