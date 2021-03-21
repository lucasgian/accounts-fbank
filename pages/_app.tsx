import { AppProps } from 'next/app'
import '../styles/index.css'
import { storeWrapper } from "../lib/store"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default  storeWrapper.withRedux(MyApp)