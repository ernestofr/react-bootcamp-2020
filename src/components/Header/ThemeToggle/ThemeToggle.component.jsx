import React from 'react';
import styled from 'styled-components';

const ThemeToggleWrapper = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  height: 20px;
  width: 30px;
`;

function ThemeToggle() {
  return (
    <ThemeToggleWrapper>
      <Checkbox type="checkbox" />
      Dark Theme
    </ThemeToggleWrapper>
  );
}

export default ThemeToggle;
