import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex p="4" bg="darkolivegreen" color="white" gridGap="10px">
      <ChakraLink as={ReactRouterLink} to="/test">
        Link 1
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/test">
        Link 2
      </ChakraLink>
    </Flex>
  );
}

export default Navbar;
