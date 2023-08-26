import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Navbar from './NavBar';
import StickySideBar from './SideBar';
import BottomFooter from './BottomFooter';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Navbar />
      <StickySideBar />
      <BottomFooter />
      {/* Your other components */}
    </ChakraProvider>
  );
}

export default App;
