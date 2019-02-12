import React from 'react';
import PropTypes from 'prop-types';
import style from './mainContainer.scss';

const ButtonsBox = ({fixedFeeValue}) => (
  <div className={style.buttonsBoxContainer}>
    <div className={style.fixedFeeValueContainer}>
      <div className={style.fixedFeeValueInformation}>CUOTA FIJA POR MES</div>
      <div className={style.fixedFeeValue}>$ {fixedFeeValue}</div>
    </div>
  <div className={style.ButtonsContainer}>
  <div className={style.getCreditButton}>OBTENÉ CRÉDITO</div>
    <div className={style.detailsButton}>VER DETALLE DE CUOTAS</div>
  </div>
  </div>
);

ButtonsBox.propTypes = {
  fixedFeeValue: PropTypes.number,
};

export default ButtonsBox;
