import React, { Component } from 'react';
import {
  func, string, shape, oneOfType,
} from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import getTokenPropsFromHash from '../../utils/gettokenpropsfromhash';
import * as actionTypes from '../../store/actions';
import Heading from '../../components/Heading';
import Logo from '../../components/Logo';

import LoginStyled from './Login.styles';

const propTypes = {
  token: oneOfType([
    shape({}),
    shape({
      access_token: string.isRequired,
      expires_in: string.isRequired,
      token_type: string.isRequired,
    }),
  ]),
  setToken: func.isRequired,
  unsetToken: func.isRequired,
};

const defaultProps = {
  token: {},
};

class Login extends Component {
  componentDidMount() {
    const { setToken, unsetToken, token } = this.props;
    const tokenProps = getTokenPropsFromHash() || token;
    const { access_token } = tokenProps;

    const options = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    // test if token is expired
    axios
      .get('https://api.spotify.com/v1/me', options)
      .then(() => setToken(tokenProps))
      .catch((error) => {
        console.log('Login error:', error);

        unsetToken();
      });
  }

  render() {
    const authEndpoint = 'https://accounts.spotify.com/pt-BR/authorize';
    const queryParams = [];
    const scopes = ['user-read-currently-playing', 'user-read-playback-state'];
    queryParams.push('client_id=063c30d05c6a44f58c62d3af99e4a7a9');
    queryParams.push('redirect_uri=http://localhost:8080/');
    queryParams.push(`scope=${scopes.join('%20')}`);
    queryParams.push('response_type=token');
    queryParams.push('show_dialog=true');

    const redirectUrl = `${authEndpoint}?${queryParams.join('&')}`;

    return (
      <LoginStyled>
        <Logo />
        <a href={redirectUrl}>
          <Heading>
            Clique aqui e
            <br />
            faça o login no Spotify para começar
          </Heading>
        </a>
      </LoginStyled>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  setToken: (props) => dispatch({
    type: actionTypes.SET_TOKEN,
    tokenProps: props,
  }),
  unsetToken: () => dispatch({
    type: actionTypes.UNSET_TOKEN,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
