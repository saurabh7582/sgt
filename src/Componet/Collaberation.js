import { Image, Stack, Heading, Button } from '@chakra-ui/react'
import React from 'react'

function Collaberation() {
  return (
    <Stack bgColor="#f5f5f5" direction={["column","row","row"]} w="100%" >
        <Stack w={["100%","20%","20%"]}  pt="10">
            <Image src="https://www.shreeagt.com/img/raviprakash-sir-vector.jpg" 
                borderRadius="50%" w={["50%","50%","50%"]}  alignSelf="center" />
        </Stack>
        <Stack w={["100%","60%","60%"]} p="10"  direction="column">
            <Heading 
                fontFamily=' playfair display,serif' fontWeight="800" 
                fontSize={["33px","44px","44px"]} mb="30px" as="h3" 
            >
                Let's Collaborate
            </Heading>
            <Heading 
                fontFamily='noto sans'  fontWeight="400" lineHeight="30px"
                fontSize="18px"  as="h5" 
            >
               We’ve empowered hundreds of clients to maximise their business growth online. Speak to Ravi – let’s work together.
            </Heading>
        </Stack>
        <Stack  w={["100%","20%","20%"]} p={["5","0","10"]}  direction="column">
            <Button mt={["0","95px","95px"]} color="white" bgColor="#1d2124" border="#1d2124" w={["50%","100%","100%"]} alignSelf="center">
                GET IN TOUCH 
            </Button>
        </Stack>
    </Stack>
  )
}

export default Collaberation