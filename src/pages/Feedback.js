import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../component/Header';

export class Feedback extends Component {
  render() {
    const { assertions, score } = this.props;
    return (
      <div>
        <Header />
        <h1>Página de Feedback</h1>
        <p data-testid="feedback-text">
          {assertions < Number('3') ? 'Could be better...' : 'Well Done!'}
        </p>
        <p data-testid="feedback-total-score">{ score }</p>
        <p data-testid="feedback-total-question">{ assertions }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Feedback);
