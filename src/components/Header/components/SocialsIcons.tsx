import { ElementType } from 'react';
import { Link } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Stack } from '@mui/material';

type SocialsBoxType = {
  component: ElementType;
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' | undefined;
  spacing: {
    xs: number;
    sm: number;
  }
}

function SocialsBox({ component, direction, spacing }: SocialsBoxType) {
  return (
    <Stack component={ component } direction={ direction }  spacing={ spacing }>
      <IconButton
        sx={{
          '& > *': {
            '&:hover': { color: 'primary.main' },
            '&:active': { color: 'secondary.main' }
          }
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
          }
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
          }
        }}
        component={Link} 
        to="mailto:leonardocbrand@gmail.com" 
        target="_blank"
      >
        <EmailIcon />
      </IconButton>
    </Stack>
  );
}

export default SocialsBox;
