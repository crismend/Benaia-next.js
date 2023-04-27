import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/roboto-slab/400.css'
import '@fontsource/roboto-slab/500.css'
import '@fontsource/roboto-slab/700.css'
import '../styles/globals.css'

import Head from 'next/head';
import Layout from '@/components/layout';
import { MantineProvider } from '@mantine/core';

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Benaia</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}