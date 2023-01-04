import {  Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

function Count() {
  return (
    <Stack direction={["column","column","row"]}  w="100%"  mt="20" bgColor="#617171" p="40px" pb={["0","0","10%"]}>
        {/* <VStack  w={["100%","100%","25%"]} > */}
    
        <VStack w={["100%","100%","25%"]} >
            <Heading as="h3"    fontFamily="playfair display,serif" fontSize="1.75rem" fontWeight="800" color="white" alignSelf="center" pt="30px">
                We give insightful and versatile propelled Services
            </Heading>  
        </VStack>
        
        {/* </VStack> */}
            <VStack w={["100%","25%","25%"]} >
                <Heading as="h3" fontFamily="playfair display,serif" lineHeight="normal" fontSize={"60px"} fontWeight="700" textAlign="center" color="white">
                    8
                </Heading>  
                <Heading as="h3" fontFamily="playfair display,serif" fontSize={["15px","18px","18px"]}  mt="-10px" color="white">
                    YEAR OF EXPERIENCE
                </Heading>  
            </VStack>
            <Stack w={["100%","25%","25%"]} >
                <Heading as="h3" fontFamily="playfair display,serif" fontSize={"60px"} fontWeight="800" textAlign="center" color="white">
                    245+
                </Heading>  
                <Heading as="h3" fontFamily="playfair display,serif" fontSize={["15px","18px","18px"]} fontWeight="800" textAlign="center" color="white">
                    PROJECTS COMPLETED
                </Heading>  
            </Stack>
            <Stack w={["100%","25%","25%"]}>
                <Heading as="h3" fontFamily="playfair display,serif" fontSize={"60px"} fontWeight="800" textAlign="center" color="white">
                    70
                </Heading>  
                <Heading as="h3" fontFamily="playfair display,serif" fontSize={["15px","18px","18px"]} fontWeight="800" textAlign="center" color="white">
                    ACTIVE CLIENTS
                </Heading>  
            </Stack>
                               
       
        
    </Stack>
  )
}

export default Count