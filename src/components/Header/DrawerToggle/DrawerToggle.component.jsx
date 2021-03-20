import React from 'react';
import styled from 'styled-components';

const DrawerToggleWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  width: 40px;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
`;

const DrawerToggleBar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin: 3px;
`;

function DrawerToggle() {
  return (
    <DrawerToggleWrapper>
      <DrawerToggleBar />
      <DrawerToggleBar />
      <DrawerToggleBar />
    </DrawerToggleWrapper>
  );
}

export default DrawerToggle;
