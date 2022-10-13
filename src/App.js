import { Box, Center, Flex, Text} from "@chakra-ui/react";
import { Core } from "./core-ui/Core"


function App() {
  return (
    <Box bg="gray.50">
      <Core content={
        <Center w="100%" alignContent={"center"}>Contents Here</Center>
      } />
    </Box>
  );
}

export default App;
