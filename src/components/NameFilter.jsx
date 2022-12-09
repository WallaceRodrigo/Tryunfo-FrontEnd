import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap';

class NameFilter extends Component {
  render() {
    const { onInputChange } = this.props;

    return (
      <FloatingLabel
        label="Busca pelo Nome"
        className="mb-3"
      >
        <Form.Control
          type="text"
          name="nameFilter"
          id="nameFilter"
          data-testid="name-filter"
          onChange={ onInputChange }
          // value={ cardName }
          // onFocus={ onFocus }
          placeholder="Nome da pokemon"
        />
      </FloatingLabel>
    );
  }
}
NameFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default NameFilter;
