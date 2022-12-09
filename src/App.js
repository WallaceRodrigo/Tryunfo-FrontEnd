import React from 'react';
import FormApp from './components/Form';
import Card from './components/Card';
import './App.css';
import NameFilter from './components/NameFilter';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardState: [],
  pokemonType: '',
  pokemonTypeTwo: '',
  nameFilter: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  saveButtonValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const initialState = {
      cardName: 'Nome do Pokemon',
      cardDescription: 'Breve descrição do Pokemon',
    };

    const maxAllAttrNumber = 210;
    const maxAttrNumber = 90;
    const Attr1Num = Number(cardAttr1);
    const Attr2Num = Number(cardAttr2);
    const Attr3Num = Number(cardAttr3);

    const validateInputs = cardName && cardDescription && cardImage && cardRare !== '';

    const validateInputsTwo = cardName !== initialState.cardName
      && cardDescription !== initialState.cardDescription;

    const validadeMaxAttr = Attr1Num <= maxAttrNumber
    && Attr2Num <= maxAttrNumber && Attr3Num <= maxAttrNumber;

    const validadeAttrSum = Attr1Num + Attr2Num + Attr3Num <= maxAllAttrNumber;

    const validadeAttrNegative = Attr1Num >= 0 && Attr2Num >= 0 && Attr3Num >= 0;

    this.setState({
      isSaveButtonDisabled: !(validateInputs && validadeAttrSum
        && validadeMaxAttr && validadeAttrNegative && validateInputsTwo),
    });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.saveButtonValidation);
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();

    const { state } = this;

    this.setState((prevState) => ({
      cardState: [...prevState.cardState, state],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      pokemonType: '',
      pokemonTypeTwo: '',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    }, this.hasTrunfo);
  };

  hasTrunfo = () => {
    const { cardState } = this.state;
    cardState.some((state) => (
      state.cardTrunfo === true ? this.setState({ hasTrunfo: true })
        : ''
    ));
  };

  onClickDelete = (state) => {
    const { cardState } = this.state;
    const filteredState = cardState.filter((card) => card !== state);

    this.setState({
      cardState: filteredState,
    });

    if (state.cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
  };

  onFocus = ({ target }) => {
    const { name } = target;

    this.setState({ [`${name}Validation`]: true });
  };

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
      cardState,
      pokemonType,
      pokemonTypeTwo,
      cardNameValidation,
      cardDescriptionValidation,
      cardImageValidation,
      nameFilter,
    } = this.state;

    return (
      <div>
        <div className="Form">
          <FormApp
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            onFocus={ this.onFocus }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            pokemonType={ pokemonType }
            pokemonTypeTwo={ pokemonTypeTwo }
            cardNameValidation={ cardNameValidation }
            cardDescriptionValidation={ cardDescriptionValidation }
            cardImageValidation={ cardImageValidation }
          />
        </div>
        <h2 className="AllCardsHeader">TODAS AS CARTAS</h2>
        <NameFilter
          onInputChange={ this.handleChange }
        />
        <div className="SavedCards">
          {
            cardState.filter((card) => (
              card.cardName.toLowerCase().includes(nameFilter.toLowerCase())
            ))
              .map((state) => (
                <Card
                  key={ state.cardName }
                  cardName={ state.cardName }
                  cardDescription={ state.cardDescription }
                  cardAttr1={ state.cardAttr1 }
                  cardAttr2={ state.cardAttr2 }
                  cardAttr3={ state.cardAttr3 }
                  cardImage={ state.cardImage }
                  cardRare={ state.cardRare }
                  cardTrunfo={ state.cardTrunfo }
                  pokemonType={ state.pokemonType }
                  pokemonTypeTwo={ state.pokemonTypeTwo }
                  onClickDelete={ () => (this.onClickDelete(state)) }
                  deleteButton
                />
              ))
          }
        </div>
      </div>
    );
  }
}

export default App;
