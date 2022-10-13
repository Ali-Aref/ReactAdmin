import {
  FiMenu,
  FiCalendar,
  FiMail,
  FiMessageCircle,
  FiPower,
  FiBell,
  FiSettings,
  FiCheck,
  FiCheckCircle,
  FiMoon,
  FiAnchor,
  FiChevronDown,
} from "react-icons/fi";
import { TbArrowWaveRightDown } from 'react-icons/tb'
import { Flex, IconButton, VStack } from "@chakra-ui/react";
import { useState } from "react";

const SidebarNav = ({}) => {
  return (
    <Flex
      direction={"column"}
      justifyItems="center"
      justifyContent="space-between"
      bg="blue.500"
      w="55px"
      h="100vh"
      py="1rem"
      px="10px"
    >
      <VStack>
        <IconButton icon={<FiMenu />} />
        <IconButton icon={<FiMail />} />
        <IconButton icon={<FiMessageCircle />} />
        <IconButton icon={<FiBell />} />
        <IconButton icon={<FiCheckCircle />} />
      </VStack>
      <VStack>
        <IconButton icon={<FiMoon />} />
        <IconButton icon={<FiCalendar />} />
        <IconButton icon={<FiSettings />} />
        <IconButton icon={<FiPower />} />
      </VStack>
    </Flex>
  );
};

export default SidebarNav;
