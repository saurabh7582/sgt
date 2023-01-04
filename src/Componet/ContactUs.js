import { Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Image, Text, VStack, Link } from '@chakra-ui/react'
import React from 'react'
import { AiFillHome } from "react-icons/ai";

function ContactUs() {
  return (
    <Stack>
        <Breadcrumb bgColor="#e9ecef" >
            <BreadcrumbItem pl="10">
                <AiFillHome size="15"  />
                <BreadcrumbLink href='#' pl="2">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contact Us</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Stack  w="100%">
            <Stack align="center" w="100%" p="10">
            <Heading 
                fontFamily=' playfair display,serif' fontWeight="800" 
                fontSize={["33px","44px","44px"]} mb="30px" as="h3" 
            >
                 Contact Us 
            </Heading>  
            </Stack>

            <Stack  as="Flex" justifyContent="space-between" w="100%" direction={["column","row","row"]} p={["5","10","10"]} >
                {/* phone & email */}
                <Stack direction="row" w={["100%","33%","33%"]} >
                    <Image src="https://www.shreeagt.com/img/icon/call.png" w="20%"   />
                    <VStack >
                        <Heading as="h6" fontSize="16px" mb="20px" >
                            Phone & Email
                        </Heading>
                        <Link href='tel: +91 8879740609' mt="-2">
                            <Text color="#666" fontSize="15px" fontWeight="normal" fontFamily="Noto Sans" >
                                +91 8879740609
                            </Text>
                        </Link>
                        <Link href='mailto:info@shreeagt.com' mt="-2">
                            <Text color="blue" fontSize="15px" fontWeight="normal" fontFamily="Noto Sans" >
                                info@shreeagt.com
                            </Text>
                        </Link>
                    </VStack>
                </Stack>

                {/* working & hours */}
                <Stack direction="row" w={["100%","33%","33%"]} pt={["5","0","0"]} >
                    <Image src="https://www.shreeagt.com/img/icon/clockk.png" w="20%"   />
                    <VStack>
                        <Heading as="h6" alignSelf="flex-start" fontSize="16px" mb="20px" >
                            Working & Hour
                        </Heading>
                            <Text color="#666" fontSize="15px" fontWeight="normal" fontFamily="Noto Sans" >
                                Monday to Saturday - 10am to 7pm
                                <br />
                                Sunday - Closed 
                            </Text>
                    </VStack>
                </Stack>
                {/* Office address */}
                <Stack direction="row" w={["100%","33%","33%"]} pt={["5","0","0"]} >
                    <Image src="https://www.shreeagt.com/img/icon/location.png" w="20%"   />
                    <VStack>
                        <Heading as="h6" alignSelf="flex-start" fontSize="16px" mb="20px" >
                            Office & Address
                        </Heading>
                            <Text color="#666" fontSize="15px" fontWeight="normal" fontFamily="Noto Sans" >
                                Shop no. 15,16, Kashturi Heights, opp. RBK Global School, Indralok Phase-6, Bhayandar East, Thane-401105, Maharashtra, India  
                            </Text>
                    </VStack>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default ContactUs