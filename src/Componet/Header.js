import { Flex, Heading, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Flex w="100%" h="fit-content"  p="15"  backgroundImage="https://res.cloudinary.com/ssdeveloper/image/upload/v1672330952/sgt/backgroundshree_avk2lm.jpg">
        <Flex w={["100%","50%","50%"]} align="center"  direction="column"  pt="40">
            <Heading fontSize={["24px","40px","40px"]} fontWeight="800" textAlign="center" color="white">
                We are full range <br></br>
                design & development agency in <br/> India.
            </Heading>
            <Text fontWeight="400" lineHeight="24px" fontFamily="not sans" fontSize={["13px","medium","medium"]} 
                pt="5"  textAlign="center" color="white">
                Over the last 10 years, Shree AGT Multimedia <br/>
                has helped big brands & small businesses drive <br/>
                digital transformation by delivering creative <br/>
                websites and innovative web portals.
            </Text>
            <Flex direction="row">
                <Button mr="5" mt="5" variant='solid' backgroundColor="#d00a2b" color="white" >VIEW SHOWCASE</Button>
                <Button  mt="5" variant='outline' color="white"  >Learn More</Button>                    
            </Flex>
            <Flex align="center" alignContent="center" direction="column" 
                pt="10" display={["flex","none","none"]} >
                <Image w="max-content" h="80vh" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672331841/sgt/shree-agt-final_rtiuqx.png" />   
            </Flex>
        </Flex>
        <Flex w={["100%","50%","50%"]} align="center" alignContent="center" direction="column" 
             pt="10" display={["none","flex","flex"]} >
            <Image w="max-content" h="80vh" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672331841/sgt/shree-agt-final_rtiuqx.png" />
        </Flex>
    </Flex>
  )
}
