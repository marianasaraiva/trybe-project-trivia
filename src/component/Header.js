import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      hash: '',
    };
    this.md5Converter = this.md5Converter.bind(this);
  }

  componentDidMount() {
    this.md5Converter();
  }

  md5Converter() {
    const { email } = this.props;
    const hash = md5(email).toString();
    this.setState({
      hash,
    });
  }

  render() {
    const { hash } = this.state;
    const { name, score } = this.props;
    return (
      <header>
        <img src={ `https://www.gravatar.com/avatar/${hash}` } data-testid="header-profile-picture" alt={ name } />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{ score }</p>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.userReducer.name,
  email: state.userReducer.gravatarEmail,
  score: state.userReducer.score,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
