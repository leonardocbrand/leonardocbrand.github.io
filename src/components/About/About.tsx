import { useContext } from 'react';

import { Box, Paper, Stack, Typography } from '@mui/material';

import SocialsBox from './components/SocialsBox';

import RefContext from '../../contexts/RefContext';

import hexagon from '../../assets/hexagon.svg';
import profilepic from '../../assets/profile.png';
import squares from '../../assets/squares.svg';
import Reveal from '../Reveal';
import SectionTitle from '../SectionTitle';

function About() {
  const { aboutRef } = useContext(RefContext);

  return(
    <Stack 
      pt={11} 
      ref={aboutRef} 
      component="section" 
      sx={{ minHeight: '100vh', display: 'flex' }} 
      spacing={{ xs: 2, md: 4 }}
    >
      <Reveal>
        <SectionTitle>
          Sobre
        </SectionTitle>
      </Reveal>
      <Box
        display={{ xs: 'none', md: 'block' }}
        alignSelf="flex-start"
        component="img"
        src={hexagon}
        sx={{ width: '150px', height: '150px', transform: 'rotate(90deg)' }}
        pt={1}
      />
      <Paper
        component={Stack}
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        my={1}
        p={4}
      >
        <Box
          sx={{ width: { xs: '150px', md: '250px' }, mb: { xs: 4, md: 0 } }}
          component="img"
          src={profilepic}
        />
        <Stack>
          <Reveal>
            <Typography paragraph sx={{ textAlign: 'justify ' }}>
                  Me chamo Leonardo, sou engenheiro civil e desenvolvedor web fullstack.
                  Trabalhei por cerca de 3 anos no setor da construção civil, no qual desenvolvi habilidades
                  de planejamento, gerenciamento, comunicação e liderança que aplico em projetos de tecnologia.
                  Essas habilidades me permitem trabalhar em equipe e me adaptar a diferentes ambientes de trabalho.
                  Sou especializado em desenvolvimento web fullstack, com foco em ReactJS, NodeJS e Typescript.
                  Atualmente sou estudante do curso de desenvolvimento web na Trybe e atuo como freelancer.
                  Estou em busca de novas oportunidades para contrubir em projetos desafiadores e que me
                  permitam crescer profissionalmente.
            </Typography>
          </Reveal>
          <Box display="flex" alignItems="center">
            <Reveal>
              <Typography color="#0aff9d">
                  Links ⟶
              </Typography>
            </Reveal>
            <Reveal>
              <SocialsBox />
            </Reveal>
          </Box>
        </Stack>
      </Paper>
      <Box
        alignSelf="flex-end"
        component="img"
        src={squares}
        sx={{ width: { xs: '100px', md: '150px' }, height: { xs: '80px', md: '110px' } }}
      />
    </Stack>
  );
}

export default About;
