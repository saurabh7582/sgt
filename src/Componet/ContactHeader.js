import React from 'react'
import { Flex, Heading, Text, Image, Divider  } from '@chakra-ui/react'

function ContactHeader() {
  return (
    <Flex w="100%" h="fit-content"  p="15"  backgroundImage="https://res.cloudinary.com/ssdeveloper/image/upload/v1672330952/sgt/backgroundshree_avk2lm.jpg">
        <Flex w={["100%","50%","50%"]} align="flex-start"  direction="column"  p="40">
            <Text fontWeight="400" lineHeight="24px" fontFamily="not sans" fontSize={["13px","medium","medium"]} 
                pt="5"  textAlign="center" color="white">
                 Reach Us
            </Text>
            <Divider border="2px solid" Color="#00d664" w="20%" />
            <Heading fontSize={["24px","40px","40px"]} fontWeight="800" textAlign="center" color="white">
                Contact Us 
            </Heading>
        </Flex>
        <Flex w={["100%","50%","50%"]} align="center" alignContent="center" direction="column" 
             pt="10" display={["none","flex","flex"]} >
            <Image w="max-content" h="80vh" src="https://www.shreeagt.com/img/office/contact_shree.svg" />
        </Flex>
    </Flex>
  )
}

export default ContactHeader