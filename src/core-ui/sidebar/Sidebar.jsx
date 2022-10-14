import SidebarNav from "./SidebarNav";
import SidebarContent from "./SidebarContent";
import SidebarItem from "./SidebarItem";
import {
  Heading,
  Box,
  Text,
  Flex,
  Avatar,
  IconButton,
  Divider,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
} from "@chakra-ui/react";
import { useState } from "react";
import BrandingLogo from "../../assets/images/logo/logo1.png";
import {
  FiVideo,
} from "react-icons/fi";
import { BsGrid1X2 } from "react-icons/bs";

const Sidebar = () => {
  const [isCollapsed, setisCollapsed] = useState(true);
  const collapse = { get: isCollapsed, set: setisCollapsed };

  return (
    <Flex shadow="2xl" bg="white">
      <SidebarNav collapse={collapse} />
      {/* start sidebar */}
      <Flex
        as="nav"
        p="1rem"
        w={isCollapsed ? "70px" : "270px"}
        direction="column"
        alignItems={isCollapsed ? "center" : "flex-start"}
        justifyContent="space-between"
      >
        <Flex direction="column" w="100%" py="0.5rem">
          <Flex
            mb="1rem"
            direction="column"
            alignItems={isCollapsed ? "center" : "flex-start"}
          >
            <Flex direction="row" alignItems="center">
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
            <Divider mt="1rem" display={isCollapsed ? "none" : "block"} />
          </Flex>
          <Accordion allowToggle>
            <SidebarItem
              isCollapsed={isCollapsed}
              text="Dashboard"
              icon={BsGrid1X2}
            />
            <SidebarItem
              isCollapsed={isCollapsed}
              text="Movementest"
              icon={FiVideo}
              active
            />
            <SidebarItem
              isCollapsed={isCollapsed}
              text="Dashboard"
              icon={BsGrid1X2}
            />
          </Accordion>
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
