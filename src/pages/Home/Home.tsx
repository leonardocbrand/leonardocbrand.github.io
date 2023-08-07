import { Container } from '@mui/material';

import { About } from '../../components/About';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Intro } from '../../components/Intro';
import { Projects } from '../../components/Projects';
import { Stacks } from '../../components/Stacks';

export default function Home() {
  return (
    <>
      <Header />
      <Container component="main">
        <Intro />
        <About />
        <Projects />
        <Stacks />
      </Container>
      <Footer />
    </>
  );
}
