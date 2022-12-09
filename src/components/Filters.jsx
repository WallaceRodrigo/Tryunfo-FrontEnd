import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap';

class Filters extends Component {
  render() {
    const { onInputChange } = this.props;

    return (
      <div className="Filters">
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

        <FloatingLabel label="Busca pela raridade do Pokemon" className="mb-3">
          <Form.Select
            name="rareFilter"
            id="rareFilter"
            data-testid="rare-filter"
            onChange={ onInputChange }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
            <option value="lendário">Lendário</option>
          </Form.Select>
        </FloatingLabel>
      </div>
    );
  }
}
Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
