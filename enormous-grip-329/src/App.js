import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Navbar from './NavBar';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Navbar />
      {/* Your other components */}
    </ChakraProvider>
  );
}

export default App;
