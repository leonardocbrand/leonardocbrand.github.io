import { Box, Paper, Stack, Typography } from '@mui/material';

type StackCardProps = {
  stack: {
    id: string;
    name: string;
  }
}

function StackCard({ stack }: StackCardProps) {
  return (
    <Paper
      component={ Stack }
      spacing={ 1 }
      alignItems="center"
      sx={{
        p: 2,
        mx: 1,
        width: '150px',
        transition: 'transform 0.6s, background-color 0.6s',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: 'secondary.main',
          transform: 'scale(1.1)'
        }
      }}
    >
      <Box
        component="img"
        sx={{ width: '80px' }}
        src={`https://cdn.simpleicons.org/${stack.id}/0aff9d`}     
      >
      </Box>
      <Typography variant="h6" >
        {stack.name.toUpperCase()}
      </Typography>
    </Paper>
  );
}

export default StackCard;
