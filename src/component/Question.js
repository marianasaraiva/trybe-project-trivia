import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Question extends Component {
  constructor() {
    super();
    this.state = {
      alternatives: [],
    };
    this.alternativesQuestions = this.alternativesQuestions.bind(this);
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

  render() {
    const { question } = this.props;
    const { alternatives } = this.state;
    return (
      <div>
        <p data-testid="question-category">{ question.category}</p>
        <p data-testid="question-text">{ question.question}</p>
        <div data-testid="answer-options">
          {
            alternatives.map(([text, textid], index) => (
              <button
                className="answered"
                type="button"
                key={ index }
                name={ textid }
                data-testid={ textid }
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
