import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import {
  ChevronRightIcon,
  
  ChatIcon,
  EmailIcon,
  QuestionOutlineIcon,
  InfoOutlineIcon,
  SmallCloseIcon,
  ViewIcon,
  LockIcon,
} from "@chakra-ui/icons";


const BottomFooter = () => {
  return (
    <Box
      bg="gray.100"
      py={4}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      textAlign="center"
    >
      <HStack spacing={4}>
        <Link href="#">
          <Flex alignItems="center">
            <ChevronRightIcon />
            More Samarthance
          </Flex>
        </Link>
        <Link href="#">
          <Flex alignItems="center">
            <InfoOutlineIcon />
            English
          </Flex>
        </Link>
        <Link href="#">
          <Flex alignItems="center">
            <ChatIcon />
            TOU
          </Flex>
        </Link>
        <Link href="#">
          <Flex alignItems="center">
            <EmailIcon />
            Privacy
          </Flex>
        </Link>
        <Link href="#">
          <Flex alignItems="center">
            <QuestionOutlineIcon />
            Community
          </Flex>
        </Link>
        <Link href="#">
          <Flex alignItems="center">
            <InfoOutlineIcon />
            Help
          </Flex>
        </Link>
        <Link href="#">
          <Flex alignItems="center">
            <SmallCloseIcon />
            Cookie Preferences
          </Flex>
        </Link>
        <Link href="#">
          <Flex alignItems="center">
            <ViewIcon />
            Do not sell or share my personal information
          </Flex>
        </Link>
      </HStack>
    </Box>
  );
};

export default BottomFooter;
