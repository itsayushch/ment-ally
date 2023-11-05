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
  Center,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { CiMenuBurger } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/router';
import { useAuthContext } from '../context/AuthContext';

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
  const { user, logout } = useAuthContext();

  const router = useRouter();
  const { login } = useAuthContext();
  const loginWithGoogle = async () => {
    try {
      await login();
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  console.log(user);

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={'gray.900'} px={4} borderBottom="1px">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <Icon as={AiOutlineClose} /> : <Icon as={CiMenuBurger} />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg={'gray.700'}
            color='white'
          />
          <HStack spacing={8} alignItems={'center'}>
            <Heading><span style={{ color: 'white' }}>ment</span><span style={{ color: 'red', fontStyle: 'italic' }}>ally</span></Heading>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} color={'white'}>
              {Links.map((link) => (
                <NavLink key={link}><span style={{ color: 'white' }}>{link}</span></NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} bg={'gray.800'} color={'white'}>


            {user ? (
              <Menu>
                <MenuButton

                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={user.photoURL}
                  />
                </MenuButton>
                <MenuList >
                  <MenuItem>Link 1</MenuItem>
                  <MenuDivider color={'white'} />

                </MenuList>
              </Menu>
            ) : (
              <Button variant={'solid'} colorScheme='cyan' onClick={loginWithGoogle}>Log In</Button>
            )}


          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}><span style={{ color: 'white' }}>{link}</span></NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}