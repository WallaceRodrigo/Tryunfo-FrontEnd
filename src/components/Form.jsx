import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Styles/Form.css';
import { Button, FloatingLabel, Form, InputGroup } from 'react-bootstrap';
import TrumpValidation from './Validations/TrumpValidation';
import TrumpValidationTwo from './Validations/TrumpValidationTwo';
import PokemonTypeSelect from './Validations/PokemonTypeSelect';

class FormApp extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      onFocus,
    } = this.props;

    const tr = 3;

    return (
      <form className="NewCardForm">
        <h1>ADICIONE NOVA CARTA</h1>
        <FloatingLabel
          label="Nome do pokemon"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="cardName"
            id="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            onFocus={ onFocus }
            placeholder="Nome da pokemon"
          />
        </FloatingLabel>

        <FloatingLabel
          label="Breve descrição do pokemon"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            name="cardDescription"
            id="cardDescription"
            data-testid="description-input"
            maxLength="150"
            value={ cardDescription }
            onChange={ onInputChange }
            onFocus={ onFocus }
            placeholder="Breve descrição do pokemon"
            style={ { height: '100px', resize: 'none' } }
          />
        </FloatingLabel>

        <InputGroup className="mb-3">
          <InputGroup.Text className="basic-addon1">Primeiro Atributo</InputGroup.Text>
          <Form.Control
            placeholder="Força"
            type="number"
            name="cardAttr1"
            id="cardAttr1"
            data-testid="cardAttr1-input"
            value={ cardAttr1.length <= tr ? cardAttr1 : '0' }
            onChange={ onInputChange }
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text className="basic-addon1">Segundo Atributo</InputGroup.Text>
          <Form.Control
            placeholder="Defesa"
            type="number"
            name="cardAttr2"
            id="cardAttr2"
            data-testid="cardAttr2-input"
            value={ cardAttr2.length <= tr ? cardAttr2 : '0' }
            onChange={ onInputChange }
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text className="basic-addon1">Terceiro Atributo</InputGroup.Text>
          <Form.Control
            placeholder="Agilidade"
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            data-testid="cardAttr3-input"
            value={ cardAttr3.length <= tr ? cardAttr3 : 0 }
            onChange={ onInputChange }
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text className="basic-addon1">Url da Imagem</InputGroup.Text>
          <Form.Control
            placeholder="Url com a imagem do pokemon"
            type="text"
            name="cardImage"
            id="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            onFocus={ onFocus }
          />
        </InputGroup>

        <PokemonTypeSelect onInputChange={ onInputChange } />
        <PokemonTypeSelect
          labelName="Segundo tipo do Pokemon (opcional)"
          firstOption="Selecione o segundo tipo do pokemon"
          pokemonTypeTwo="pokemonTypeTwo"
          onInputChange={ onInputChange }
          second
        />

        <FloatingLabel label="Raridade do Pokemon" className="mb-3">
          <Form.Select
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
            <option value="lendário">Lendário</option>
          </Form.Select>
        </FloatingLabel>

        {
          !hasTrunfo ? <TrumpValidation
            cardTrunfo={ cardTrunfo }
            onInputChange={ onInputChange }
          /> : <TrumpValidationTwo />
        }

        <Button
          // { ...(isSaveButtonDisabled ? { variant: 'primary' } : { variant: 'success' }) }
          variant={ isSaveButtonDisabled ? 'outline-success' : 'success' }
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </Button>

      </form>
    );
  }
}

FormApp.defaultProps = { onFocus: () => {} };

FormApp.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
};

export default FormApp;
