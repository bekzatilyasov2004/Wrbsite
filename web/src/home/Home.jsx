import { Box, Button, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import OurClients from '../components/OurClients'
import Pixelgrade from '../components/Pixelgrade'

const Home = () => {
  return (
    <Box w={"100%"} overflowX={'hidden'} h={'100vh'} bg={'#F5F7FA'} m={0} p={0} boxSizing={'border-box'}>
      <Header />
      <Box w={'100%'} height={'85vh'} p={{ base: 4, md: 10 }}>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          w={'full'}
          h={'75vh'}
          justify={'center'}
          textAlign={{base:'center',md:'start'}}
        >
          <Box w={{ base: 'full', md: '50%' }} pr={{ base: 0, md: 10 }}>
            <Text mb={7} fontSize={{ base: '24px', md: '40px' }} fontWeight={'500'}>
              Lessons and insights from 8 years
            </Text>
            <Text mb={7} fontSize={{ base: '14px', md: 'inherit' }}>
              Where to grow your business as a photographer: site or social media?
            </Text>
            <Button
              background={'#4CAF4F'}
              colorScheme={"#55c358"}
              p={3}
              color={'white'}
              fontWeight={'500'}
              mt={5}
            >
              Register
            </Button>
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w={{ base: 'full', md: '50%' }} mt={{ base: 10, md: 0 }}>
            <Image src={'/png.png'} alt={'png'} />
          </Box>
        </Flex>
      </Box>
      <OurClients />
      <Box mt={10}>
        <Pixelgrade />
      </Box>
    </Box>
  )
}

export default Home