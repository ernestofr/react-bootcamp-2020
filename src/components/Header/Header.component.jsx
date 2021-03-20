import React from 'react';
import styled from 'styled-components';

import DrawerToggle from './DrawerToggle';
import Search from './Search';
import ThemeToggle from './ThemeToggle';
import UserLogin from './UserLogin';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  align-items: center;
  background-color: #1d5274;
  color: #ffffff;
  box-sizing: border-box;
  z-index: 1;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
`;

function Header() {
  return (
    <HeaderWrapper>
      <LeftSide>
        <DrawerToggle />
        <Search />
      </LeftSide>

      <RightSide>
        <ThemeToggle />
        <UserLogin />
      </RightSide>
    </HeaderWrapper>
  );
}

export default Header;
