import { Box, Button, Container, Typography } from '@mui/material';
import * as Icon from 'react-feather';

import product from '../../assets/images/product.jpg';
import AccordionGroup from '../../components/AccordionGroup';
import BottomButton from '../../components/BottomButton';
import Navbar from '../../components/Navbar';

export default function ProductDetail() {
  return (
    <Container
      maxWidth={false}
      sx={{ height: '100vh', px: '0 !important', overflowY: { xl: 'hidden' } }}
    >
      <Navbar />
      <Container
        maxWidth={false}
        sx={{
          px: '0 !important',
          display: { xl: 'flex' },
          height: { xl: '92%' },
        }}
      >
        <Box
          sx={{
            flexBasis: { xl: '55%' },
            height: { xs: '90vh', xl: '100%' },
            '> img': { width: '100%', height: '100%', objectFit: 'cover' },
          }}
        >
          <img src={product} alt='' />
        </Box>
        <Container
          maxWidth={false}
          sx={{
            flexBasis: { xl: '45%' },
            p: '0 !important',
            overflow: 'auto',
          }}
        >
          <Box sx={{ px: { xs: 2, xl: 22 }, py: { xs: 2, xl: 16 }, color: 'secondary.main' }}>
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
              }}
            >
              <Button variant='outlined' sx={{ minWidth: 52, height: 52 }}>
                <Icon.Bookmark size={22} strokeWidth={1} />
              </Button>
              <Button
                variant='contained'
                disableElevation={true}
                sx={{ textTransform: 'unset', width: '100%', ml: 2 }}
              >
                Select Size
              </Button>
            </Box>
            <AccordionGroup />
          </Box>
          <Box
            sx={{
              position: { xl: 'fixed' },
              bottom: { xl: 0 },
              right: { xl: 0 },
              width: { xl: '45%' },
            }}
          >
            <BottomButton />
          </Box>
        </Container>
      </Container>
    </Container>
  );
}
