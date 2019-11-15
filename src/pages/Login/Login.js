import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import { getTokenPropsFromHash } from '../../utils';
import * as actionTypes from '../../store/actions';
import Heading from '../../components/Heading';
import Logo from '../../components/Logo';

import LoginStyled from './Login.styles';

const propTypes = {
  setToken: func.isRequired,
  unsetToken: func.isRequired,
};

class Login extends Component {
  componentDidMount() {
    const { setToken, unsetToken } = this.props;
    const tokenProps = getTokenPropsFromHash();
    console.log('tokenProps', tokenProps);

    if (tokenProps) return setToken(tokenProps);
    return unsetToken();
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
          <Heading.MarginLess>
            Clique aqui e
            <br />
            faça o login no Spotify para começar
          </Heading.MarginLess>
        </a>
      </LoginStyled>
    );
  }
}

Login.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
  setToken: (props) => dispatch({
    type: actionTypes.SET_TOKEN,
    tokenProps: props,
  }),
  unsetToken: () => dispatch({
    type: actionTypes.UNSET_TOKEN,
  }),
});

export default connect(null, mapDispatchToProps)(Login);
