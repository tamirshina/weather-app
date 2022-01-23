import '../styles/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../app/store'
import Router from "next/router";
import Header from '../components/layout/header'
import Loader from '../components/layout/Loader'

function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <Provider store={store}>
      {
        loading ? <Loader /> : (
          <>
            <Header />
            <Component {...pageProps} />
          </>
        )
      }
    </Provider>
  )
}

export default MyApp
