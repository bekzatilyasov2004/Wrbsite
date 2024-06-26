import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Footer from './Footer'

const Marketing = () => {
    return (
        <Box w={'full'} >
            <Flex  flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Box bg={'#F5F7FA'} w={'full'} p={5} textAlign={'center'}>
                    <Text fontSize={'25px'} >Caring is the new marketing</Text>
                    <Text>The Nextcent blog is the best place to read about the latest membership insights,<br /> trends and more. See who's joining the community, read about how our community<br /> are increasing their membership income and lot's more.​</Text>
                </Box>
                <Box gap={'10px'} flexDirection={{ base: 'row', xl: 'row', md: 'row', sm: 'column' }} w={'full'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Image src='./17.png' alt='img' />
                        <Box mt={'-80px'} h={'150px'} display={'flex'} justifyContent={'space-around'} flexDirection={'column'}  boxShadow={'0 0 5px'} borderRadius={10} bg={'#fff'} w={'220px'} textAlign={'center'} p={2} >
                            <Text>Creating Streamlined Safeguarding Processes with OneRen</Text>
                            <Text cursor={'pointer'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontWeight={'bold'} color={'#4CAF4F'}>Readmore<IoIosArrowRoundForward /></Text>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Image src='./18.png' alt='img' />
                        <Box mt={'-80px'} h={'150px'} display={'flex'} justifyContent={'space-around'} flexDirection={'column'}  boxShadow={'0 0 5px'} borderRadius={10} bg={'#fff'} w={'220px'} textAlign={'center'} p={2} >
                            <Text>What are your safeguarding responsibilities and how can you manage them?</Text>
                            <Text cursor={'pointer'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontWeight={'bold'} color={'#4CAF4F'}>Readmore<IoIosArrowRoundForward /></Text>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Image src='./19.png' alt='img' />
                        <Box mt={'-80px'} h={'150px'} display={'flex'} justifyContent={'space-around'} flexDirection={'column'}  boxShadow={'0 0 5px'} borderRadius={10} bg={'#fff'} w={'220px'} textAlign={'center'} p={2} >
                            <Text>Revamping the Membership Model with Triathlon Australia</Text>
                            <Text cursor={'pointer'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontWeight={'bold'} color={'#4CAF4F'}>Readmore<IoIosArrowRoundForward /></Text>
                        </Box>
                    </Box>
                </Box>
            </Flex>
            <Box mt={60}>
                <Footer />
            </Box>
        </Box>
    )
}

export default Marketing