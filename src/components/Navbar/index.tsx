import { Box, Container, Typography } from '@mui/material';

import bookmark from '../../assets/icons/bookmark.svg';
import bag from '../../assets/icons/briefcase.svg';
import menu from '../../assets/icons/menu.svg';
import user from '../../assets/icons/user.svg';

export default function Navbar() {
  return (
    <Container
      maxWidth={false}
      sx={{
        py: 4,
        px: { sm: 6 },
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #efefef',
        bgcolor: 'white',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img style={{ cursor: 'pointer' }} src={menu} alt='' />
        <Typography variant='h5' sx={{ pl: '16px', fontSize: '20px', cursor: 'pointer' }}>
          Leafee
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ cursor: 'pointer' }}>
          <img src={bag} alt='' />
        </Box>
        <Box sx={{ cursor: 'pointer', ml: 3 }}>
          <img src={bookmark} alt='' />
        </Box>
        <Box sx={{ cursor: 'pointer', ml: 3 }}>
          <img src={user} alt='' />
        </Box>
      </Box>
    </Container>
  );
}
