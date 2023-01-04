import { Image, Stack, Text, Heading, ListItem, List, ListIcon, Divider, HStack, Flex } from '@chakra-ui/react'
import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { MdLocationPin, MdCall, MdAccessTimeFilled } from 'react-icons/md';
import { ArrowRightIcon } from '@chakra-ui/icons'
import { BsFillCircleFill } from "react-icons/bs";

function Footer() {
  return (
    <Stack w="100%" pl="12px" pr="12px" ml="auto" mr="auto" backgroundColor="#000" pt="60px" pb="40px" >
        <Stack direction={["Column","Column","row"]}>

            {/* first column/ */}
            <Stack w={["100%","33%","20%"]} pl="10"  >
                <Image src="https://www.shreeagt.com/img/logo-light.png" w="88px" h="50px"  />
            <Text 
                fontWeight="400" fontFamily="noto sans" 
                fontSize="12px" line-height="24px" color="#a2a2a2" 
            > 
                We’re a team of creatives who are excited about unique ideas and help digital and fin-tech companies to create amazing identity
            </Text>
            <Stack direction="row" >
                <AiFillFacebook size="18px" w="32px" h="32px" background=" rgba(222,222,222,.109)" display="inline-block"
                    text-align="center" line-height="33px" color="#b8b8b8" margin-right="10px" />
                <AiFillTwitterCircle size="18px" w="32px" h="32px" background=" rgba(222,222,222,.109)" display="inline-block"
                    text-align="center" line-height="33px" color="#b8b8b8" margin-right="10px" />
                <AiFillLinkedin size="18px" w="32px" h="32px" background=" rgba(222,222,222,.109)" display="inline-block"
                    text-align="center" line-height="33px" color="#b8b8b8" margin-right="10px" />
                <AiFillInstagram size="18px" w="32px" h="32px" background=" rgba(222,222,222,.109)" display="inline-block"
                    text-align="center" line-height="33px" color="#b8b8b8" margin-right="10px" />
                <AiFillYoutube size="18px" w="32px" h="32px" background=" rgba(222,222,222,.109)" display="inline-block"
                    text-align="center" line-height="33px" color="#b8b8b8" margin-right="10px" />
            </Stack>
            </Stack>

            {/* second Column */}
            <Stack w={["100%","33%","20%"]} pt={["2","0","0"]} pl="10" direction="column" >
                <Heading fontSize="18px" fontWeight="600" fontFamily="playfair display,serif" color="white">
                    Company
                </Heading>
                <List spacing="3">
                    <ListItem>
                        <Stack direction="row">
                            <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                            <Text fontSize="14px" color='#a2a2a2' >
                                Home
                            </Text>
                        </Stack>
                    </ListItem>
                    <ListItem>
                        <Stack direction="row">
                            <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                            <Text fontSize="14px" color='#a2a2a2' >
                                About Us
                            </Text>
                        </Stack>
                    </ListItem>
                    <ListItem>
                        <Stack direction="row">
                            <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                            <Text fontSize="14px" color='#a2a2a2' >
                                Contact Us
                            </Text>
                        </Stack>
                    </ListItem>
                </List>

                <Heading fontSize="18px" fontWeight="600" pt="2" fontFamily="playfair display,serif" color="white">
                    Online Marketing
                </Heading>
                <List spacing="3">
                    <ListItem>
                        <Stack direction="row">
                            <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                            <Text fontSize="14px" color='#a2a2a2' >
                                Search Engine Optimization
                            </Text>
                        </Stack>
                    </ListItem>
                    <ListItem>
                        <Stack direction="row">
                            <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                            <Text fontSize="14px" color='#a2a2a2' >
                                Social Media Optimization
                            </Text>
                        </Stack>
                    </ListItem>
                    <ListItem>
                        <Stack direction="row">
                            <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                            <Text fontSize="14px" color='#a2a2a2' >
                                Search engine marketing
                            </Text>
                        </Stack>
                    </ListItem>
                </List>
            </Stack>

                {/* third column */}
            <Stack w={["100%","33%","20%"]} pl="10"  >
                <Heading fontSize="18px" fontWeight="600" pt={["2","0","0"]}  fontFamily="playfair display,serif" color="white">
                        Web Application
                </Heading>
                    <List spacing="3">
                        <ListItem>
                            <Stack direction="row">
                                <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#a2a2a2' />
                                <Text fontSize="14px" color='#a2a2a2' >
                                    Responsive Website Design
                                </Text>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack direction="row">
                                <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                                <Text fontSize="14px" color='#a2a2a2' >
                                    Custom CMS Development
                                </Text>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack direction="row">
                                <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                                <Text fontSize="14px" color='#a2a2a2' >
                                    custom Application
                                </Text>
                            </Stack>
                        </ListItem>
                    </List>

                <Heading fontSize="18px" fontWeight="600" pt="2"  fontFamily="playfair display,serif" color="white">
                        Mobile Application
                    </Heading>
                    <List spacing="3">
                        <ListItem>
                            <Stack direction="row">
                                <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                                <Text fontSize="14px" color='#a2a2a2' >
                                    Mobile App UI Design
                                </Text>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack direction="row">
                                <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                                <Text fontSize="14px" color='#a2a2a2' >
                                    Android Application
                                </Text>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack direction="row">
                                <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                                <Text fontSize="14px" color='#a2a2a2' >
                                    iPhone Application
                                </Text>
                            </Stack>
                        </ListItem>
                    </List>
            </Stack>

            {/* fourth column */}
            <Stack direction="column" w={["100%","33%","20%"]} pl="10">
                <Heading as="h3" fontSize="18px" fontWeight="600" pt={["2","0","0"]} fontFamily="playfair display,serif" color="white">
                    Contact us
                </Heading>
                <Stack direction="row">
                    <MdLocationPin size="22" color="white" w="80px" h="80px" radius="2px" mt="2px" />
                    <Text                    
                        fontSize="13px" padding-left="22px" color="#a2a2a2"
                    >
                        Shree AGT Multimedia , Bunglow No. 1, Seven Square Academy Lane, Opp. Ideal Park, Mira Bhayander.
                    </Text>
                </Stack>
                <Stack direction="row">
                    <MdCall size="18px" color="white" w="40px" h="40px" radius="2px" mt="2px" />
                    <Text                    
                        fontSize="13px" padding-left="22px" color="#a2a2a2" 
                    >
                        +91 8879740609 
                    </Text>
                </Stack>
                    <Text                    
                    fontSize="13px" padding-left="12" color="#a2a2a2" pl="8"
                    >
                        info@shreeagt.com 
                    </Text>
                <Stack direction="row">
                    <MdAccessTimeFilled size="18px" color="white" w="40px" h="40px" radius="2px" mt="2px" />
                    <Text                    
                        fontSize="13px" padding-left="22px" color="#a2a2a2"
                    >
                        Monday to Saturday - 10am to 7pm Sunday - Closed 
                    </Text>
                </Stack>
            </Stack>

            {/* fifth column/ */}
            <Stack direction="column" w={["100%","33%","20%"]} pl="10"  >
                <Heading as="h3" fontSize="18px" fontWeight="600" pt={["2","0","0"]} fontFamily="playfair display,serif" color="white">
                    Job Opportunity
                </Heading>
                <Text                    
                fontSize="13px" padding-left="22px" color="#a2a2a2"
                >
                    Looking for a job opportunity?  
                </Text>
                <List>
                    <ListItem>
                        <Stack direction="row">
                            <ListIcon as={ArrowRightIcon}  lineHeight="1" color='#666' />
                            <Text fontSize="14px" color='#a2a2a2' >
                                See open positions
                            </Text>
                        </Stack>
                    </ListItem>
                </List>
            </Stack>

        </Stack >
        
        <Divider border="1px solid #2f2f2f" w="100%"  />
        
        <Text fontSize="13px" color='#a2a2a2' pt="10px" textAlign="center"  >
            @ 2023 All Rights Reserved. Privacy Policy 
        </Text>

        <Stack direction="row" alignSelf="center">
            <List>
                <HStack as={Flex} justifyContent="space-between">

                    <ListItem>
                        <HStack>
                            <BsFillCircleFill size="10" lineHeight="1" color='#666' />
                            <Text color="#a2a2a2" fontSize="14px" >Disclaimer</Text>
                        </HStack>
                    </ListItem>

                    <ListItem>
                        <HStack>
                            <BsFillCircleFill size="10" lineHeight="1" color='#666' />
                            <Text color="#a2a2a2" fontSize="14px" >Term And Condition</Text>
                        </HStack>
                    </ListItem>
                    
                    <ListItem>
                        <HStack>
                            <BsFillCircleFill size="10" lineHeight="1" color='#666' />
                            <Text color="#a2a2a2" fontSize="14px" >Privacy Policy</Text>
                        </HStack>
                    </ListItem>
                    
                    <ListItem>
                        <HStack>
                            <BsFillCircleFill size="10" lineHeight="1" color='#666' />
                            <Text color="#a2a2a2" fontSize="14px" >Refund Policy</Text>
                        </HStack>
                    </ListItem>
                </HStack>
            </List>
        </Stack>
    </Stack>
  )
}

export default Footer