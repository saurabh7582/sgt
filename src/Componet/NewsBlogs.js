import { Flex, Stack, Heading, Button, Image, Text, List, ListItem, HStack, VStack, Divider } from '@chakra-ui/react'
import React from 'react'

function NewsBlogs() {
  return (
    <Stack
        bgColor="#f8f8f8" p="80px 0px 50px" mt="20"
    >
        <Stack direction="Column">
            <Heading 
                color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                fontSize={["13px","13px","15px"]} lineHeight={["22px","22px","24px"]} pl="10"
            >
                News & Blogs
            </Heading>
        </Stack>
        <Stack as={Flex} direction="row" w="95%" justifyContent="space-between" mr="5">
            <Heading 
                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                fontSize={["33px","33px","44px"]} mb="30px" pl="10"
            >
                Every single update from here.
            </Heading>
            <Button
                fontSize="14px" p="10px 30px" bgColor="#343a40" color="white" align="flex-end" 
                display={["none","none","flex"]}
            >
                View Blogs
            </Button>
        </Stack>
        <Stack direction={["column","row","row"]} w="100%">
            {/* first row */}
            <Stack w={["100%","50%","50%"]} direction="column">
                <Image borderRadius="20" w="80%" ml="10" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672747178/sgt/1660981376-How_to_Install_XAMPP_on_MacOS3_gxjcq9.jpg" />
                <Text
                    font-weight="600" pl="10" pt="5"
                >Aug 20, 2022</Text>
                <Heading 
                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                fontSize={["20px","20px","26px"]} mb="30px" pl="10"
                >
                    How to Install XAMPP on MacOS ?
                </Heading>
                <Text 
                    fontWeight="400" fontFamily="noto sans" 
                    fontSize="15px" line-height="24px" color="#666" pl="10"
                > 
                    XAMPP is a free and open-source, cross-platform web server 
                    solution stack which is developed by Apache Friends.
                    XAMPP supports most of the operating systems including Windows, MacOS and Ubuntu. 
                    It stands for Cross-Platfo ...
                </Text>
                <Button  variant='link' color='#d00a2b' alignSelf="flex-start" pl="10">Read More >></Button>
            </Stack>
            {/* second row */}
            <Stack direction="column" w={["100%","50%","50%"]} maxH="480px" overflowY="auto" pl="5" pt={["5","0","0"]}>
                <List spacing={3}>
                    <ListItem>
                        <HStack>
                            <Image borderRadius="20" w="40%" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672747178/sgt/1660981376-How_to_Install_XAMPP_on_MacOS3_gxjcq9.jpg" />
                            <VStack>
                                <Heading 
                                    color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                                    fontSize={["13px","13px","15px"]} lineHeight={["22px","22px","24px"]} pl="10"
                                >
                                    APR 09, 2022
                                </Heading> 
                                <Heading 
                                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                                fontSize={["20px","20px","26px"]} mb="30px" pl="10"
                                >
                                   History of Java...
                                </Heading>
                            </VStack>
                        </HStack>
                    </ListItem>
                    <Divider border="1px solid " />
                    <ListItem>
                        <HStack>
                            <Image borderRadius="20" w="40%" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672747178/sgt/1660981376-How_to_Install_XAMPP_on_MacOS3_gxjcq9.jpg" />
                            <VStack>
                                <Heading 
                                    color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                                    fontSize={["13px","13px","15px"]} lineHeight={["22px","22px","24px"]} pl="10"
                                >
                                    APR 09, 2022
                                </Heading> 
                                <Heading 
                                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                                fontSize={["20px","20px","26px"]} mb="30px" pl="10"
                                >
                                   History of Java...
                                </Heading>
                            </VStack>
                        </HStack>
                    </ListItem>
                    <Divider border="1px solid " />
                    <ListItem>
                        <HStack>
                            <Image borderRadius="20" w="40%" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672747178/sgt/1660981376-How_to_Install_XAMPP_on_MacOS3_gxjcq9.jpg" />
                            <VStack>
                                <Heading 
                                    color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                                    fontSize={["13px","13px","15px"]} lineHeight={["22px","22px","24px"]} pl="10"
                                >
                                    APR 09, 2022
                                </Heading> 
                                <Heading 
                                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                                fontSize={["20px","20px","26px"]} mb="30px" pl="10"
                                >
                                   History of Java...
                                </Heading>
                            </VStack>
                        </HStack>
                    </ListItem>
                    <Divider border="1px solid " />
                    <ListItem>
                        <HStack>
                            <Image borderRadius="20" w="40%" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672747178/sgt/1660981376-How_to_Install_XAMPP_on_MacOS3_gxjcq9.jpg" />
                            <VStack>
                                <Heading 
                                    color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                                    fontSize={["13px","13px","15px"]} lineHeight={["22px","22px","24px"]} pl="10"
                                >
                                    APR 09, 2022
                                </Heading> 
                                <Heading 
                                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                                fontSize={["20px","20px","26px"]} mb="30px" pl="10"
                                >
                                   History of Java...
                                </Heading>
                            </VStack>
                        </HStack>
                    </ListItem>
                    <Divider border="1px solid " />
                    <ListItem>
                        <HStack>
                            <Image borderRadius="20" w="40%" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672747178/sgt/1660981376-How_to_Install_XAMPP_on_MacOS3_gxjcq9.jpg" />
                            <VStack>
                                <Heading 
                                    color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                                    fontSize={["13px","13px","15px"]} lineHeight={["22px","22px","24px"]} pl="10"
                                >
                                    APR 09, 2022
                                </Heading> 
                                <Heading 
                                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                                fontSize={["20px","20px","26px"]} mb="30px" pl="10"
                                >
                                   History of Java...
                                </Heading>
                            </VStack>
                        </HStack>
                    </ListItem>
                    <Divider border="1px solid " />
                    <ListItem>
                        <HStack>
                            <Image borderRadius="20" w="40%" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672747178/sgt/1660981376-How_to_Install_XAMPP_on_MacOS3_gxjcq9.jpg" />
                            <VStack>
                                <Heading 
                                    color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                                    fontSize={["13px","13px","15px"]} lineHeight={["22px","22px","24px"]} pl="10"
                                >
                                    APR 09, 2022
                                </Heading> 
                                <Heading 
                                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                                fontSize={["20px","20px","26px"]} mb="30px" pl="10"
                                >
                                   History of Java...
                                </Heading>
                            </VStack>
                        </HStack>
                    </ListItem>
                    <Divider border="1px solid " />
                    <ListItem>
                        <HStack>
                            <Image borderRadius="20" w="40%" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672747178/sgt/1660981376-How_to_Install_XAMPP_on_MacOS3_gxjcq9.jpg" />
                            <VStack>
                                <Heading 
                                    color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                                    fontSize={["13px","13px","15px"]} lineHeight={["22px","22px","24px"]} pl="10"
                                >
                                    APR 09, 2022
                                </Heading> 
                                <Heading 
                                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                                fontSize={["20px","20px","26px"]} mb="30px" pl="10"
                                >
                                   History of Java...
                                </Heading>
                            </VStack>
                        </HStack>
                    </ListItem>
                    <Divider border="1px solid " />
                    <ListItem>
                        <HStack>
                            <Image borderRadius="20" w="40%" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672747178/sgt/1660981376-How_to_Install_XAMPP_on_MacOS3_gxjcq9.jpg" />
                            <VStack>
                                <Heading 
                                    color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                                    fontSize={["13px","13px","15px"]} lineHeight={["22px","22px","24px"]} pl="10"
                                >
                                    APR 09, 2022
                                </Heading> 
                                <Heading 
                                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                                fontSize={["20px","20px","26px"]} mb="30px" pl="10"
                                >
                                   History of Java...
                                </Heading>
                            </VStack>
                        </HStack>
                    </ListItem>
                    <Divider border="1px solid " />
                    <ListItem>
                        <HStack>
                            <Image borderRadius="20" w="40%" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1672747178/sgt/1660981376-How_to_Install_XAMPP_on_MacOS3_gxjcq9.jpg" />
                            <VStack>
                                <Heading 
                                    color="#d00a2b" fontFamily='noto sans'  fontWeight="600" 
                                    fontSize={["13px","13px","15px"]} lineHeight={["22px","22px","24px"]} pl="10"
                                >
                                    APR 09, 2022
                                </Heading> 
                                <Heading 
                                fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                                fontSize={["20px","20px","26px"]} mb="30px" pl="10"
                                >
                                   History of Java...
                                </Heading>
                            </VStack>
                        </HStack>
                    </ListItem>
                    <Divider border="1px solid " />
                </List>
                <Button
                fontSize="14px" p="10px 30px" bgColor="#343a40" color="white" alignSelf="center" 
                display={["flex","flex","none"]} w="50%"
                >
                    View Blogs
                </Button>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default NewsBlogs