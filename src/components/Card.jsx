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
      pokemonTypeTwo,
    } = this.props;

    const legend = cardRare === 'lendário';

    return (
      <div
        className="CardDiv"
        style={ legend ? { outline: '5px solid gold' } : {} }
      >

        <div className="Input">
          {
            deleteButton ? <input
              type="button"
              value=""
              data-testid="delete-button"
              onClick={ onClickDelete }
            /> : ''
          }
        </div>

        <div
          className="H2"
          style={
            legend
              ? { background: 'linear-gradient(to bottom, gold 0%, goldenrod 80%)' } : {}
          }
        >
          <h2 data-testid="name-card">{ cardName }</h2>
          <div className="ElementsDiv">
            <PokemonType pokemonType={ pokemonType } />
            <PokemonType pokemonType={ pokemonTypeTwo } />
          </div>
        </div>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" className="Ig" />

        <div className="P">
          <p data-testid="description-card">{ cardDescription }</p>
        </div>

        <div className="attrDiv">
          <div className="attr">
            <h4>Força</h4>
            <h1 data-testid="attr1-card">{ cardAttr1 }</h1>
          </div>
          <div className="attr">
            <h4>Defesa</h4>
            <h1 data-testid="attr2-card">{ cardAttr2 }</h1>
          </div>
          <div className="attr">
            <h4>Agilidade</h4>
            <h1 data-testid="attr3-card">{ cardAttr3 }</h1>
          </div>
        </div>

        <h2
          data-testid="rare-card"
          className="CardRareCard"
          style={ legend ? { color: 'gold' } : {} }
        >
          { cardRare }
        </h2>

        {
          cardTrunfo
            ? <h3 data-testid="trunfo-card" className="rainbow RTA">Super Trunfo</h3>
            : <h3> </h3>
        }
      </div>
    );
  }
}

Card.defaultProps = {
  deleteButton: false,
  onClickDelete: () => {},
  pokemonType: '',
  pokemonTypeTwo: '',
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  pokemonType: PropTypes.string,
  pokemonTypeTwo: PropTypes.string,
  cardTrunfo: PropTypes.bool.isRequired,
  onClickDelete: PropTypes.func,
  deleteButton: PropTypes.bool,
};

export default Card;
