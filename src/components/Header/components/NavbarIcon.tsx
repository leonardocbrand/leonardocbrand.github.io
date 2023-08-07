import { Box } from '@mui/material';

import icon from '../../../assets/logoIcon.svg';

type NavBarIconProps = {
  xs: string,
  md: string,
}

function NavBarIcon({ xs, md }: NavBarIconProps) {
  return (
    <Box
      width={ 30 }
      height={ 30 }
      display="flex"
      p={ 2 }
      mr={ 1 }
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: 'black',
        display: { xs , md },
        opacity: 0.9,
        fontFamily: 'monospace',
      }}
    >
      <img src={ icon } alt="" />
    </Box>
  );
}

export default NavBarIcon;
