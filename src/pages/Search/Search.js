import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';

import Search from '../../components/Search';
import Heading from '../../components/Heading';
import Card from '../../components/Card';

const MainWrapper = styled.section`
  max-width: 1130px;
  margin: 75px auto 0;

  > h1 {
    padding: 0 1rem;
  }

  .search {
    padding: 1rem;
  }

  > .list {
    column-count: 5;
    margin: 1.5em auto;
    max-width: 1130px;
    column-gap: 1.5rem;

    > figure {
      padding: 1rem;
      margin: 0 0 1.5rem;
    }
  }
`;

class SearchPage extends Component {
  constructor() {
    super();

    this.searchContent = this.searchContent.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  searchContent(term) {
    const {
      token: { access_token },
    } = this.props;

    const queryParams = [];
    queryParams.push(`q=${term}`);
    queryParams.push('type=album,track,track');

    const options = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    axios
      .get(`https://api.spotify.com/v1/search?${queryParams.join('&')}`, options)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  }

  render() {
    console.log('props', this.props);

    return (
      <>
        {/* <Logo src={SpotifyLogo} alt="Spotify Logo" /> */}
        <MainWrapper>
          <section className="search">
            <Search handleSearch={this.searchContent} />
          </section>
          <Heading>Álbuns buscados recentemente</Heading>
          <section className="list">
            <Card album="xablau" artist="xablauzinho" />
            <Card album="xablau" artist="xablauzinho" />
            <Card album="xablau" artist="xablauzinho" />
            <Card album="xablau" artist="xablauzinho" />
            <Card album="xablau" artist="xablauzinho" />
            <Card album="xablau" artist="xablauzinho" />
            <Card album="xablau" artist="xablauzinho" />
            <Card album="xablau" artist="xablauzinho" />
            <Card album="xablau" artist="xablauzinho" />
          </section>
        </MainWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  token: state.token,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
