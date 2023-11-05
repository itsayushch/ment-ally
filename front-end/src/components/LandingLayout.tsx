import { Flex, Box, Heading } from '@chakra-ui/react';


export default function LandingLayout({ children, ...props }: { children?: any, props?: any }) {
    return (
        <>
            <Box bg='gray.900' maxH={'100vh'}>
                {/* <Header /> */}
                <Flex
                    direction='column'
                    align='center'
                    maxW={'80vw'}
                    m='0 auto'
                    {...props}
                >
                    {children}
                </Flex>
            </Box>
            {/* <Box bg='gray.700' maxW={'100vw'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#171923" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,112C672,96,768,96,864,128C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <Flex
                    direction='column'
                    align='center'
                    maxW={{ base: '100%', xl: '1200px' }}
                    m='0 auto'
                    pb={20}
                >
                    <Heading color='white' pb={[12, 12, 0, 0]} id='about' letterSpacing={4}>ABOUT US</Heading>
                    <AboutUs />
                </Flex>
            </Box>
            <Box bg='gray.800' pt={20}>
                <Flex
                    direction='column'
                    align='center'
                    maxW={{ base: '100%', xl: '1200px' }}
                    m='0 auto'
                >
                    <Heading color='white' pb={[12, 12, 0, 0]} id='about' letterSpacing={4}>OUR GAMES</Heading>
                    <Games />
                </Flex>
            </Box>
            <Footer /> */}
        </>
    );
}