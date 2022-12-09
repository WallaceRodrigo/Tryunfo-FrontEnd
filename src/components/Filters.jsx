import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap';
import './Styles/Filters.css';

class Filters extends Component {
  render() {
    const { onInputChange, trunfoFilter } = this.props;

    return (
      <div className="Filters">
        <h2>🔍 Busca:</h2>
        <div>
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
              placeholder="Nome da pokemon"
              disabled={ trunfoFilter }
            />
          </FloatingLabel>

          <FloatingLabel label="Busca pela raridade do Pokemon" className="mb-3">
            <Form.Select
              name="rareFilter"
              id="rareFilter"
              className="rareFilter"
              data-testid="rare-filter"
              onChange={ onInputChange }
              disabled={ trunfoFilter }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
              <option value="lendário">Lendário</option>
            </Form.Select>
          </FloatingLabel>

          <Form.Check
            type="switch"
            name="trunfoFilter"
            id="trunfoFilter"
            className="mb-3"
            data-testid="trunfo-filter"
            onChange={ onInputChange }
          />
          <h4>Super Trunfo</h4>
        </div>
      </div>
    );
  }
}

Filters.defaultProps = { trunfoFilter: false };

Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  trunfoFilter: PropTypes.bool,
};

export default Filters;
