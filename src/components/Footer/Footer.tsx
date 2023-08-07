import { Link } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Paper, Typography, Box, IconButton } from '@mui/material';

function Footer() {
  return (
    <Paper
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        mt: 2,
        py: 1,
      }}
    >
      <Typography
        pl={2}
        variant="body1"
      >
          Desenvolvido por Leonardo Brandão
      </Typography>
      <Box>
        <IconButton
          sx={{
            '& > *': {
              '&:hover': { color: 'primary.main' },
              '&:active': { color: 'secondary.main' }
            },
            opacity: 0.5,
          }}
          component={Link}
          to="https://www.linkedin.com/in/leonardocbrand/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          sx={{
            '& > *': {
              '&:hover': { color: 'primary.main' },
              '&:active': { color: 'secondary.main' }
            },
            opacity: 0.5,
          }}
          component={Link}
          to="https://github.com/leonardocbrand/"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          sx={{
            '& > *': {
              '&:hover': { color: 'primary.main' },
              '&:active': { color: 'secondary.main' }
            },
            opacity: 0.5,
          }}
          component={Link}
          to="mailto:leonardocbrand@gmail.com"
          target="_blank"
        >
          <EmailIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default Footer;
