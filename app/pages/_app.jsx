/* eslint-disable react/jsx-props-no-spreading */
import { SessionProvider } from 'next-auth/react';
import {PropTypes} from "prop-types";
import Layout from '../components/Layout';
import '../styles/globals.css';

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
  MyApp: PropTypes.string.isRequired
}
export default MyApp;
