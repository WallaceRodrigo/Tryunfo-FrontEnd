import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Styles/Form.css';
import TrumpValidation from './Validations/TrumpValidation';
import TrumpValidationTwo from './Validations/TrumpValidationTwo';
import PokemonTypeSelect from './Validations/PokemonTypeSelect';

class Form extends Component {
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

    return (
      <form className="NewCardForm">
        <h1>ADICIONE NOVA CARTA</h1>
        <label htmlFor="cardName">
          Nome da carta
          <input
            type="text"
            name="cardName"
            id="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            onFocus={ onFocus }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição da carta
          <textarea
            name="cardDescription"
            id="cardDescription"
            data-testid="description-input"
            maxLength="150"
            value={ cardDescription }
            onChange={ onInputChange }
            onFocus={ onFocus }
          />
        </label>

        <label htmlFor="cardAttr1">
          Primeiro Atributo
          <input
            type="number"
            name="cardAttr1"
            id="cardAttr1"
            data-testid="cardAttr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            onFocus={ onFocus }
          />
        </label>
        <label htmlFor="cardAttr2">
          Segundo Atributo
          <input
            type="number"
            name="cardAttr2"
            id="cardAttr2"
            data-testid="cardAttr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            onFocus={ onFocus }
          />
        </label>
        <label htmlFor="cardAttr3">
          Terceiro Atributo
          <input
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            data-testid="cardAttr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            onFocus={ onFocus }
          />
        </label>

        <label htmlFor="cardImage">
          Url da imagem
          <input
            type="text"
            name="cardImage"
            id="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            onFocus={ onFocus }
          />
        </label>

        <PokemonTypeSelect onInputChange={ onInputChange } />

        <label htmlFor="cardRare" className="CardRareForm">
          Raridade
          <select
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        {
          !hasTrunfo ? <TrumpValidation
            cardTrunfo={ cardTrunfo }
            onInputChange={ onInputChange }
          /> : <TrumpValidationTwo />
        }

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
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
  onFocus: PropTypes.func.isRequired,
};

export default Form;
