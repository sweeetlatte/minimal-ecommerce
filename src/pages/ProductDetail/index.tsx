import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import bookmark from '../../assets/icons/bookmark.svg';
import product from '../../assets/images/product.jpg';
import Navbar from '../../components/Navbar';

export default function ProductDetail() {
  const [isExpanded, setIsExpanded] = useState<string | false>(false);

  const accordionTitles = [
    { id: 0, title: 'Details & Care' },
    { id: 1, title: 'Size & Fit' },
    { id: 2, title: 'Features' },
    { id: 3, title: 'Sustainiability' },
  ];

  const handleChange = (expanded: boolean, activeAccor: string) => {
    setIsExpanded(expanded ? activeAccor : false);
  };

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
            <Box
              sx={{
                fontSize: '24px',
                color: 'primary.main',
                pb: 1,
                fontWeight: 600,
                letterSpacing: '0.75px',
              }}
            >
              Green Leafed Plant
            </Box>
            <Typography variant='body1' sx={{ pb: 4 }}>
              Six carbon (C6) compounds including alcohols, aldehydes and esters
            </Typography>
            <Box
              sx={{
                fontSize: '24px',
                color: 'primary.main',
                pb: 7,
                fontWeight: 600,
                letterSpacing: '0.75px',
              }}
            >
              $ 957
            </Box>
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
            {accordionTitles.map((title) => (
              <Accordion
                key={title.id}
                disableGutters={true}
                sx={{
                  boxShadow: 'none',
                  '&::before': { bgcolor: 'white' },
                }}
                expanded={isExpanded === `panel${title.id}`}
                onChange={(event: React.SyntheticEvent, expanded: boolean) =>
                  handleChange(expanded, `panel${title.id}`)
                }
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${title.id}-content`}
                  id={`panel${title.id}-header`}
                  sx={{ px: 0 }}
                >
                  <Typography
                    variant={isExpanded === `panel${title.id}` ? 'subtitle1' : 'subtitle2'}
                    sx={{
                      color: isExpanded === `panel${title.id}` ? 'primary.main' : 'secondary.main',
                    }}
                  >
                    {title.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 0 }}>
                  <Typography variant='body2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          <Box
            sx={{
              px: 22,
              py: 2,
              borderTop: '1px solid #efefef',
              position: 'fixed',
              bottom: 0,
              right: 0,
              width: '45%',
              bgcolor: 'white',
            }}
          >
            <Button
              variant='contained'
              disableElevation={true}
              sx={{
                textTransform: 'unset',
                fontFamily: 'Gowun Dodum',
                py: 2.47,
                width: '100%',
              }}
            >
              Continue Checkout
            </Button>
          </Box>
        </Container>
      </Container>
    </Container>
  );
}
