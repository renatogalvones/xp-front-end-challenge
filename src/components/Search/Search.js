import React, { Component } from 'react';
import { func } from 'prop-types';

import { FormStyled, SearchStyled, InputStyled } from './Search.styles';

const propTypes = {
  handleSearch: func.isRequired,
};

class Search extends Component {
  constructor() {
    super();

    this.changedHandler = this.changedHandler.bind(this);
  }

  changedHandler(event) {
    const { handleSearch } = this.props;
    const term = event.target.value;
    handleSearch(term);
  }

  render() {
    return (
      <FormStyled action="">
        <SearchStyled htmlFor="search">
          Busque por artistas, álbuns ou músicas
          <InputStyled
            type="text"
            id="search"
            placeholder="Comece a escrever..."
            onChange={this.changedHandler}
          />
        </SearchStyled>
      </FormStyled>
    );
  }
}

Search.propTypes = propTypes;

export default Search;
