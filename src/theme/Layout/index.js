import React from 'react';
import Layout from '@theme-original/Layout';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function LayoutWrapper(props) {
  return (
    <>
      <TawkMessengerReact
        propertyId="610d71dbd6e7610a49aef6e3"
        widgetId="1fce89gm5"
      />
      <Layout {...props} />
    </>
  );
}
