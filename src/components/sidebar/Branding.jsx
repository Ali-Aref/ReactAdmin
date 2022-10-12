import { Avatar, Box, Flex, Heading, HStack } from "@chakra-ui/react";

const Branding = () => {
  return (
    <Flex  w="100%" mt={"1.5rem"} justifyContent="space-between" align="normal">
      <Avatar />
      <Heading as="h1" fontSize="lg">
        The branding
      </Heading>
    </Flex>
  );
};

export default Branding;
