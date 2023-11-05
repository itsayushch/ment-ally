'use client'
import {
    Flex,
    Image,
    SimpleGrid,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const image = {
    url: 'https://santoshb.com.np/icon.png',
}

export default function TopExperts() {
    const Router = useRouter();

    return (
        <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            id='games'
            overflow={'hidden'}
        >
            <SimpleGrid
                columns={{ base: 1, xl: 3 }}
                spacing={'10'}
                mt={16}
                mb={16}
                mx='auto'
            >
                <Image
                    boxSize='250px'
                    objectFit='cover'
                    src={image.url}
                    alt='BGMI'
                    borderRadius={'2xl'}
                    onClick={() => Router.push('/rosters?game=bgmi')}
                    _hover={{ cursor: 'pointer' }}
                />
                                <Image
                    boxSize='250px'
                    objectFit='cover'
                    src={image.url}
                    alt='BGMI'
                    borderRadius={'2xl'}
                    onClick={() => Router.push('/rosters?game=bgmi')}
                    _hover={{ cursor: 'pointer' }}
                />
                                <Image
                    boxSize='250px'
                    objectFit='cover'
                    src={image.url}
                    alt='BGMI'
                    borderRadius={'2xl'}
                    onClick={() => Router.push('/rosters?game=bgmi')}
                    _hover={{ cursor: 'pointer' }}
                />
            </SimpleGrid>
        </Flex>
    );
}