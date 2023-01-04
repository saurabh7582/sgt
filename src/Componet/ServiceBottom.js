import { Box, Heading, Stack, VStack, Text, Button, } from '@chakra-ui/react'
import React,{useState} from 'react'

function ServiceBottom() {
    
    const [display,changeDisplay] = useState('none')
    const [display2,changeDisplay2] = useState('none')

  return (
    <Box w="90%" boxShadow="0 0 30px 5px rgb(90 194 243 / 15%)"
        mt={["0","-100px","-100px"]} mb="10px" p={["70px","80px","50px"]} flexDirection="column" bgColor="white"
        pr="15px" pl="15px" ml="5%" mr="5%" 
        > 
        <Stack direction="column" w="100%" p="2%">
            <VStack w="25%" align="flex-start">
                <Heading 
                    fontFamily=' playfair display,serif' fontStyle="normal" fontWeight="800" 
                    fontSize="1.75rem" mb="30px" as="h3" 
                >
                    What's in it for you ?
                </Heading>
                <Text 
                    fontWeight="400" fontFamily="noto sans" 
                    fontSize="15px" line-height="24px" color="#666" 
                  > Our delivery is in every case more than customer's desire.
                </Text>
                <Button onClick={()=> changeDisplay('flex') && changeDisplay2('none')} variant='link' color='#d00a2b'>01. Agency</Button>
                <Text 
                    fontWeight="400" fontFamily="noto sans" 
                    fontSize="15px" line-height="24px" color="#666" pl="4"
                  > Get free quotation any time from our experts.
                </Text>
                <Button onClick={()=> changeDisplay2('flex') && changeDisplay('flex')} variant='link' color="black" >02. Graphics</Button>
                <Text 
                    fontWeight="400" fontFamily="noto sans" 
                    fontSize="15px" line-height="24px" color="#666" pl="4"
                  > Get increasingly canny consequence of your Business with our Creative Team.
                </Text>
                <Button  variant='link' color='black'>03. Technologies</Button>
                <Text 
                    fontWeight="400" fontFamily="noto sans" 
                    fontSize="15px" line-height="24px" color="#666" pl="4"
                  > No one but Technology can spare your thought.
                </Text>

            </VStack>
            <VStack
                display={display}
                
            >
                <Text>hi</Text>
            </VStack>
            <VStack
                display={display2}
            >
                <Text>hello</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default ServiceBottom