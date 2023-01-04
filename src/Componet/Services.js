import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function Services() {
  return (
    <Box mt="10" backgroundColor="#f8f8f8">
        <Flex direction="column" alignContent="center" w="100%" pt="10">
            <Heading 
                color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                fontSize={["13px","13px","15px"]} lineHeight="24px" textAlign="center">
                    WHAT WE DO
            </Heading>
            <Heading 
                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                fontSize={["33px","33px","44px"]} mb="30px" textAlign="center">
                    Our Services
            </Heading>
        </Flex>
        
        <SimpleGrid
            bg='gray.50'
            columns={{ sm: 2, md: 4 }}
            spacing='8'
            p='10'
            rounded='lg'
            color='gray.400'
        >
            {/* 01 */}
            <Box p="25px 35px" bgColor="#fff" position="relative" borderColor="currentcolor"  >
                <Text color="#9a9a9a" fontWeight="600" mb="12px">01</Text>
                <Heading
                    as="h3" fontSize={["13px","20px","20px"]} mb="16px" fontWeight="600"
                    fontFamily=" playfair display,serif" color="#000" 
                >
                    Tech Stacks 
                </Heading>
                <ArrowForwardIcon w="18" h="18" />
            </Box>
            {/* 02 */}
            <Box p="25px 35px" bgColor="#fff" position="relative" borderColor="currentcolor"  >
                <Text color="#9a9a9a" fontWeight="600" mb="12px">02</Text>
                <Heading
                    as="h3" fontSize={["13px","20px","20px"]} mb="16px" fontWeight="600"
                    fontFamily=" playfair display,serif" color="#000" 
                >
                    Content Writing
                </Heading>
                <ArrowForwardIcon w="18" h="18" />
            </Box>
            {/* 03 */}
            <Box p="25px 35px" bgColor="#fff" position="relative" borderColor="currentcolor"  >
                <Text color="#9a9a9a" fontWeight="600" mb="12px">03</Text>
                <Heading
                    as="h3" fontSize={["13px","20px","20px"]} mb="16px" fontWeight="600"
                    fontFamily=" playfair display,serif" color="#000" 
                >
                   Social Media 
                </Heading>
                <ArrowForwardIcon w="18" h="18" />
            </Box>
            {/* 04 */}
            <Box p="25px 35px" bgColor="#fff" position="relative" borderColor="currentcolor"  >
                <Text color="#9a9a9a" fontWeight="600" mb="12px">04</Text>
                <Heading
                    as="h3" fontSize={["13px","20px","20px"]} mb="16px" fontWeight="600"
                    fontFamily=" playfair display,serif" color="#000" 
                >
                    Creatives
                </Heading>
                <ArrowForwardIcon w="18" h="18" />
            </Box>
            {/* 05 */}
            <Box p="25px 35px" bgColor="#fff" position="relative" borderColor="currentcolor"  >
                <Text color="#9a9a9a" fontWeight="600" mb="12px">05</Text>
                <Heading
                    as="h3" fontSize={["13px","20px","20px"]} mb="16px" fontWeight="600"
                    fontFamily=" playfair display,serif" color="#000" 
                >
                    Digital Marketing
                </Heading>
                <ArrowForwardIcon w="18" h="18" />
            </Box>
            {/* 06 */}
            <Box p="25px 35px" bgColor="#fff" position="relative" borderColor="currentcolor"  >
                <Text color="#9a9a9a" fontWeight="600" mb="12px">06</Text>
                <Heading
                    as="h3" fontSize={["13px","20px","20px"]} mb="16px" fontWeight="600"
                    fontFamily=" playfair display,serif" color="#000" 
                >
                   UI Design
                </Heading>
                <ArrowForwardIcon w="18" h="18" />
            </Box>
            {/* 07 */}
            <Box p="25px 35px" bgColor="#fff" position="relative" borderColor="currentcolor"  >
                <Text color="#9a9a9a" fontWeight="600" mb="12px">07</Text>
                <Heading
                    as="h3" fontSize={["13px","20px","20px"]} mb="16px" fontWeight="600"
                    fontFamily=" playfair display,serif" color="#000" 
                >
                    Business Development
                </Heading>
                <ArrowForwardIcon w="18" h="18" />
            </Box>
            {/* 08 */}
            <Box p="25px 35px" bgColor="#fff" position="relative" borderColor="currentcolor"  >
                <Text color="#9a9a9a" fontWeight="600" mb="12px">08</Text>
                <Heading
                    as="h3" fontSize={["13px","20px","20px"]} mb="16px" fontWeight="600"
                    fontFamily=" playfair display,serif" color="#000" 
                >
                   Software Development
                </Heading>
                <ArrowForwardIcon w="18" h="18" />
            </Box>
             
        </SimpleGrid>
        
        
    </Box>
  )
}

export default Services