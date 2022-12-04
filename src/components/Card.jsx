import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonType from './Validations/PokemonType';
import './Styles/Card.css';

class Card extends Component {
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
      deleteButton,
      onClickDelete,
      pokemonType,
    } = this.props;

    return (
      <div className="CardDiv">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <PokemonType pokemonType={ pokemonType } />
        <div className="attrDiv">
          <div className="attr">
            <h4>Atributo 1</h4>
            <h1 data-testid="attr1-card">{ cardAttr1 }</h1>
          </div>
          <div className="attr">
            <h4>Atributo 2</h4>
            <h1 data-testid="attr2-card">{ cardAttr2 }</h1>
          </div>
          <div className="attr">
            <h4>Atributo 3</h4>
            <h1 data-testid="attr3-card">{ cardAttr3 }</h1>
          </div>
        </div>
        <h2 data-testid="rare-card">{ cardRare }</h2>
        {
          cardTrunfo ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : <h3> </h3>
        }
        {
          deleteButton ? <input
            type="button"
            value="Excluir"
            data-testid="delete-button"
            onClick={ onClickDelete }
          /> : ''
        }
      </div>
    );
  }
}

Card.defaultProps = { deleteButton: false, onClickDelete: () => {} };

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  pokemonType: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onClickDelete: PropTypes.func,
  deleteButton: PropTypes.bool,
};

export default Card;
