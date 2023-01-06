import { Box, Container, Typography } from '@mui/material';
import * as Icon from 'react-feather';

export default function Navbar() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        left: 0,
        py: 2,
        px: { xs: 2, xl: 6 },
        zIndex: 1,
        width: '100%',
        bgcolor: 'white',
        borderBottom: '1px solid #efefef',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '> *': { cursor: 'pointer' },
        }}
      >
        <Icon.Menu size={22} strokeWidth={1} />
        <Typography variant='h5' sx={{ ml: 1.5 }}>
          Leafee
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          '> *': { cursor: 'pointer', display: 'flex', alignItems: 'center' },
          '> * + *': { ml: 2 },
        }}
      >
        <Icon.Briefcase size={22} strokeWidth={1} />
        <Icon.Bookmark size={22} strokeWidth={1} />
        <Icon.User size={22} strokeWidth={1} />
      </Box>
    </Container>
  );
}
