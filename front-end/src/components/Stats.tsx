import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react'
  
  interface StatsCardProps {
    title: string
    stat: string
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat } = props
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        bg={'gray.800'}
        borderColor={'white'}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    )
  }
  
  export default function Stats() {
    return (
      <Box maxW="7xl" mx={'auto'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Followers'} stat={'6,000 people'} />
          <StatsCard title={'Profile View'} stat={'11,083 views'} />
          {/* <StatsCard title={'Sessions Taken'} stat={'11,083 views'} /> */}
        </SimpleGrid>
      </Box>
    )
  }