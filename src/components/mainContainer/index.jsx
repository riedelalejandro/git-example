import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import style from './mainContainer.scss';
import SliderBox from './SliderBox';
import ButtonsBox from './ButtonsBox';
import Store from '../store/store';

@observer
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.store = new Store();
  }

  changeFee = fee => {
    this.store.setFee(fee);
  };

  changeValue = value => {
    this.store.setValue(value);
  };

  render() {
    return (
      <div className={style.mainContainer}>
        <div className={style.simulateCreditTitle}>Simulá tu crédito</div>
        <SliderBox
          value={this.store.value}
          fee={this.store.fee}
          handleChangeValue={this.changeValue}
          handleChangeFee={this.changeFee}/>
        <ButtonsBox fixedFeeValue={this.store.fixedFeeValue}/>
      </div>
    );
  }
}

MainContainer.propTypes = {};

export default MainContainer;
