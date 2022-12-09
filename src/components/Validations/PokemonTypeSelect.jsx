import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap';

class PokemonTypeSelect extends Component {
  render() {
    const {
      onInputChange,
      second,
      pokemonTypeTwo,
      labelName,
      firstOption,
    } = this.props;

    return (
      <FloatingLabel label={ labelName } className="mb-3">
        <Form.Select
          name={ pokemonTypeTwo }
          id={ pokemonTypeTwo }
          defaultValue="Selecione o Tipo do pokemon"
          onChange={ onInputChange }
        >
          <option
            value="Selecione o Tipo do pokemon"
            disabled
          >
            { firstOption }
          </option>
          {
            second ? <option value="Nenhum">Nenhum</option> : ''
          }
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
        </Form.Select>
      </FloatingLabel>

    // <label htmlFor="pokemonType" className="pokemonType">
    //   { labelName }
    //   <select
    //     name={ pokemonTypeTwo }
    //     id={ pokemonTypeTwo }
    //     defaultValue="Selecione o Tipo do pokemon"
    //     onChange={ onInputChange }
    //   >
    //     <option
    //       value="Selecione o Tipo do pokemon"
    //       disabled
    //     >
    //       { firstOption }
    //     </option>
    //     {
    //       second ? <option value="Nenhum">Nenhum</option> : ''
    //     }
    //     <option value="Água">Água</option>
    //     <option value="Dragão">Dragão</option>
    //     <option value="Elétrico">Elétrico</option>
    //     <option value="Fada">Fada</option>
    //     <option value="Fantasma">Fantasma</option>
    //     <option value="Fogo">Fogo</option>
    //     <option value="Gelo">Gelo</option>
    //     <option value="Inseto">Inseto</option>
    //     <option value="Lutador">Lutador</option>
    //     <option value="Metálico">Metálico</option>
    //     <option value="Normal">Normal</option>
    //     <option value="Noturno">Noturno</option>
    //     <option value="Pedra">Pedra</option>
    //     <option value="Planta">Planta</option>
    //     <option value="Psíquico">Psíquico</option>
    //     <option value="Terra">Terra</option>
    //     <option value="Venenoso">Venenoso</option>
    //     <option value="Voador">Voador</option>
    //   </select>
    // </label>
    );
  }
}

PokemonTypeSelect.defaultProps = {
  second: false,
  pokemonTypeTwo: 'pokemonType',
  labelName: 'Tipo do Pokemon',
  firstOption: 'Selecione o tipo do pokemon',
};

PokemonTypeSelect.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  second: PropTypes.bool,
  pokemonTypeTwo: PropTypes.string,
  labelName: PropTypes.string,
  firstOption: PropTypes.string,
};

export default PokemonTypeSelect;
