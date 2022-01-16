import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

export class Question extends Component {
  constructor() {
    super();
    this.state = {
      alternatives: [],
    };
    this.alternativesQuestions = this.alternativesQuestions.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.alternativesQuestions();
  }

  // Lógica grupo Gabriel Fontes sobre respostas na aplicação
  // Lógica para gerar randomicamente as respostas
  alternativesQuestions() {
    const { question } = this.props;
    if (Object.keys(question).length > 0) {
      const answers = question.incorrect_answers
        .map((incorrect, index) => [incorrect, `wrong-answer-${index}`,
          Math.floor(Math.random() * (100 - 1)) + 1]);
      const results = [...answers, [question.correct_answer, 'correct-answer',
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
        .toggle(alternatives.name === 'correct-answer' ? 'correct' : 'incorrect');
    });
  }

  handleClick() {
    this.changeColor();
  }

  render() {
    const { question } = this.props;
    const { alternatives } = this.state;
    return (
      <div>
        <p data-testid="question-category">{ question.category}</p>
        <p data-testid="question-text">{ question.question}</p>
        <div data-testid="answer-options">
          {
            alternatives.map(([text, testid], index) => (
              <button
                className="questions"
                type="button"
                key={ index }
                name={ testid }
                data-testid={ testid }
                onClick={ this.handleClick }
                id={ testid }
              >
                { text }
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Question;

// const { alternatives } = this.state;
// const dom = document.querySelectorAll('.questions');
// console.log(dom.forEach((ele) => ele === 'answer_correct' ? ele.style.backgroundColor = 'green' : ele.style.backgroundColor = 'red'));
