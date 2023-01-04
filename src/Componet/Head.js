import React,{useState,useEffect} from 'react'
import { Flex, IconButton, Link, Spacer, Button, Box, Icon, Divider, Image  } from "@chakra-ui/react";


import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function Head() {
   
    const [display,changeDisplay] = useState('none')
    
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
              
          </Flex>
          
       </Flex>
       </>
)}

export default Head