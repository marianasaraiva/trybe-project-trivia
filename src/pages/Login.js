import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      isDisabled: 'true',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validateInput);
  }

  validateInput() {
    const { email, name } = this.state;
    // Regex Valida E-mail: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const regexValidateEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?$/i;
    const emailValidate = regexValidateEmail.test(String(email).toLowerCase());
    return (emailValidate && name.length !== 0)
      ? this.setState({ isDisabled: false })
      : this.setState({ isDisabled: true });
  }

  // handleClick() {

  // }

  render() {
    const { name, email, isDisabled } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              data-testid="input-player-name"
              placeholder="Nome"
              name="name"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              data-testid="input-gravatar-email"
              placeholder="Email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="btn-play"
            // onClick={ this.handleClick }
            disabled={ isDisabled }
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
