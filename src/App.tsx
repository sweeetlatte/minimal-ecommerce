import '@fontsource/gowun-dodum';
import './App.css';

import { ThemeProvider } from '@mui/material/styles';

import ProductDetail from './pages/ProductDetail';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <ProductDetail />
      </div>
    </ThemeProvider>
  );
}

export default App;
