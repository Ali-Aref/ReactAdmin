import SidebarNav from "./SidebarNav";
import SidebarContent from "./SidebarContent";
import SidebarItem from './SidebarItem'
import {
  Heading,
  Box,
  Text,
  Flex,
  Avatar,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiAnchor, FiGrid, FiVideo } from "react-icons/fi";

const Sidebar = () => {
  const [isCollapsed, setisCollapsed] = useState(true);
  const collapse = { get: isCollapsed, set: setisCollapsed };

  return (
    <Flex shadow="2xl" bg="white">
      <SidebarNav />
      {/* start sidebar */}
      <Flex
        as="nav"
        p="1rem"
        w={isCollapsed ? "70px" : "270px"}
        direction="column"
        alignItems={isCollapsed ? "center" : "flex-start"}
        justifyContent="space-between"
      >
        <Flex direction="column" w="100%">
          <IconButton
            bg="none"
            w="40px"
            _hover={{ background: "none" }}
            icon={<FiAnchor />}
            onClick={() => {
              setisCollapsed(!isCollapsed);
            }}
          />
          {/* Start Sidebar items */}
          <SidebarItem
            isCollapsed={isCollapsed}
            text="Dashboard"
            icon={FiGrid}
          />
          <SidebarItem
            isCollapsed={isCollapsed}
            text="Movementest"
            icon={FiVideo}
          />
          {/* End Sidebar items */}
        </Flex>
        <Flex
          direction="column"
          alignItems={isCollapsed ? "center" : "flex-start"}
        >
          <Divider display={isCollapsed ? "none" : "block"} />
          <Flex direction="row" mt="1rem" alignItems="center">
            <Avatar size="md" name="Ali Aref" />
            <Flex
              ml="0.5rem"
              direction="column"
              display={isCollapsed ? "none" : "flex"}
            >
              <Heading fontSize="sm" as="h3">
                Ali Aref Mohammadzada
              </Heading>
              <Text fontSize="sm" color="grey">
                Admin
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* end sidebar */}
    </Flex>
  );
};

export default Sidebar;
