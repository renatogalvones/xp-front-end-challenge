import React, { Component } from 'react';
import {
  oneOfType, shape, func, string,
} from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import milisecondsToTracktime from '../../utils/milisecondstotracktime';

import * as actionTypes from '../../store/actions';
import Card from '../../components/Card';
import Track from '../../components/Track';

import MainWrapper from './Album.styles';

const propTypes = {
  token: oneOfType([
    shape({}),
    shape({
      accessToken: string.isRequired,
    }),
  ]),
  unsetToken: func,
  requestAlbum: func,
  receiveAlbum: func,
  match: shape({}).isRequired,
};

const defaultProps = {
  token: null,
  unsetToken: () => {},
  requestAlbum: () => {},
  receiveAlbum: () => {},
};

class AlbumPage extends Component {
  constructor() {
    super();

    // this.state = {
    //   previews: {},
    // };
    this.previews = {};

    this.searchContent = this.searchContent.bind(this);
    this.renderCard = this.renderCard.bind(this);
    this.renderTracks = this.renderTracks.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.loadPreviews = this.loadPreviews.bind(this);
  }

  componentDidMount() {
    this.searchContent();
    // this.loadPreviews();
  }

  componentWillUnmount() {
    const { previews } = this;

    Object.keys(previews).forEach((preview) => {
      previews[preview].audio.pause();
    });
  }

  searchContent() {
    const {
      token: { accessToken },
      unsetToken,
      requestAlbum,
      receiveAlbum,
      match: { params },
    } = this.props;

    requestAlbum();

    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .get(`https://api.spotify.com/v1/albums/${params.albumId}`, options)
      .then((response) => {
        const { data } = response;

        receiveAlbum(data);
      })
      .catch((error) => {
        console.error('ERROR', error);
        unsetToken();
      });
  }

  loadPreviews() {
    const { album } = this.props;
    const loadedPreviews = {};

    album.tracks.items.forEach((track) => {
      loadedPreviews[track.id] = {
        audio: new Audio(track.preview_url),
        isPlaying: false,
      };
    });

    this.setState({
      previews: loadedPreviews,
    });
  }

  handlePreview(id) {
    const { previews } = this;

    if (previews[id] && previews[id].isPlaying) {
      previews[id].audio.pause();
      previews[id].isPlaying = false;
      return;
    }

    Object.keys(previews).forEach((item) => {
      previews[item].audio.pause();
      previews[item].isPlaying = false;
    });

    previews[id].audio.play();
    previews[id].isPlaying = true;
  }

  renderCard() {
    const { album } = this.props;

    const albumProps = {
      album: album.name,
      artist: album.artists[0].name,
      imgUrl: album.images[1].url,
    };

    return <Card.Bigger {...albumProps} />;
  }

  renderTracks() {
    const { album } = this.props;
    const { previews } = this;

    const tracks = album.tracks.items.map((track) => {
      const trackProps = {
        key: `${track.track_number}${track.name}`,
        id: track.id,
        num: track.track_number,
        name: track.name,
        duration: milisecondsToTracktime(track.duration_ms),
        handleClick: this.handlePreview,
      };

      this.previews[track.id] = {
        audio: new Audio(track.preview_url),
      };

      return <Track {...trackProps} />;
    });

    return (
      <section className="trackList">
        <ul>{tracks}</ul>
      </section>
    );
  }

  render() {
    const { album } = this.props;

    return (
      <>
        <MainWrapper>
          <Link to="/search">{'< Voltar'}</Link>

          <section className="content">
            {album && (
              <>
                {this.renderCard()}
                {this.renderTracks()}
              </>
            )}
            {!album && <div>Carregando...</div>}
          </section>
        </MainWrapper>
      </>
    );
  }
}

AlbumPage.propTypes = propTypes;
AlbumPage.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  token: state.token,
  album: state.album,
});

const mapDispatchToProps = (dispatch) => ({
  unsetToken: () => dispatch({ type: actionTypes.UNSET_TOKEN }),
  requestAlbum: () => dispatch({ type: actionTypes.REQUEST_ALBUM }),
  receiveAlbum: (album) => dispatch({
    type: actionTypes.RECEIVE_ALBUM,
    album,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AlbumPage));
