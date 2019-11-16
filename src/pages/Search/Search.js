import React, { Component } from 'react';
import {
  oneOfType, shape, func, string,
} from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import slugify from 'slugify';

import * as actionTypes from '../../store/actions';
import Search from '../../components/Search';
import Heading from '../../components/Heading';
import Card from '../../components/Card';

import MainWrapper from './Search.styles';

const propTypes = {
  token: oneOfType([
    shape({}),
    shape({
      accessToken: string.isRequired,
    }),
  ]),
  searchTerm: string,
  unsetToken: func,
  setSearchTerm: func,
  requestSearch: func,
  receiveSearch: func,
};

const defaultProps = {
  token: null,
  searchTerm: '',
  unsetToken: () => {},
  setSearchTerm: () => {},
  requestSearch: () => {},
  receiveSearch: () => {},
};

class SearchPage extends Component {
  constructor() {
    super();

    this.searchContent = this.searchContent.bind(this);
    this.renderAlbums = this.renderAlbums.bind(this);
  }

  searchContent(term) {
    const {
      token: { accessToken },
      unsetToken,
      setSearchTerm,
      requestSearch,
      receiveSearch,
    } = this.props;

    if (!term) {
      receiveSearch(null);
      return;
    }

    requestSearch();

    const queryParams = [];
    queryParams.push(`q=${encodeURIComponent(term)}`);
    queryParams.push('type=album,artist,track');

    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .get(`https://api.spotify.com/v1/search?${queryParams.join('&')}`, options)
      .then((response) => {
        const { albums } = response.data;

        setSearchTerm(term);
        receiveSearch(albums);
      })
      .catch((error) => {
        console.error('ERROR', error);
        unsetToken();
      });
  }

  renderAlbums() {
    const { albums } = this.props;
    if (!albums) return null;

    const cards = albums.items.map((item, index) => {
      const cardProps = {
        key: slugify(`${index}${item.name}-${item.artists[0].name}`),
        imgUrl: item.images[1].url,
        album: item.name,
        artist: item.artists[0].name,
      };

      return <Card {...cardProps} />;
    });

    return cards;
  }

  renderHeading() {
    const { searchTerm } = this.props;
    if (searchTerm) {
      return (
        <Heading>
          Resultado da busca por
          {` "${searchTerm}"`}
        </Heading>
      );
    }
    return <Heading>Álbuns buscados recentemente</Heading>;
  }

  render() {
    return (
      <>
        {/* <Logo src={SpotifyLogo} alt="Spotify Logo" /> */}
        <MainWrapper>
          <section className="search">
            <Search handleSearch={this.searchContent} />
          </section>
          {this.renderHeading()}
          <section className="list">{this.renderAlbums()}</section>
        </MainWrapper>
      </>
    );
  }
}

SearchPage.propTypes = propTypes;
SearchPage.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  token: state.token,
  searchTerm: state.searchTerm,
  albums: state.albums,
});

const mapDispatchToProps = (dispatch) => ({
  unsetToken: () => dispatch({ type: actionTypes.UNSET_TOKEN }),
  setSearchTerm: (searchTerm) => dispatch({
    type: actionTypes.SET_SEARCH_TERM,
    searchTerm,
  }),
  requestSearch: () => dispatch({ type: actionTypes.REQUEST_SEARCH }),
  receiveSearch: (albums) => dispatch({
    type: actionTypes.RECEIVE_SEARCH,
    albums,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
