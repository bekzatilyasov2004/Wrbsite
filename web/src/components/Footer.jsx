import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaInstagram, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <Box w={'full'}>
            <Box bg={'#F5F7FA'} w={'full'} p={[5, 10]} textAlign={'center'}>
                <Text fontSize={['30px', '50px']} fontWeight={'bold'}>Pellentesque suscipit fringilla libero eu.</Text>
                <Text mt={'10'} cursor={'pointer'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontWeight={'bold'} color={'#4CAF4F'}>Get a Demo<IoIosArrowRoundForward /></Text>
            </Box>
            <Box bg={'#263238'} p={[5, 10]} color={'#ffffff'} w={'full'}>
                <Flex w={'full'} flexDirection={{ base: 'row', xl: 'row', md: 'row', sm: 'column' }} justifyContent={'start'} alignItems={'start'} gap={[5, 0]}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-around'} alignItems={['center', 'start']} >
                        <Box display={'flex'} alignItems={'center'} >
                            <Image src='./icn.png' alt='logo' w={'45px'} />
                            <Text fontSize={['25px', '35px']} fontWeight={'bold'} color={'#fff'}>Nexcent</Text>
                        </Box>
                        <Text mt={20} textAlign={['center', 'left']}>Copyright © 2024 Landify UI Kit.</Text>
                        <Text textAlign={['center', 'left']}>All rights reserved</Text>
                        <Box mt={10} gap={5} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                            <FaInstagram size={20} />
                            <FaTelegram size={20} />
                            <FaTwitter size={20} />
                            <FaYoutube size={20} />
                        </Box>
                    </Box>
                    <Box w={'full'}>
                        <Flex flexDirection={{ base: 'row', xl: 'row', md: 'row', sm: 'column' }} justifyContent={'space-around'} alignItems={'start'} gap={[5, 0]}>
                            <Box display={'flex'} justifyContent={['center', 'space-around']} alignItems={'start'} flexDirection={'column'}>
                                <Text fontSize={['18px', '25px']}>Company</Text>
                                <Text mt={4} textAlign={['center', 'left']}>About us</Text>
                                <Text mt={4} textAlign={['center', 'left']}>Blog</Text>
                                <Text mt={4} textAlign={['center', 'left']}>Contact us</Text>
                                <Text mt={4} textAlign={['center', 'left']}>Pricing</Text>
                                <Text mt={4} textAlign={['center', 'left']}>Testimonials</Text>
                            </Box>
                            <Box display={'flex'} justifyContent={['center', 'space-around']} alignItems={'start'} flexDirection={'column'}>
                                <Text fontSize={['18px', '25px']}>Support</Text>
                                <Text mt={4} textAlign={['center', 'left']}>Help center</Text>
                                <Text mt={4} textAlign={['center', 'left']}>Terms of service</Text>
                                <Text mt={4} textAlign={['center', 'left']}>Legal</Text>
                                <Text mt={4} textAlign={['center', 'left']}>Privacy policy</Text>
                                <Text mt={4} textAlign={['center', 'left']}>Status</Text>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} alignItems={['center', 'start']}>
                                <Text fontSize={['18px', '25px']}>Stay up to date</Text>
                                <Input mt={10} placeholder='Your email address' />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Footer