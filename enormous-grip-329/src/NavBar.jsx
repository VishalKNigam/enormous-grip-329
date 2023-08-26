import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  HStack,
  IconButton,
  Collapse,
  Button,
  useDisclosure,
  VStack,
  Icon,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon, BellIcon } from '@chakra-ui/icons';
import { color } from 'framer-motion';

 export const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const navbarItems = [
    { label: 'For You', href: '#' },
    { label: 'Discover', href: '#' },
    { label: 'Hire', href: '#' },
    { label: 'Assets', href: '#' },
    { label: 'Jobs', href: '#' },
  ];

  return (
    <Box bg="white.500" px={4}>
      <Flex h={16} alignItems="center">
        {/* Logo */}
        <a href="#"><Image src='/actualLogo.png' alt='LOGO' boxSize='200px' objectFit='cover' height="60px" /></a>
        
        <Spacer />
        
        {/* Large Screen Nav Items */}
        <HStack display={['none', 'none', 'flex']} spacing={4}>
          {navbarItems.map(item => (
            <Button key={item.label} as="a" href={item.href}>
              {item.label}
            </Button>
          ))}
          <input type="text" placeholder="Search" color='blue' />
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon />}
          />
          <Button colorScheme="blue">Log in</Button>
          <Button colorScheme="blue" variant="outline">
            Sign Up
          </Button>
          <Button colorScheme="blue" leftIcon={<Icon />}>
            Free Trial
          </Button>
        </HStack>
        
        {/* Hamburger (Small Screen) */}
        <IconButton
          display={['flex', 'flex', 'none']}
          onClick={onToggle}
          icon={<HamburgerIcon />}
        />
      </Flex>
      
      {/* Collapse Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box p={4} bg="blue.700">
          {/* Small Screen Nav Items */}
          <VStack spacing={4}>
            {navbarItems.map(item => (
              <Button key={item.label} as="a" href={item.href} variant="ghost">
                {item.label}
              </Button>
            ))}
            {/* Other items for small screen */}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
