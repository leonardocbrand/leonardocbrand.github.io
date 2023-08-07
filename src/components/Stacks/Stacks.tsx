import { useContext } from 'react';

import { Box, Stack } from '@mui/material';

import FastMarquee from './components/FastMarquee';
import StackCard from './components/StackCard';

import RefContext from '../../contexts/RefContext';

import hexagon from '../../assets/hexagon.svg';
import squares from '../../assets/squares.svg';
import { stacksList } from '../../data/stacksList';
import Reveal from '../Reveal';
import SectionTitle from '../SectionTitle';

function Stacks() {
  const { stacksRef } = useContext(RefContext);

  return (
    <Stack 
      ref={stacksRef}
      component="section" 
      sx={{ minHeight: '100vh' }} 
      pt={11}
      spacing={{ xs: 2, md: 5 }}
    >
      <Reveal>
        <SectionTitle>
          Tecnologias
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
      <Reveal>
        <FastMarquee>
          {stacksList.map((stack, index) => (
            <StackCard stack={ stack } key={ index } />
          ))}
        </FastMarquee>
      </Reveal>
      <Box
        alignSelf="flex-end"
        component="img"
        src={squares}
        sx={{ width: { xs: '100px', md: '150px' }, height: { xs: '80px', md: '110px' } }}
      />
    </Stack>
  );
}

export default Stacks;
