import { Box, Button, Image, Flex, Link, IconButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { IoIosArrowRoundForward, IoIosMenu, IoIosClose } from "react-icons/io";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w={'100%'} bg={'#ffffff'} borderBottom="1px solid #e2e8f0" position="sticky" top={0} zIndex={100}>
      <Flex
        w={'100%'}
        h={'100px'}
        px={{ base: 4, md: 10 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Image src='/logo.png' alt={'logo'} w={{ base: 150, md: 180 }} />
        </Box>
        <Flex
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'start', md: 'space-around' }}
          position={{ base: 'absolute', md: 'static' }}
          top={{ base: '100px', md: 'auto' }}
          left={0}
          w={{ base: '100%', md: '350px' }}
          bg={{ base: '#ffffff', md: 'transparent' }}
          p={{ base: 4, md: 0 }}
          borderTop={{ base: '1px solid #e2e8f0', md: 'none' }}
        >
          <ReactLink to="/">Home</ReactLink>
          <ReactLink to="/features">Features</ReactLink>
          <ReactLink to="/community">Community</ReactLink>
          <ReactLink to="/blog">Blog</ReactLink>
          <ReactLink to="/pricing">Pricing</ReactLink>
        </Flex>
        <Box>
          <Button
            background={'#4CAF4F'}
            colorScheme={"#55c358"}
            p={3}
            color={'white'}
            fontWeight={'500'}
            rightIcon={<IoIosArrowRoundForward />}
            display={{ base: 'none', md: 'inline-flex' }}
          >
            Register now
          </Button>
          <IconButton
            aria-label="Toggle menu"
            icon={isOpen ? <IoIosClose /> : <IoIosMenu />}
            onClick={isOpen ? onClose : onOpen}
            display={{ base: 'inline-flex', md: 'none' }}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Header