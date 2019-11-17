import React, { Component } from 'react';
import { func } from 'prop-types';

import { FormStyled, SearchStyled, InputStyled } from './Search.styles';

const propTypes = {
  handleSearch: func.isRequired,
};

class Search extends Component {
  constructor() {
    super();

    this.typingTimer = null;
    this.typingDelay = 1000;
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }

  keyUpHandler(event) {
    const { handleSearch } = this.props;
    const term = event.target.value;

    clearTimeout(this.typingTimer);
    if (term) {
      this.typingTimer = setTimeout(() => handleSearch(term), this.typingDelay);
    }
  }

  render() {
    return (
      <FormStyled action="">
        <SearchStyled htmlFor="search">
          Busque por artistas, álbuns ou músicas
          <InputStyled
            type="search"
            id="search"
            placeholder="Comece a escrever..."
            autoComplete="off"
            onKeyUp={this.keyUpHandler}
          />
        </SearchStyled>
      </FormStyled>
    );
  }
}

Search.propTypes = propTypes;

export default Search;
