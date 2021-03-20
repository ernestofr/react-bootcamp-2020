import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import './Layout.styles.css';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function Layout({ children }) {
  return (
    <HeaderWrapper>
      <Header />
      <main className="container">{children}</main>
    </HeaderWrapper>
  );
}

export default Layout;
