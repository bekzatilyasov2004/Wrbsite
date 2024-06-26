import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const OurClients = () => {
    return (
        <Box w={"100%"} bg={'#ffffff'} p={10} >
            <Flex flexDirection={'column'} gap={10} justifyContent={'center'} alignItems={'center'}>
                <Box textAlign={'center'}>
                    <Text fontSize={'25px'} >Our Clients</Text>
                    <Text>We have been working with some Fortune 500+ clients</Text>
                </Box>
                <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} w={'100%'}>
                    <Image src='1.png' alt='1' />
                    <Image src='2.png' alt='1' />
                    <Image src='3.png' alt='1' />
                    <Image src='4.png' alt='1' />
                    <Image src='5.png' alt='1' />
                </Box>
            </Flex>
            <Flex mt={20} flexDirection={'column'} gap={10} justifyContent={'center'} alignItems={'center'}>
                <Box textAlign={'center'}>
                    <Text fontSize={'25px'} >Manage your entire community in a single system</Text>
                    <Text>Who is Nextcent suitable for?</Text>
                </Box>
                <Box display={'flex'} flexDirection={{base:'column', md: 'none'}} justifyContent={'space-around'} alignItems={'center'} gap={10}> 
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} w={'100%'}>
                        <Box gap={5} textAlign={'center'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} w={'250px'} h={'400px'} >
                            <Image src='./Vector.png' alt='vector' />
                            <Text fontSize={'25px'} >Membership Organisations</Text>
                            <Text>Our membership management software provides full automation of membership renewals and payments</Text>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} w={'100%'}>
                        <Box gap={5} textAlign={'center'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} w={'250px'} h={'400px'} >
                            <Image src='./Icon.png' alt='vector' />
                            <Text fontSize={'25px'} >National Associations</Text>
                            <Text>Our membership management software provides full automation of membership renewals and payments</Text>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} w={'100%'}>
                        <Box gap={5} textAlign={'center'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} w={'250px'} h={'400px'} >
                            <Image src='./icons.png' alt='vector' />
                            <Text fontSize={'25px'} >Clubs And Groups</Text>
                            <Text>Our membership management software provides full automation of membership renewals and payments</Text>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default OurClients