import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonTypeSelect extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <label htmlFor="pokemonType" className="pokemonType">
        Tipo do Pokemon
        <select
          name="pokemonType"
          id="pokemonType"
          defaultValue="Selecione o Tipo do pokemon"
          onChange={ onInputChange }
        >
          <option
            value="Selecione o Tipo do pokemon"
            disabled
          >
            Selecione o tipo do pokemon
          </option>

          <option value="Água">Água</option>
          <option value="Dragão">Dragão</option>
          <option value="Elétrico">Elétrico</option>
          <option value="Fada">Fada</option>
          <option value="Fantasma">Fantasma</option>
          <option value="Fogo">Fogo</option>
          <option value="Gelo">Gelo</option>
          <option value="Inseto">Inseto</option>
          <option value="Lutador">Lutador</option>
          <option value="Metálico">Metálico</option>
          <option value="Normal">Normal</option>
          <option value="Noturno">Noturno</option>
          <option value="Pedra">Pedra</option>
          <option value="Planta">Planta</option>
          <option value="Psíquico">Psíquico</option>
          <option value="Terra">Terra</option>
          <option value="Venenoso">Venenoso</option>
          <option value="Voador">Voador</option>
        </select>
      </label>
    );
  }
}

PokemonTypeSelect.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default PokemonTypeSelect;
