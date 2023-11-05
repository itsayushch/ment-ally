'use client';

import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/AuthContext';
import React from 'react';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { config } from '@/lib/themes';
import Fonts, { fonts } from '@/lib/fonts';

const theme = extendTheme({ config, fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <style global jsx>
          {`
					html {
					scroll-behavior: smooth;
					}
  				`}
        </style>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default MyApp;