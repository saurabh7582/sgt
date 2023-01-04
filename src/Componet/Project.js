import { Stack, Heading, Flex} from '@chakra-ui/react'
import React from 'react'


function Project() {
  return (
    <Stack direction={["column","row","row"]}>
        <Flex direction="column" alignContent="flex-start" w="100%" p="20" >
            <Heading 
                color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                fontSize={["13px","13px","15px"]} lineHeight="24px" 
            >
                CLIENTS WE WORK FOR
            </Heading>
            <Heading 
                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                fontSize={["33px","33px","44px"]} mb="30px" 
            >
               Our recent project
            </Heading>
        </Flex>
    
       
    </Stack>
  )
}

export default Project