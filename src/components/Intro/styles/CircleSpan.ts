import { styled } from '@mui/material';

const CircleSpan = styled('span')(({ theme }) => ({
  display: 'inline-block',
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  marginLeft: '0.4rem'
}));

export default CircleSpan;
