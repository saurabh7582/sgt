import React,{useState,useEffect} from 'react'
import { Flex, Heading, IconButton, VStack, Spacer, Link, Button, Box, Icon, Divider, Text, Image  } from "@chakra-ui/react";

import {useColorMode, useColorModeValue} from "@chakra-ui/color-mode"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function Head() {
   
    const [display,changeDisplay] = useState('none')
    const color = useColorModeValue('white', 'gray.800')
    const [image, setImage] = useState('https://res.cloudinary.com/ssdeveloper/image/upload/v1672330952/sgt/backgroundshree_avk2lm.jpg')
    const [white,setWhite] = useState('white')
    
    const [bgcolor,setBgColor] = useState('')
    const [colorHead,setColorHead] = useState('')
    
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setBgColor('white')
            setColorHead('black')
        } else {
            setBgColor('')
            setColorHead('white')
        }
      }

      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })
    return (
        <>

       <Flex w="100%" position="fixed" p="3"  backgroundColor={bgcolor} zIndex={20} overflowY="auto">
            <Flex direction="column" pl="5">
                <Image  w="100px" h="57" src='https://res.cloudinary.com/ssdeveloper/image/upload/v1672324897/sgt/shreeagtlogo_rx9kqp.png'></Image>
            </Flex>
        <Spacer></Spacer>
        
        {/* Desktop navigation  */}
        <Flex alignSelf="center" display={["none","flex","flex"]}>
          <Link href='/' _focus="none" >
              <Button as="a"  variant='ghost' color={colorHead}  >
                Home
              </Button>
            </Link>
          <Link href='/work' _focus="none" >
              <Button as="a"  variant='ghost' color={colorHead} >
                Work
              </Button>
            </Link>
            <Link href='/services' _focus="none" >
              <Button as="a"  variant='ghost' color={colorHead} >
                Services
              </Button>
            </Link>
            <Link href='/contact' _focus="none" >
              <Button as="a"  variant='ghost' color={colorHead} >
                Contact
              </Button>
            </Link>
        </Flex>
        <Flex alignSelf="flex-end" pl={15}>
        </Flex>
       <Flex alignSelf="end" >

        {/* Mobile Navigation */}
        <IconButton 
          as={HamburgerIcon}
           mr={["0","2","none","none"]}
          size="md"
          
          display={["flex","none","none"]}
          onClick={()=> changeDisplay('flex')}  
        />
       </Flex>
        
       </Flex>
      
       
       {/* <Icon as={HamburgerIcon}  boxSize={14} /> */}
       
       {/* hamburgercloseIcon */}
       <Flex
        w="100vw"
        display={display}
        bgColor={color}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
       >  
          <Flex justifyContent="flex-end" >
            <Box
              mt="10"
              borderRadius="50%"
              
              mr={10}
              p="25"
            >
              <Icon
                size="sm"
                as={CloseIcon}
                color={["dark","white"]}
                onClick={()=> changeDisplay('none')}
              >
              </Icon>
            </Box>
          </Flex>

          {/* navigation divder */}
          
          <Flex
            flexDirection="column"
            align="center"
            mt="5"
            ml="5"
            backgroundImage="https://res.cloudinary.com/ssdeveloper/image/upload/v1672330952/sgt/backgroundshree_avk2lm.jpg"
          >
              <Link href='/' _focus="none" >
                <Button as="a"  variant='ghost' fontSize='lg' pt='10' pb="5" color="white" >
                    Home
                  </Button>
              </Link>
              <Divider ml="5" mr="5" orientation='horizontal' />
              <Link href='/work' _focus="none" >
                <Button as="a"  variant='ghost' fontSize='lg' pt='10' pb="5" color="white" >
                    Work
                  </Button>
              </Link>
              <Divider ml="5" mr="5" orientation='horizontal' />
              <Link href='/services' _focus="none" >
                <Button as="a"  variant='ghost' fontSize='lg' pt='10' pb="5" color="white">
                  Services
                </Button>
              </Link>
              <Divider ml="5" mr="5" orientation='horizontal' />
              <Link href='/contact' _focus="none" >
                <Button as="a"  variant='ghost' fontSize='lg' pt='10' color="white">
                  Contact
                </Button>
              </Link>
              <Divider mt='5' orientation='horizontal' />
          </Flex>
          
       </Flex>
       </>
)}

export default Head