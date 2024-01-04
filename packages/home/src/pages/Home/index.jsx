import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

function Home() {
  return (
    <Box display="flex" flexDir="column">
      <Box display="flex" alignSelf="center">
        <Heading>this is a home component from home app!</Heading>
      </Box>
    </Box>
  );
}

export default Home;
