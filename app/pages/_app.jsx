import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import '../styles/globals.css';

/* eslint-disable react/jsx-props-no-spreading */
function MyApp({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

MyApp.propTypes = {
  MyApp: MyApp.string.isRequired
}
export default MyApp;
