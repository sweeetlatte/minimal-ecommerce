import { Box, Container } from '@mui/material';

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
        <img src={menu} alt='' />
        <div style={{ paddingLeft: '16px', fontSize: '20px' }}>Leafee</div>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <img src={bag} alt='' />
        </Box>
        <Box sx={{ ml: 3 }}>
          <img src={bookmark} alt='' />
        </Box>
        <Box sx={{ ml: 3 }}>
          <img src={user} alt='' />
        </Box>
      </Box>
    </Container>
  );
}
