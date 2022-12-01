import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="cardName">
          Nome da carta
          <input
            type="text"
            name="cardName"
            id="cardName"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição da carta
          <textarea
            name="cardDescription"
            id="cardDescription"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Primeiro Atributo
          <input
            type="number"
            name="attr1"
            id="attr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Segundo Atributo
          <input
            type="number"
            name="attr2"
            id="attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Terceiro Atributo
          <input
            type="number"
            name="attr3"
            id="attr3"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="imageSrc">
          Url da imagem
          <input
            type="text"
            name="imageSrc"
            id="imageSrc"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rarity">
          <select
            name="rarity"
            id="rarity"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trumpCard">
          <input
            type="checkbox"
            name="trumpCard"
            id="trumpCard"
            data-testid="trunfo-input"
          />
        </label>

        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
