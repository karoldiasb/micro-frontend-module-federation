import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './Routes';

function App() {
  return (
    <ChakraProvider>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default App;
