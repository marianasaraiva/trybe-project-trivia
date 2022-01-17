import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

const milliseconds = 1000;
const correctAnswer = 'correct-answer';

export class Question extends Component {
  constructor() {
    super();
    this.state = {
      alternatives: [],
      seconds: 30,
      clicked: false,
      disabledButton: false,
      assertions: 0,
      // score: 0,
    };
    this.alternativesQuestions = this.alternativesQuestions.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.regressTimer = this.regressTimer.bind(this);
    this.sotpTimer = this.sotpTimer.bind(this);
    this.assertionQuestions = this.assertionQuestions.bind(this);
    // this.calculatePoints = this.calculate.bind(this);
  }

  componentDidMount() {
    this.alternativesQuestions();
    this.regressTimer();
  }

  regressTimer() {
    const interval = setInterval(() => {
      const { seconds, clicked } = this.state;
      if (seconds === 1 || clicked === true) {
        this.setState({
          disabledButton: true,
        });
        return clearInterval(interval);
      }
      this.setState({
        seconds: seconds - 1,
      });
    }, milliseconds);
  }

  // Lógica grupo Gabriel Fontes sobre respostas na aplicação
  // Lógica para gerar randomicamente as respostas
  alternativesQuestions() {
    const { question } = this.props;
    if (Object.keys(question).length > 0) {
      const answers = question.incorrect_answers
        .map((incorrect, index) => [incorrect, `wrong-answer-${index}`,
          Math.floor(Math.random() * (100 - 1)) + 1]);
      const results = [...answers, [question.correct_answer, correctAnswer,
        Math.floor(Math.random() * (100 - 1)) + 1]];
      const alternatives = results.sort((a, b) => a[2] - b[2]);
      this.setState({ alternatives });
    }
  }

  // Lógica para mudar a cor da resposta
  changeColor() {
    const button = document.querySelectorAll('.questions');
    button.forEach((alternatives) => {
      alternatives.classList
        .toggle(alternatives.name === correctAnswer ? 'correct' : 'incorrect');
    });
  }

  // calculateScore() {

  // }

  sotpTimer() {
    this.setState({
      clicked: true,
    });
  }

  assertionQuestions({ target }) {
    const { assertions } = this.state;
    if (target.name === correctAnswer) {
      this.setState({
        assertions: assertions + 1,
      });
    }
  }

  handleClick(a) {
    this.changeColor();
    this.sotpTimer();
    this.assertionQuestions(a);
    // if( target.name === 'correct-answer'){
    //   this.calculatePoints();
    // }
  }

  render() {
    const { question } = this.props;
    const { alternatives, disabledButton, seconds } = this.state;
    return (
      <div>
        <p data-testid="question-category">{question.category}</p>
        <p data-testid="question-text">{question.question}</p>
        <div data-testid="answer-options">
          {
            alternatives.map(([text, testid], index) => (
              <button
                className="questions"
                type="button"
                key={ index }
                name={ testid }
                data-testid={ testid }
                disabled={ disabledButton }
                onClick={ this.handleClick }
                id={ testid }
              >
                {text}
              </button>
            ))
          }
        </div>
        { seconds }
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Question;
