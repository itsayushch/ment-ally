'use client';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Heading,
  } from '@chakra-ui/react'
  import { Icon } from '@chakra-ui/react'
  import { CiMenuBurger } from 'react-icons/ci'
  import { AiOutlineClose } from 'react-icons/ai'
  
  interface Props {
    children: React.ReactNode
  }
  
  const Links = ['Dashboard', 'Projects', 'Team']
  
  const NavLink = (props: Props) => {
    const { children } = props
    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
      </Box>
    )
  }
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Box bg={'gray.900'} px={4}  borderBottom="1px">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <Icon as={AiOutlineClose} />:<Icon as={CiMenuBurger} />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              bg={'gray.700'}
              color='white'
            />
            <HStack spacing={8} alignItems={'center'}>
              <Heading><span style={{ color: 'white'}}>ment</span><span style={{ color: 'red', fontStyle: 'italic'}}>ally</span></Heading>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} color={'white'}>
                {Links.map((link) => (
                  <NavLink key={link}><span style={{ color: 'white'}}>{link}</span></NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'} bg={'gray.800'} color={'white'}>

              <Menu>
                <MenuButton
                bg='gray.700'
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                </MenuButton>
                <MenuList >
                  <MenuItem>Link 1</MenuItem>
                  <MenuDivider color={'white'} />

                </MenuList>
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}><span style={{ color: 'white'}}>{link}</span></NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    )
  }