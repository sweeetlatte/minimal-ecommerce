import { Box, Button, Container, Typography } from '@mui/material';
import * as Icon from 'react-feather';

import product from '../../assets/images/product.jpg';
import AccordionGroup from '../../components/AccordionGroup';
import BottomButton from '../../components/BottomButton';
import Navbar from '../../components/Navbar';

export default function ProductDetail() {
  return (
    <Container maxWidth={false} sx={{ height: '100vh', px: '0 !important' }}>
      <Navbar />
      <Container
        maxWidth={false}
        sx={{
          px: '0 !important',
        }}
      >
        <Box
          sx={{ height: '90vh', '> img': { width: '100%', height: '100%', objectFit: 'cover' } }}
        >
          <img src={product} alt='' />
        </Box>
        <Container
          maxWidth={false}
          // sx={{ flexBasis: '45%', p: '0 !important', position: 'relative', overflow: 'auto' }}
          sx={{ p: '0 !important' }}
        >
          <Box sx={{ px: 2, py: 2, color: 'secondary.main' }}>
            <Typography variant='h4' sx={{ color: 'primary.main', pb: 1 }}>
              Green Leafed Plant
            </Typography>
            <Typography variant='body2' sx={{ pb: 4 }}>
              Six carbon (C6) compounds including alcohols, aldehydes and esters
            </Typography>
            <Typography variant='h5' sx={{ color: 'primary.main', pb: 4 }}>
              $ 957
            </Typography>
            <Typography variant='body2'>
              Bright flowers and variegation cannot be seen well unless there is a solid backdrop of
              green leaf plants.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                py: 8,
                '> *': { p: 'unset !important' },
                '> * + *': { ml: 2 },
              }}
            >
              <Button variant='outlined' sx={{ minWidth: 52, height: 52 }}>
                <Icon.Bookmark size={22} strokeWidth={1} />
              </Button>
              <Button
                variant='contained'
                disableElevation={true}
                sx={{ textTransform: 'unset', fontFamily: 'Gowun Dodum', width: '100%' }}
              >
                Select Size
              </Button>
            </Box>
            <AccordionGroup />
          </Box>
          {/* <Box sx={{ position: 'fixed', bottom: 0, right: 0, width: '45%' }}> */}
          <Box>
            <BottomButton />
          </Box>
        </Container>
      </Container>
    </Container>
  );
}
