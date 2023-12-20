import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider>
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default App;
