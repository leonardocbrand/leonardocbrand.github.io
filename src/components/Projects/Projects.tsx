import { useContext } from 'react';

import { Stack } from '@mui/material';

import CardsGrid from './components/CardsGrid';

import RefContext from '../../contexts/RefContext';

import Reveal from '../Reveal';
import SectionTitle from '../SectionTitle';

function Projects() {
  const { projectsRef } = useContext(RefContext);

  return (
    <Stack 
      ref={projectsRef}
      pt={11}
      component="section" 
      display="flex" 
      sx={{ minHeight: '100vh' }} 
      mt={ { xs: 5, md: 0 } } 
      gap={3}
    >
      <Reveal>
        <SectionTitle>
          Projetos
        </SectionTitle>
      </Reveal>
      <CardsGrid />
    </Stack>
  );
}

export default Projects;
