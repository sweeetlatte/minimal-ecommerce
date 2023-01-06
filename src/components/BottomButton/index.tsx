import { Box, Button } from '@mui/material';

export default function BottomButton() {
  return (
    <Box
      sx={{
        px: 2,
        py: 2,
        borderTop: '1px solid #efefef',
        bgcolor: 'white',
        '> *': { p: 'unset !important' },
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
          height: 52,
        }}
      >
        Continue Checkout
      </Button>
    </Box>
  );
}
