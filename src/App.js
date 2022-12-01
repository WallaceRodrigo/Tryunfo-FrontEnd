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
  cardRare: '',
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
      isSaveButtonDisabled,
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
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
      </div>
    );
  }
}

export default App;
