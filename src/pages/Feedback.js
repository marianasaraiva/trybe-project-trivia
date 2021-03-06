import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../component/Header';

const assertionsNumber = 3;

export class Feedback extends Component {
  render() {
    const { assertions, score, history } = this.props;
    return (
      <div>
        <Header />
        <h1>Página de Feedback</h1>
        <p data-testid="feedback-text">
          {assertions < assertionsNumber ? 'Could be better...' : 'Well Done!'}
        </p>
        <p data-testid="feedback-total-score">{ score }</p>
        <p data-testid="feedback-total-question">{ assertions }</p>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => {
            history.push('/');
          } }
        >
          Play again
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => {
            history.push('/ranking');
          } }
        >
          Ranking
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
  name: state.player.name,
  gravatarEmail: state.player.email,
});

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Feedback);
