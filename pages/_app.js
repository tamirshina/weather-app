import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Provider } from 'react-redux'
import { useStore } from '../app/store'

function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
