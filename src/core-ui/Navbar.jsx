import {
  Box,
  Flex,
  HStack,
  Text,
  Stack,
  Avatar,
  Heading,
} from "@chakra-ui/react";

const Navbar = () => {
   console.log("this is the new ")
   const d = new Date()jj
  return (
    <Flex
      // bg="white"
      bg="lightcyan"
      px="1rem"
      py="1rem"
      m={3}
      rounded="md"
      boxShadow="2xl"
      justifyContent={"space-between"}
    >
      <HStack>
        <Text>Branding</Text>
      </HStack>
      <HStack bg="lightblue">
          <Avatar size="md" />
          <Stack direction="column" ml="1rem">
            <Heading fontSize="md">Ali Aref Mohammadzada</Heading>
            <Heading fontSize="sm" color="gray">
              Admin
            </Heading>
          </Stack>
      </HStack>
    </Flex>
  );
};

export default Navbar;
