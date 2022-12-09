import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';

class TrumpValidation extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <InputGroup>
        <Form.Check
          type="switch"
          name="cardTrunfo"
          id="cardTrunfo"
          className="cardTrunfo mb-3"
          checked={ cardTrunfo }
          data-testid="trunfo-input"
          onChange={ onInputChange }
        />
        <h4>Super Trunfo</h4>
      </InputGroup>

    // <label htmlFor="cardTrunfo">
    // Super Trunfo
    // <input
    // type="checkbox"
    // name="cardTrunfo"
    // id="cardTrunfo"
    // className="cardTrunfo"
    // data-testid="trunfo-input"
    // onChange={ onInputChange }
    // />
    // </label> */}
    );
  }
}

TrumpValidation.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default TrumpValidation;
