import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardState: [],
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

const newCardState = [];

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

    const maxAllAttrNumber = 210;
    const maxAttrNumber = 90;
    const Attr1Num = Number(cardAttr1);
    const Attr2Num = Number(cardAttr2);
    const Attr3Num = Number(cardAttr3);

    const validateInputs = cardName && cardDescription && cardImage && cardRare !== '';
    const validadeMaxAttr = Attr1Num <= maxAttrNumber
    && Attr2Num <= maxAttrNumber && Attr3Num <= maxAttrNumber;
    const validadeAttrSum = Attr1Num + Attr2Num + Attr3Num <= maxAllAttrNumber;
    const validadeAttrNegative = Attr1Num >= 0 && Attr2Num >= 0 && Attr3Num >= 0;

    this.setState({
      isSaveButtonDisabled: !(validateInputs && validadeAttrSum
        && validadeMaxAttr && validadeAttrNegative),
    });
  };

  handleChange = async ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    await this.setState({
      [name]: value,
    }, this.saveButtonValidation);
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();

    newCardState.push(this.state);

    this.setState({
      cardState: newCardState,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    }, this.hasTrunfo);
  };

  hasTrunfo = () => {
    const { cardState } = this.state;
    cardState.some((state) => (
      state.cardTrunfo === true ? this.setState({ hasTrunfo: true }) : ''
    ));
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
    } = this.state;

    return (
      <div className="Form">
        <Form
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
        />
        <div>
          {
            cardState.map((state) => (
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
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
