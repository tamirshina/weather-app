import '../styles/globals.css'

import { Provider } from 'react-redux'
import { useStore } from '../app/store'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
