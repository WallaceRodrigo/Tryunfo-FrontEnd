import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrumpValidation extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="cardTrunfo">
        Super Trunfo
        <input
          type="checkbox"
          name="cardTrunfo"
          id="cardTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

TrumpValidation.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TrumpValidation;
