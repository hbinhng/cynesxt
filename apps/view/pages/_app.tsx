import '../styles/globals.css';

import { AppProps } from 'next/app';

function Cynesxt({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Cynesxt;
