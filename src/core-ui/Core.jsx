import { Box, Flex } from "@chakra-ui/react"
import Sidebar from './sidebar/Sidebar'


const Core = ({ content }) =>{
  return <Flex>
    <Sidebar />
    {content}
  </Flex>
}

export { Core }
