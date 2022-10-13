import SidebarItem from "./SidebarItem";
import {
  Avatar,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { FiAnchor, FiCommand, FiDatabase, FiEye, FiMap } from "react-icons/fi";
import { useState } from "react";

const SidebarContent = ({ content, collapse }) => {
  // const [isCollapsed, setisCollapsed] = useState(false);
  const { get: isCollapsed, set: setisCollapsed } = collapse;
  let actualContent = "actualContent";

  switch (content) {
    case "menu":
      actualContent = <ContentMenu isCollapsed={isCollapsed} />;
      break;
    default:
      break;
  }

  return (
    <Flex p="1rem" bg="" flexDir="column" alignContent="start">
      <IconButton
        icon={<FiAnchor />}
        mb="1rem"
        bg="none"
        _hove={{ background: "none" }}
        onClick={() => {
          setisCollapsed(!isCollapsed);
        }}
      />
      {actualContent}
    </Flex>
  );
};

export default SidebarContent;

export const ContentMenu = ({ isCollapsed }) => {
  return (
    <VStack bg="">
      <SidebarItem icon={<FiCommand />} text="Dashboard" />
      <SidebarItem icon={<FiMap />} text="Maps" />
    </VStack>
  );
};
