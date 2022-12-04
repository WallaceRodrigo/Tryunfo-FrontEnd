import React, { Component } from 'react';
import '../Styles/PokemonType.css';
import PropTypes from 'prop-types';
import Água from '../../images/Tipo_água.webp';
import Dragão from '../../images/Tipo_dragão.webp';
import Elétrico from '../../images/Tipo_elétrico.webp';
import Fada from '../../images/Tipo_fada.webp';
import Fantasma from '../../images/Tipo_fantasma.webp';
import Fogo from '../../images/Tipo_fogo.webp';
import Gelo from '../../images/Tipo_gelo.webp';
import Inseto from '../../images/Tipo_inseto.webp';
import Lutador from '../../images/Tipo_lutador.webp';
import Metálico from '../../images/Tipo_metálico.webp';
import Normal from '../../images/Tipo_normal.webp';
import Noturno from '../../images/Tipo_noturno.webp';
import Pedra from '../../images/Tipo_pedra.webp';
import Planta from '../../images/Tipo_planta.webp';
import Psíquico from '../../images/Tipo_psíquico.webp';
import Terra from '../../images/Tipo_terra.webp';
import Venenoso from '../../images/Tipo_venenoso.webp';
import Voador from '../../images/Tipo_voador.webp';

class PokemonType extends Component {
  render() {
    const { pokemonType } = this.props;

    const pokemonTypes = [
      'Água',
      'Dragão',
      'Elétrico',
      'Fada',
      'Fantasma',
      'Fogo',
      'Gelo',
      'Inseto',
      'Lutador',
      'Metálico',
      'Normal',
      'Noturno',
      'Pedra',
      'Planta',
      'Psíquico',
      'Terra',
      'Venenoso',
      'Voador',
    ];
    const pokemonTypeImg = [
      Água,
      Dragão,
      Elétrico,
      Fada,
      Fantasma,
      Fogo,
      Gelo,
      Inseto,
      Lutador,
      Metálico,
      Normal,
      Noturno,
      Pedra,
      Planta,
      Psíquico,
      Terra,
      Venenoso,
      Voador,

    ];

    const pokemonTypeCurrentImage = pokemonTypeImg.find(
      (el) => el.includes(pokemonType.toLowerCase()),
    );

    return (
      <div className="Element">

        {
          pokemonTypes.some((el) => pokemonType.includes(el))
            ? <img src={ pokemonTypeCurrentImage } alt="" /> : ''
        }

      </div>
    );
  }
}

PokemonType.defaultProps = { pokemonType: '' };

PokemonType.propTypes = {
  pokemonType: PropTypes.string,
};

export default PokemonType;
