import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='icon' href='/icon/alph4-icon.png' />
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="ALPH4" />
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="ALPH4 - A multipurpose discord bot" />
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="ALPH4, a multi-purpose Discord bot that you can invite today for free." />
        <meta
          data-n-head="ssr"
          data-hid="og:image"
          property="og:image"
          content="https://cdn.discordapp.com/attachments/723855790112505886/828279455482773524/1617547602892.png"
        />
        <meta data-n-head="ssr" data-hid="og:image:type" property="og:image:type" content="image/png" />
        <meta data-n-head="ssr" data-hid="og:image:width" property="og:image:width" content="750" />
        <meta data-n-head="ssr" data-hid="og:image:height" property="og:image:height" content="750" />
        <meta data-n-head="ssr" data-hid="og:image:alt" property="og:image:alt" content="ALPH4" />
        <meta name="theme-color" content="#93A8DA" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
