import { Link } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';

import projectsList from '../../../data/projectsList';
import Reveal from '../../Reveal';

function CardsGrid() {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 2, sm: 4, md: 8 }}>
      {projectsList.map((project) => (
        <Grid item xs={2} sm={4} md={4} key={project.name + project.image}>
          <Box
            display="flex"
            justifyContent="center"
            borderRadius={ 2 }
            sx={{ aspectRatio: '16/9', overflow: 'hidden', backgroundColor: '#232323' }}>
            <Box 
              alignSelf="flex-end"
              width="78%"
              borderRadius="0.4rem"
              component="img"
              onClick={() => window.open(project.urlDeploy || project.urlGithub, '_blank')} 
              src={project.image}
              alt={project.name}
              sx={{
                transition: 'all 0.25s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  filter: 'brightness(1.1)',
                  rotate: '2deg',
                },
              }}  
            />
          </Box>
          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Reveal>
              <Typography variant="h4" fontSize={{ xs: '1.3rem', md: '1.4rem' }} fontWeight={700}>
                {project.name}
              </Typography>
            </Reveal>
            <Box width={{ xs: '90%', md: '100%' }} height="1px" sx={{ opacity: '0.3', backgroundColor: '#ebecf3' }} />
            <Box display="flex">
              <Reveal>
                <IconButton
                  component={Link}
                  to={project.urlGithub}
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
              </Reveal>
              {project.urlDeploy && (
                <Reveal>
                  <IconButton
                    component={Link}
                    to={project.urlDeploy}
                    target="_blank"
                  >
                    <OpenInNewIcon />
                  </IconButton>
                </Reveal>)}
            </Box>
          </Stack>
          <Reveal>
            <Typography variant='subtitle1' color="#0aff9d" fontSize="1rem" mb={1}>
              {project.stacks}
            </Typography>
          </Reveal>
          <Reveal>
            <Typography variant="body1" fontWeight={200} sx={{ opacity: '0.9' }} textAlign="justify">
              {project.description}
            </Typography>
          </Reveal>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardsGrid;
