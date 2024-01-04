import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Contact from './pages/Contact';

function App() {
  return (
    <ChakraProvider>
      <React.StrictMode>
        <Contact />
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default App;
