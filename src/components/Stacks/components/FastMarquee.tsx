import Marquee from 'react-fast-marquee';

import { Box } from '@mui/material';

type MarqueeProps = {
  children: React.ReactNode;
}

function FastMarquee({ children }: MarqueeProps) {
  return (
    <Box
      component={ Marquee }
      gradient={ false }
      speed={ 60 }
      pauseOnHover
      pauseOnClick
      play
      direction="left"
      sx={{ minHeight: '170px' }}
    >
      {children}
    </Box>
  );
}

export default FastMarquee;
