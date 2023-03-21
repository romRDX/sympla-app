import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppProvider from '../hooks';
import { setDefaultOptions } from 'date-fns';
import { pt } from 'date-fns/locale'

export default function App({ Component, pageProps }: AppProps) {

  setDefaultOptions({ locale: pt });

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
