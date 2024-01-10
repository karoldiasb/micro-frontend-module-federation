import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/Navbar';

function Home() {
  return (
    <Box display="flex" flexDir="column">
      <Navbar />
      <Box display="flex" alignSelf="center">
        <Heading>welcome!</Heading>
      </Box>
    </Box>
  );
}

export default Home;
