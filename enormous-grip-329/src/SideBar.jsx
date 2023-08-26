import { Image, Box, Flex, VStack } from "@chakra-ui/react";
import { EmailIcon, AddIcon , CalendarIcon, ChatIcon, PhoneIcon} from "@chakra-ui/icons";

const ImageWithPlusSign = ({ imageUrl }) => {
  return (
    <Box position="relative" display="inline-block">
      
      <Image src={imageUrl} alt="Image" borderRadius={1000} />
      <Box
        position="absolute"
        top="90%"
        left="80%"
        transform="translate(-50%, -50%)"
        bg="white"
        borderRadius="100%"
        width="30px"
        height="30px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <a href="#"><AddIcon /></a>
        
      </Box>
    </Box>
  );
};

const StickySideBar = () => {
  return (
    
    <Flex position="fixed"
      right={0}  // This will stick the sidebar to the right of the browser
      flexDirection="column"
      alignItems="flex-end"
      padding={10} >
      <VStack spacing={10} >
        <Box boxSize="70">
          <ImageWithPlusSign imageUrl="https://bit.ly/dan-abramov" />
          
    
        </Box>
        <a href="#"> <EmailIcon w={6} h={6}  /></a>
        <a href="#"><CalendarIcon w={6} h={6} /></a>
        <a href="#"><ChatIcon w={6} h={6} /></a>
        <a href="#"><PhoneIcon w={6} h={6} /></a>
        
        
      </VStack>
    </Flex>
   
  );
};
export default StickySideBar;
