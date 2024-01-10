import React from 'react';
import { Spinner, Flex, Text } from '@chakra-ui/react';

function Loading() {
  return (
    <Flex
      pos="fixed"
      left="0"
      top="0"
      w="100%"
      h="100vh"
      minH="600px"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="10px">
      <Spinner />
      <Text>loading...</Text>
    </Flex>
  );
}

export default Loading;
