import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranking extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1 data-testid="ranking-title">Página do ranking</h1>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => {
            history.push('/');
          } }
        >
          Play again
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Ranking;
