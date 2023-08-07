import { Link } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

function SocialsBox() {
  return (
    <>
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
    </>
  );
}

export default SocialsBox;
