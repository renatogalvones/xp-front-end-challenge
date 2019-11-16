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
      access_token: string.isRequired,
      expires_in: string.isRequired,
      token_type: string.isRequired,
    }),
  ]),
  unsetToken: func,
};

const defaultProps = {
  token: null,
  unsetToken: () => {},
};

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      albums: null,
    };

    this.searchContent = this.searchContent.bind(this);
    this.renderAlbums = this.renderAlbums.bind(this);
    // this.render
  }

  // eslint-disable-next-line class-methods-use-this
  searchContent(term) {
    if (!term) {
      this.setState({ albums: null });
      return;
    }
    const {
      token: { access_token },
      unsetToken,
    } = this.props;

    const queryParams = [];
    queryParams.push(`q=${encodeURIComponent(term)}`);
    queryParams.push('type=album,artist,track');

    const options = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    axios
      .get(`https://api.spotify.com/v1/search?${queryParams.join('&')}`, options)
      .then((response) => {
        const { albums } = response.data;
        this.setState({
          searchTerm: term,
          albums,
        });
      })
      .catch((error) => {
        console.error('ERROR', error);
        unsetToken();
      });
  }

  renderAlbums() {
    const { albums } = this.state;
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
    const { searchTerm } = this.state;
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
});

const mapDispatchToProps = (dispatch) => ({
  unsetToken: () => dispatch({ type: actionTypes.UNSET_TOKEN }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
