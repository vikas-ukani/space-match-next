import { useState } from "react";
import { ToastProvider } from "react-toast-notifications";
import Router from "next/router";
import { Provider } from "react-redux";

import store from "@/store/store";
import Layout from '@/Components/Common/Layout';
import DotsLoading from "@/Components/Loader/DotsLoading";


function MyApp({ Component, pageProps }) {

  const [pageLoader, setPageLoader] = useState(false)

  /** Showing Page Loader While navigating... */
  Router.events.on('routeChangeStart', () => setPageLoader(true));
  Router.events.on('routeChangeComplete', () => setPageLoader(false))
  Router.events.on('routeChangeError', () => setPageLoader(false))

  return (
    <ToastProvider placement={'bottom-left'}>
      {pageLoader && <DotsLoading />}
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ToastProvider>
  )
}

export default MyApp
