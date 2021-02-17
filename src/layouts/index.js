/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from 'react';
import Footer from './Footer';
import { PageLayoutContainer } from './style';
import Topbar from './Topbar';

function PageLayout({
  children
}) {

  return (
    <PageLayoutContainer>
      <Topbar />
      <div className='page-content'>
        {children}
      </div>
      <Footer />
    </PageLayoutContainer>
  );
}

export default PageLayout;