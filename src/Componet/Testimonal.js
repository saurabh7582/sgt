import {  Heading, Stack, Text, Box } from '@chakra-ui/react'
import React from 'react'
import './style.css'


function Testimonal() {
  return (
    <Stack >
        <Heading fontFamily="playfair display,serif" fontSize={["24px","40px","40px"]}
          fontWeight="800" textAlign="center" mb="10px" color="black" mt="8">
            Clients who have trusted us
        </Heading>
        <Box
          boxShadow="0 0 10px 0" alignSelf="center" border="none" 
          borderRadius="10px" w="70%" p="20" ml={["0","15%","15%"]} mr={["0","15%","15%"]} backgroundColor="whiteAlpha.100"
        >
          <Text>hi</Text>
        </Box>
       

    </Stack>
  )
}

export default Testimonal