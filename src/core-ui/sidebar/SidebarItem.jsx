import { Flex, Text, Button, Icon, Menu, MenuButton, Link, HStack } from "@chakra-ui/react";

const SidebarItem = ({ icon, text, active, isCollapsed }) => {
  return (
    <Flex
      direction="column"
      alignItems={isCollapsed ? "center" : "flex-start"}
      borderRadius="5"
      _hover={{ 
        backgroundColor: "lightblue",
      }}
    >
      <Menu placement="left">
        <Link
          px="1rem"
          pt="1rem"
          pb="0.5rem"
          bg={active && "lightblue"}
        >
          <MenuButton>
            <Flex p="0">
              <Icon as={icon} fontSize="xl" />
              <Text pl="1rem" fontSize="md" display={isCollapsed? "none": "flex"}>{text}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default SidebarItem;
