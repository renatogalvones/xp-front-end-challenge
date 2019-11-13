import React from 'react';
import { FormStyled, SearchStyled, InputStyled } from './Search.styles';

const Search = () => (
  <FormStyled action="">
    <SearchStyled htmlFor="search">
      Busque por artistas, álbuns ou músicas
      <InputStyled type="text" id="search" placeholder="Comece a escrever..." />
    </SearchStyled>
  </FormStyled>
);

export default Search;
