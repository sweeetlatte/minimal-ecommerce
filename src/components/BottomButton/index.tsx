import { Box, Button } from '@mui/material';

export default function BottomButton() {
  return (
    <Box
      sx={{
        px: 22,
        py: 2,
        borderTop: '1px solid #efefef',
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
  );
}
