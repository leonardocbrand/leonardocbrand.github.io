import { Typography, Box } from '@mui/material';

import CircleSpan from './Intro/styles/CircleSpan';

type SectionTitleProps = {
  children: React.ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    children === 'Projetos' ? (
      <Box display="flex" alignItems="center" flexDirection="row-reverse" mb={ 2 } gap={4}>
        <Typography
          variant='h2'
          fontWeight={ 900 }
          fontSize={ { xs: '2rem', md: '3.2rem', lg: '3.4rem' } }
          sx={{ width: '400px' }}
        >
          { children }
          <CircleSpan />
        </Typography>
        <Box sx={{ backgroundColor: '#ebecf3', width: '100%', height: '1px', opacity: '0.3' }} />
      </Box>
    ) : (
      <Box display="flex" alignItems="center" flexDirection="row" mb={ 2 } gap={4}>
        <Box display="flex" alignItems="baseline">
          <Typography
            variant='h2'
            fontWeight={ 900 }
            fontSize={ { xs: '2rem', md: '3.2rem', lg: '3.6rem' } }
          >
            { children }
          </Typography>
          <CircleSpan />
        </Box>
        <Box sx={{ backgroundColor: '#ebecf3', width: '100%', height: '1px', opacity: '0.3' }} />
      </Box>
    )
  );
}

export default SectionTitle;
