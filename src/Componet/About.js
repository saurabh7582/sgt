import React from 'react'
import {  Stack,Text, VStack, Flex, Image, Heading, Button, Link } from '@chakra-ui/react'

function About() {
  return (
    <Stack >
        <Stack direction={['column','row','row']}>
              
              <Flex direction="column" w={["100%","50%","50%"]} p="10">  
                <Heading 
                  color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                  fontSize={["13px","13px","15px"]} lineHeight="24px">
                  Who we are?
                </Heading>
                <Heading 
                  fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                  fontSize={["33px","33px","44px"]} mb="30px">
                    We Design Memorable Experience that people love.
                </Heading>
                <VStack >
                  
                  <Text 
                    fontWeight="400" fontFamily="noto sans" 
                    fontSize="15px" line-height="24px" color="#666"
                  > Welcome to the Shree AGT Multimedia, an organisation that started in 2015. We are an organization of dynamic web solutions located in India. We're building web apps, mobile apps.
                  </Text>
                  <Text 
                    fontWeight="400" fontFamily="noto sans" 
                    fontSize="15px" line-height="24px" color="#666"
                  > Shree AGT Multimedia is an IT consulting and product development software company designing, implementing and delivering AI and Machine Learning-based solutions.These are available to consumers across the US, UAE and India via cloud, smartphone and embedded software products.
                  </Text>
                  <Text 
                    fontWeight="400" fontFamily="noto sans" 
                    fontSize="15px" line-height="24px" color="#666" mb="30px"
                  > The clients include start-ups as well as some of the well-known businesses. Focused on IoT powered by artificial intelligence, we create this.
                  </Text>
                  
                  <Flex direction="row" align="flex-start" alignSelf="flex-start" p="10" justifyContent="space-between">
                    <Link href='/about' w="full" alignSelf="flex-start" >
                        <Button 
                            color='#fff' backgroundColor="#343a40" borderColor="#343a40" variant='solid'
                            fontSize="14px" lineheight="1.5" fontWeight="400" border="1px solid" borderRadius="0"
                        >
                        About Company
                        </Button>
                    </Link>
                    <Flex direction="column" >
                        <Heading fontWeight="700" fontSize={["30px","30px","40px"]} ml="60px" lineHeight="35px">
                            245+
                        </Heading>
                        <Text fontWeight="400" textAlign="end" pt="2" fontSize="14px" > 
                            Suceeded projects
                        </Text>
                    </Flex>
                  </Flex>

                </VStack>
              </Flex>

            {/* first half  */}
            <Flex direction="column" w={["100%","50%","50%"]} p="10">
                {/* <AiOutlinePlayCircle /> */}
                <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672385265/sgt/creativity-animate_b84y15.svg" />
                {/* </Box> */}
              </Flex>
            </Stack>
    </Stack>
  )
}

export default About