import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Navbar from './NavBar';
import StickySideBar from './SideBar';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Navbar />
      <StickySideBar />
      {/* Your other components */}
    </ChakraProvider>
  );
}

export default App;
