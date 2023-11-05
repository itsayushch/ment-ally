'use client'
import Navbar from '@/components/Navbar'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Center,
  Image,
  Heading,
  chakra,
  Link,
  Stack,
  Tag,
  TagLabel,
  SimpleGrid,
  Button
} from '@chakra-ui/react'

import { IconType } from 'react-icons'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsLink45Deg, BsLinkedin, BsGithub } from 'react-icons/bs';
import { GoOrganization } from 'react-icons/go';
import { TbMinusVertical } from 'react-icons/tb';

import Stats from '@/components/Stats'

interface LinkItemProps {
  name: string
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <>
      <Box pos="fixed" w={'full'} zIndex={99}>
        <Navbar />
      </Box>
      <Box
        transition="3s ease"
        bg={'gray.800'} borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: '35%' }}
        pos="fixed"
        h="full"
        {...rest}>


        <VStack spacing={5}>
          <Center>
            <Image alt='logo' src={'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            } boxSize={'200px'} mt={20} borderRadius={'2xl'} />
          </Center>

          <VStack spacing={3} color={'white'}>
            <Heading
              as="h1"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight='extrabold'

              textAlign={'center'}
              bgClip='text'
              bgGradient='linear(to-r, #00ffff,purple.500)'
            >
              Ayush Chowdhury

            </Heading>
            <Heading
              as="h1"
              fontSize={{ base: 'md', md: 'md' }}
              fontWeight={'medium'}
              pb={'5'}
            >
              <Icon as={HiOutlineLocationMarker} />&nbsp;
              Darjeeling, West Bengal |&nbsp;
              <Icon as={GoOrganization} />&nbsp;
              St. Joseph's School
            </Heading>
            <Heading
              as="h1"
              fontSize={{ base: 'md', md: 'md' }}
              fontWeight={'medium'}
            >
              <Icon as={BsLink45Deg} />&nbsp;
              <Link href='https://ayush-portfolio.vercel.app/m' isExternal>
                https://ayush-portfolio.vercel.app/
              </Link>

            </Heading>
            <Heading
              as="h1"
              fontSize={{ base: 'md', md: 'md' }}
              fontWeight={'medium'}
            >
              <Icon as={BsLinkedin} />&nbsp;
              <Link href='https://linkedin.com/in/itsayushch' isExternal>
                https://linkedin.com/in/itsayushch
              </Link>

            </Heading>
            <Heading
              as="h1"
              fontSize={{ base: 'md', md: 'md' }}
              fontWeight={'medium'}
            >
              <Icon as={BsGithub} />&nbsp;
              <Link href='https://github.com/itsayushch' isExternal>
                https://github.com/itsayushch
              </Link>

            </Heading>
            <Heading
              as="h1"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight='extrabold'

              textAlign={'center'}
              bgClip='text'
              bgGradient='linear(to-r, #00ffff,purple.500)'
            >
              Skills

            </Heading>
            <SimpleGrid spacing={2} columns={4}>
              <Tag size={'lg'} variant='subtle' colorScheme='cyan' >
                <TagLabel>Java</TagLabel>
              </Tag>
              <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
                <TagLabel>JavaScript</TagLabel>
              </Tag>
              <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
                <TagLabel>Python</TagLabel>
              </Tag>
              <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
                <TagLabel>MongoDB</TagLabel>
              </Tag>
              <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
                <TagLabel>MySQL</TagLabel>
              </Tag>
              <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
                <TagLabel>REST API</TagLabel>
              </Tag>
            </SimpleGrid>
          </VStack>

        </VStack>
      </Box>
    </>
  )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}


const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={'#F9F5E7'}>


      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Box ml={{ base: 0, md: '35%' }} bg={'gray.700'} minH={'100vh'}>
        <PhoneBox />
        <Box p={20} color={'white'} >

          <Stats />
          <br />

          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight='extrabold'
            pt={10}
            textAlign={'center'}
            bgClip='text'
            bgGradient='linear(to-r, #00ffff,purple.500)'

          >
            MY CREATIONS
          </Heading>
          <Box w="100%" my="8" h="2px" bg="white" />
          <YoutubeCard url={'https://www.youtube.com/embed/_uQrJ0TkZlc'} title='Learn Python Programming - Full Course for Beginners' desc='This comprehensive Python programming course is perfect for beginners. It covers Python fundamentals and is a great starting point for those new to coding.' />
          <YoutubeCard url={'https://www.youtube.com/embed/hdI2bqOjy3c'} title='JavaScript Crash Course For Beginners' desc='This crash course introduces you to JavaScript, a vital web development language. It`s tailored for beginners and provides a solid foundation in JavaScript programming.' />
          <YoutubeCard url={'https://www.youtube.com/embed/sBws8MSXN7A'} title='React.js Tutorial for Beginners' desc='Dive into React.js, a popular JavaScript library for building user interfaces. This video tutorial is designed for beginners looking to start with React.' />
          <OtherCard url={'https://santoshb.com.np/img/banners/user-engagement-with-comments.png'} title='Enabling User Engagement with Comments' />
          <br />
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight='extrabold'
            pt={10}
            textAlign={'center'}
            bgClip='text'
            bgGradient='linear(to-r, #00ffff,purple.500)'

          >
            OTHER RESOURCES
          </Heading>
          <Box w="100%" my="8" h="2px" bg="white" />
          <br />
          <OtherCard url={'https://www.mongodb.com/docs/images/hero-v2.svg'} title='Get Started with MongoDB' /><br /><br />
          <YoutubeCard url={'https://www.youtube.com/embed/sBws8MSXN7A'} title='React.js Tutorial for Beginners' desc='Dive into React.js, a popular JavaScript library for building user interfaces. This video tutorial is designed for beginners looking to start with React.' />
        </Box>
      </Box>
    </Box>
  )
}

function PhoneBox() {
  return (
    <Box bg='gray.800' display={{ base: 'block', md: 'none' }}>
      <VStack color={'white'}>

        <Image alt='logo' src={'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
        } boxSize={'150px'} mt={24} mx={6} borderRadius={'full'} css={{
          border: '2px solid white',
        }} />

        <VStack spacing={3} color={'white'}>
          <Heading
            as="h1"
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight='extrabold'

            textAlign={'center'}
            bgClip='text'
            bgGradient='linear(to-r, #00ffff,purple.500)'
          >
            Ayush Chowdhury

          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: 'md', md: 'md' }}
            fontWeight={'medium'}
            pb={'5'}
          >
            <Icon as={HiOutlineLocationMarker} />&nbsp;
            Darjeeling, West Bengal |&nbsp;
            <Icon as={GoOrganization} />&nbsp;
            St. Joseph's School
          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: 'md', md: 'md' }}
            fontWeight={'medium'}
          >
            <Icon as={BsLink45Deg} />&nbsp;
            <Link href='https://ayush-portfolio.vercel.app/m' isExternal>
              https://ayush-portfolio.vercel.app/
            </Link>

          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: 'md', md: 'md' }}
            fontWeight={'medium'}
          >
            <Icon as={BsLinkedin} />&nbsp;
            <Link href='https://linkedin.com/in/itsayushch' isExternal>
              https://linkedin.com/in/itsayushch
            </Link>

          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: 'md', md: 'md' }}
            fontWeight={'medium'}
          >
            <Icon as={BsGithub} />&nbsp;
            <Link href='https://github.com/itsayushch' isExternal>
              https://github.com/itsayushch
            </Link>

          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight='extrabold'

            textAlign={'center'}
            bgClip='text'
            bgGradient='linear(to-r, #00ffff,purple.500)'
          >
            Skills

          </Heading>
          <SimpleGrid spacing={2} columns={{ base: 3, md: 4 }} px={10} pb={'20'}>
            <Tag size={'lg'} variant='subtle' colorScheme='cyan' >
              <TagLabel>Java</TagLabel>
            </Tag>
            <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
              <TagLabel>JavaScript</TagLabel>
            </Tag>
            <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
              <TagLabel>Python</TagLabel>
            </Tag>
            <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
              <TagLabel>MongoDB</TagLabel>
            </Tag>
            <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
              <TagLabel>MySQL</TagLabel>
            </Tag>
            <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
              <TagLabel>REST API</TagLabel>
            </Tag>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>

  )
}

function YoutubeCard({ url, title, desc }: { url: string, title: string, desc: string }) {
  return (
    <>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-around" }}
        direction={{ base: "column", md: 'row' }}
        minH="30vh"
      >
        <Stack
          spacing={4}
          w={{ base: "100%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
          overflow='hidden'
          borderRadius='1rem'
        >
          <iframe
            src={url}
            title={title}

            allow="accelerometer; 
                  autoplay; 
                  clipboard-write; 
                  encrypted-media; 
                  gyroscope; 
                  picture-in-picture; 
                  web-share
                  " />
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} onClick={() => window.open(url, '_blank')} _hover={{
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>
          <Heading
            as="h1"
            size="md"
            color='primary.700'
            textAlign="left"
          >
            {title}
          </Heading>
          <br />
          <Text
            as="h1"
            size="sm"
            color='primary.700'
            textAlign="left"
            noOfLines={3}
            
          >
            {desc}
          </Text>
        </Box>
      </Flex>
    </>
  );
}

function OtherCard({ url, title, desc }: { url: string, title: string, desc?: string }) {
  return (
    <>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-around" }}
        direction={{ base: "column", md: 'row' }}
        minH="30vh"
      >
        <Stack
          spacing={4}
          w={{ base: "100%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
          overflow='hidden'
          borderRadius='1rem'
        >
          <Image src={url} />
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }}>
          <Heading
            as="h1"
            size="md"
            color='primary.700'
            textAlign="left"
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => window.open('https://santoshb.com.np/blog/adding-user-engagement-with-comments-to-websites/', '_blank')}
          >
            {title}
          </Heading>
        </Box>
      </Flex>
    </>
  );
}

export default SidebarWithHeader;