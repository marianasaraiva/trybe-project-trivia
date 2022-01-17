import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../component/Header';
import Question from '../component/Question';
import { fetchAPI, fetchToken } from '../services/servicesFetchAPI';

class Play extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      render: false,
      actualQuestion: 0,
    };

    this.getReponseAPI = this.getReponseAPI.bind(this);
  }

  componentDidMount() {
    this.getReponseAPI();
  }

  // Lógica grupo Gabriel Fontes:
  // validar se o token está válido:
  async getReponseAPI() {
    console.log(this.props);
    const { token } = this.props;
    const questions = await fetchAPI(token);
    if (questions.response_code === 0) {
      this.setState({ questions, render: true });
    } else {
      const newToken = await fetchToken();
      const newQuestions = await fetchAPI(newToken);
      this.setState({ questions: newQuestions, render: true });
    }
  }

  render() {
    const { questions, actualQuestion, render } = this.state;
    return (
      <div>
        <h1>Página do Play</h1>
        <Header />
        { render && <Question question={ questions[actualQuestion] } /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

Play.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Play);
