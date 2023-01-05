import { Box, Button, Container, Typography } from '@mui/material';

import bookmark from '../../assets/icons/bookmark.svg';
import product from '../../assets/images/product.jpg';
import AccordionGroup from '../../components/AccordionGroup';
import BottomButton from '../../components/BottomButton';
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
        <Container
          maxWidth={false}
          sx={{ flexBasis: '45%', p: '0 !important', position: 'relative', overflow: 'auto' }}
        >
          <Box sx={{ px: 22, py: 16, color: 'secondary.main' }}>
            <Typography
              variant='h4'
              sx={{
                fontSize: '24px',
                color: 'primary.main',
                pb: 1,
                fontWeight: 600,
                letterSpacing: '0.75px',
              }}
            >
              Green Leafed Plant
            </Typography>
            <Typography variant='body1' sx={{ pb: 4 }}>
              Six carbon (C6) compounds including alcohols, aldehydes and esters
            </Typography>
            <Typography
              variant='h5'
              sx={{
                color: 'primary.main',
                pb: 7,
              }}
            >
              $ 957
            </Typography>
            <Typography variant='body2'>
              Bright flowers and variegation cannot be seen well unless there is a solid backdrop of
              green leaf plants.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 13, pb: 10 }}>
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
            <AccordionGroup />
          </Box>
          <Box sx={{ position: 'fixed', bottom: 0, right: 0, width: '45%' }}>
            <BottomButton />
          </Box>
        </Container>
      </Container>
    </Container>
  );
}
