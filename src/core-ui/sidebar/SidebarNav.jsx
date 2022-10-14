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
  FiGrid,
  FiChevronRight,
  FiColumns,
  FiCircle,
  FiDisc,
  FiArrowRightCircle,
  FiArrowLeftCircle,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronsLeft,
} from "react-icons/fi";
import { RiLayoutColumnFill, RiLayoutColumnLine } from "react-icons/ri";
import { Flex, IconButton, Switch, VStack } from "@chakra-ui/react";
import { useState } from "react";

const SidebarNav = ({ collapse }) => {
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
        <IconButton
          icon={collapse.get ? <FiChevronsRight /> : <FiChevronsLeft />}
          onClick={() => collapse.set(!collapse.get)}
        />
        <IconButton icon={<FiGrid />}  />
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
