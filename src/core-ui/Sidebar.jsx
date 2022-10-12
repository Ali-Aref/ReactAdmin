import {
  Divider,
  Flex,
  Stack,
  VStack,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import Branding from "../components/sidebar/Branding";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Flex
      bg={"lightblue"}
      pos={"sticky"}
      left={5}
      h={"92vh"}
      w="300px"
      // marginTop="0.5vh"
      px="1rem"
      boxShadow="2xl"
      rounded="md"
      align={"center"}
      justifyContent={"space-between"}
      direction="column"
    >
      <VStack w="100%">
        {/* <Branding /> */}
        <Divider />
        <Flex>img name</Flex>
      </VStack>
      <Stack alignContent="start" w="100%" mb="4">
        <Divider />
        <Flex direction="row" justifyContent="start" pt="1rem">
          <Avatar size="md" />
          <Stack direction="column" ml="1rem">
            <Heading fontSize="lg">Ali Aref Mohammadzada</Heading>
            <Heading fontSize="md" color="gray">
              Admin
            </Heading>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Sidebar;
