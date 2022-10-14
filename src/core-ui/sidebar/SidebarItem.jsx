import {
  Flex,
  Box,
  Text,
  Button,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  IconButton,
  Icon,
} from "@chakra-ui/react";

const SidebarItem = ({ icon, text, active, isCollapsed }) => {
  return (
    <AccordionItem border="none">
      <Flex bg="">
        <AccordionButton >
          <Box flex="2" h="20px" textAlign="left" alignItems="start">
            <Icon as={icon}  fontSize="lg" mr="5" />
            {text}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Flex>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SidebarItem;

export const SidebarSubItem = () => {
  return (
    <>
      <Flex
        w="0"
        h="0"
        ml="-10px"
        mt="calc(100px - 7.5px)"
        pos="absolute"
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight="10px soild blue.500"
      />
      <Flex
        mt="2rem"
        bg="blue.500"
        h="200px"
        w="200px"
        p="1rem"
        borderRadius="5"
      >
        <Text>Sub item</Text>
      </Flex>
    </>
  );
};
