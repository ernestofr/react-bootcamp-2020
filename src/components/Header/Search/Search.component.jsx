import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  margin: 0 15px;
  width: 300px;
`;

const SearchInput = styled.input`
  color: white;
  font-size: 15px;
  width: 100%;
  height: 30px;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  border: 1px solid white;
  background-color: rgb(65, 110, 137);

  ::placeholder {
    color: #ffffff;
    opacity: 0.5;
  }
`;

function Search() {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="Search Something..." />
    </SearchWrapper>
  );
}

export default Search;
