import React from 'react';
import styled from 'styled-components';

const UserLoginWrapper = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
`;

const UserLoginIcon = styled.svg`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  fill: white;
`;

function UserLogin() {
  return (
    <UserLoginWrapper>
      <UserLoginIcon focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </UserLoginIcon>
      User Login
    </UserLoginWrapper>
  );
}

export default UserLogin;
