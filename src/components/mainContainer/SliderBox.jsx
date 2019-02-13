import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import style from './mainContainer.scss';

const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return <Handle value={value} {...restProps} />;
};

const MIN_AMOUNT = 5000;
const MAX_AMOUNT = 50000;
const parseValue = (value, checkMin) => {
  let val = value.replace(/[^0-9]/g, '') * 1;
  console.log('parseAmount', val);

  if (checkMin && val < MIN_AMOUNT) {
    val = MIN_AMOUNT;
  }

  if (val > MAX_AMOUNT) {
    val = MAX_AMOUNT;
  }
  return val;
};

const formatNumber = value => {
  const val = value.toFixed(0).split('.');
  const num =
    val[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +
    (val[1] ? ',' + val[1] : '');

  return num;
};

const parseFee = (value, onBlurCheck) => {
  let val = value.replace(/[^0-9.]/g, '') * 1;
  if (onBlurCheck && val < 3) {
    val = 3;
  }
  if (val > 24) {
    val = 24;
  }

  return val;
};

const SliderBox = ({ handleChangeValue, handleChangeFee, value, fee }) => (
  <div className={style.sliderBoxContainer}>
    <div className={style.mainSliderInformation}>
      <div className={style.mainLeftInformation}>MONTO TOTAL</div>
      <input
        type="text"
        value={`$ ${formatNumber(value)}`}
        className={style.mainRightInformation}
        onBlur={event =>
          handleChangeValue(parseValue(event.target.value, true))
        }
        onChange={event => handleChangeValue(parseValue(event.target.value))}
      />
    </div>
    <div className={style.slider}>
      <Slider
        min={5000}
        max={50000}
        value={value}
        handle={handle}
        onChange={value => handleChangeValue(value)}
      />
    </div>
    <div className={style.extraSliderInformation}>
      <div className={style.extraLeftInformation}>$ 5.000</div>
      <div className={style.extraRightInformation}>$ 50.000</div>
    </div>

    <div className={style.mainSliderInformation}>
      <div className={style.mainLeftInformation}>PLAZO</div>
      <input
        type="number"
        value={fee}
        className={style.mainRightInformation}
        onBlur={event => handleChangeFee(parseFee(event.target.value, true))}
        onChange={event => handleChangeFee(parseFee(event.target.value))}
      />
    </div>
    <div className={style.slider}>
      <Slider
        min={3}
        max={24}
        value={fee}
        handle={handle}
        onChange={value => handleChangeFee(value)}
      />
    </div>
    <div className={style.extraSliderInformation}>
      <div className={style.extraLeftInformation}>3</div>
      <div className={style.extraRightInformation}>24</div>
    </div>
  </div>
);

SliderBox.propTypes = {
  handleChangeValue: PropTypes.func,
  handleChangeFee: PropTypes.func,
  value: PropTypes.number,
  fee: PropTypes.number,
};

export default SliderBox;
