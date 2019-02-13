import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Title from './title';
import Store from '../store/store';
import './home.scss';

let counter;

@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.store = new Store();
    this.inputFocus = React.createRef();
  }

  componentDidMount() {
    counter = setInterval(this.calcTime, 1000);
    console.log('componentDidMount');
    this.inputFocus.current.focus();
  }

  componentWillUnmount() {
    clearInterval(counter);
  }

  calcTime = () => {
    this.store.setTime();
  };

  handleOnClickPrint = event => {
    console.log(this.store.searchTerm);
  };

  handleOnChange = event => {
    this.store.setSearchTerm(event.target.value);
  };

  handleOnClickClear = () => {
    this.store.setSearchTerm('');
  };

  render() {
    return (
      <div>
        <Title>
          Bienvenidos al Simulador de Créditos más utilizado de Argentina
        </Title>
        <h2> Tiempo de navegación: {this.store.timeValue}s</h2>
        <input
          ref={this.inputFocus}
          type="text"
          value={this.store.searchTerm}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleOnClickPrint}>Imprimir</button>
        <button onClick={this.handleOnClickClear}>Vaciar</button>

        <br />
        <Link to="/simulation">Ir a simulador</Link>
      </div>
    );
  }
}

export default Home;
