import {
  Avatar,
  Flex,
  Stack,
  HStack,
  Text,
  VStack,
  Heading,
  Progress,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Progress value="90" size="sm" />
      <Flex
        direction="row"
        justifyContent="space-between"
        m="0.5rem"
        p="1rem"
        rounded="md"
        bg="white"
        shadow="xl"
      >
        <HStack>
          <Heading>Branding</Heading>
        </HStack>
        <HStack>
          {/*<Button>Tasks</Button>*/}
          <Avatar size="md" name="Ali Aref"></Avatar>
          <Flex direction={"column"}>
            <Text fontWeight="600" size="sm">
              Ali Aref Mohammadzada
            </Text>
            <Text size="xs" color="grey">
              Admin
            </Text>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
