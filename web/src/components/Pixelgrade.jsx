import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Marketing from './Marketing'

const Pixelgrade = () => {
    return (
        <Box w={'full'} h={'100vh'} >
            <Flex padding={10} flexDirection={{ base: 'row', xl: 'row', md: 'row', sm: 'column' }} justifyContent={'space-around'} alignItems={'center'}>
                <Box w={'40%'}>
                    <Image src='./frame.png' alt='Pixelgrade' />
                </Box>
                <Box w={'60%'}>
                    <Text mb={5} fontSize={'25px'} >The unseen of spending three years at Pixelgrade</Text>
                    <Text mt={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</Text>
                    <Button mt={5} background={'#4CAF4F'} colorScheme={"#55c358"} p={3} color={'white'} fontWeight={'500'}>Learn More</Button>
                </Box>
            </Flex>
            <Box w={'full'} bg={'#F5F7FA'} p={10}>
                <Flex w={'full'} gap={20} flexDirection={{ base: 'row', xl: 'row', md: 'row', sm: 'column' }} justifyContent={{ base: 'space-around', xl: 'space-around', md: 'row', sm: 'column'}} alignItems={'center'}>
                    <Box w={'40%'} >
                        <Text mb={5} fontSize={'25px'} >Helping a local business reinvent itself</Text>
                        <Text>We reached here with our hard work and dedication</Text>
                    </Box>
                    <Box w={'60%'} justifyContent={'center'} gap={5} display={'grid'} gridTemplateColumns={'repeat(2, 2fr)'}>
                        <Flex w={170} justifyContent={'space-around'} alignItems={'center'} >
                            <Image src='./6.png' alt='6' />
                            <Box>
                                <Text fontWeight={'bold'} fontSize={'20px'}>2,245,341</Text>
                                <Text fontSize={'12px'} >Members</Text>
                            </Box>
                        </Flex>
                        <Flex w={170} justifyContent={'space-around'} alignItems={'center'} >
                            <Image src='./7.png' alt='6' />
                            <Box>
                                <Text fontWeight={'bold'} fontSize={'20px'}>46,328</Text>
                                <Text fontSize={'12px'} >Clubs</Text>
                            </Box>
                        </Flex>
                        <Flex w={170} justifyContent={'space-around'} alignItems={'center'} >
                            <Image src='./8.png' alt='6' />
                            <Box>
                                <Text fontWeight={'bold'} fontSize={'20px'}>828,867</Text>
                                <Text fontSize={'12px'} >Event Bookings</Text>
                            </Box>
                        </Flex>
                        <Flex w={170} justifyContent={'space-around'} alignItems={'center'} >
                            <Image src='./9.png' alt='6' />
                            <Box>
                                <Text fontWeight={'bold'} fontSize={'20px'}>1,926,436</Text>
                                <Text fontSize={'12px'} >Payments</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Flex padding={10} gap={10}  flexDirection={{ base: 'row', xl: 'row', md: 'row', sm: 'column' }} justifyContent={'space-around'} alignItems={'center'}>
                <Box w={'40%'}>
                    <Image src='./pana.png' w={[500]} alt='Pixelgrade' />
                </Box>
                <Box w={'60%'}>
                    <Text mb={5} fontSize={'25px'} >How to design your site footer like we did</Text>
                    <Text mt={5}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</Text>
                    <Button mt={5} background={'#4CAF4F'} colorScheme={"#55c358"} p={3} color={'white'} fontWeight={'500'}>Learn More</Button>
                </Box>
            </Flex>
            <Flex bg={'#F5F7FA'}  flexDirection={{ base: 'row', xl: 'row', md: 'row', sm: 'column' }} padding={10} gap={10} justifyContent={'space-around'} alignItems={'center'}>
                <Box w={'40%'}>
                    <Image src='./tesla.png' w={[500]} alt='Pixelgrade' />
                </Box>
                <Box w={'60%'}>
                    <Text mb={5} fontSize={'20px'} >Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</Text>
                    <Text fontWeight={'bold'} color={'#4CAF4F'}>Tim Smith</Text>
                    <Text>British Dragon Boat Racing Association</Text>
                    <Flex mt={5} w={'full'} justifyContent={'space-around'} alignItems={'center'}>
                        <Image src='./11.png' alt="log" />
                        <Image src='./12.png' alt="log" />
                        <Image src='./13.png' alt="log" />
                        <Image src='./14.png' alt="log" />
                        <Image src='./15.png' alt="log" />
                        <Image src='./16.png' alt="log" />
                        <Text cursor={'pointer'} display={'flex'} justifyContent={'space-around'} alignItems={'center'} fontWeight={'bold'} color={'#4CAF4F'}>Meet all customers<IoIosArrowRoundForward /></Text>
                    </Flex>
                </Box>
            </Flex>
            <Marketing />
        </Box>
    )
}

export default Pixelgrade