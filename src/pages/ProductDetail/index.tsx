import { Box, Button, Container } from '@mui/material';

import bookmark from '../../assets/icons/bookmark.svg';
import product from '../../assets/images/product.jpg';
import Navbar from '../../components/Navbar';

export default function ProductDetail() {
  return (
    <Container maxWidth={false} sx={{ height: '100vh', px: '0 !important', overflowY: 'hidden' }}>
      <Navbar />
      <Container
        maxWidth={false}
        sx={{ height: '100%', pt: '94px', px: '0 !important', display: 'flex' }}
      >
        <Box sx={{ flexBasis: '55%' }}>
          <img style={{ objectFit: 'cover' }} width={'100%'} height={'100%'} src={product} alt='' />
        </Box>
        <Container maxWidth={false} sx={{ flexBasis: '45%', p: '0 !important' }}>
          <Box sx={{ px: 22, py: 16, color: '#818181' }}>
            <Box
              sx={{
                fontSize: '24px',
                color: '#2d2e2b',
                pb: 1,
                fontWeight: 600,
                letterSpacing: '0.75px',
              }}
            >
              Green Leafed Plant
            </Box>
            <Box sx={{ pb: 4 }}>
              Six carbon (C6) compounds including alcohols, aldehydes and esters
            </Box>
            <Box
              sx={{
                fontSize: '24px',
                color: '#2d2e2b',
                pb: 7,
                fontWeight: 600,
                letterSpacing: '0.75px',
              }}
            >
              $ 957
            </Box>
            <Box>
              Bright flowers and variegation cannot be seen well unless there is a solid backdrop of
              green leaf plants.
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 13 }}>
              <Button variant='outlined' sx={{ width: 64, height: 64 }}>
                <img src={bookmark} alt='' />
              </Button>
              <Button
                variant='contained'
                disableElevation={true}
                sx={{
                  textTransform: 'unset',
                  fontFamily: 'Gowun Dodum',
                  py: 2.47,
                  width: '100%',
                  ml: 2,
                }}
              >
                Select Size
              </Button>
            </Box>
          </Box>
          <Box>footer</Box>
        </Container>
      </Container>
    </Container>
  );
}
