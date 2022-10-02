import '../styles/globals.css'
import dynamic from "next/dynamic";
import Head from "next/head";

const MoralisContextProvider = dynamic(() => import("../components/MoralisContext"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
  <MoralisContextProvider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Punk Cities</title>
    </Head>
    <Component {...pageProps} />    
  </MoralisContextProvider>
  )
}

export default MyApp
