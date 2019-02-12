import { observable, computed, action } from 'mobx';

class Store {
  @observable
  value = window.localStorage.getItem('value') * 1;

  @observable
  fee = window.localStorage.getItem('fee') * 1;

  @computed
  get amountValue() {
    return this.value;
  }

  @computed
  get feeValue() {
    return this.fee;
  }

  @action
  setValue(value) {
    this.value = value;
    window.localStorage.setItem('value', value);
  }

  @action
  setFee(fee) {
    this.fee = fee;
    window.localStorage.setItem('fee', fee);
  }

  @computed
  get fixedFeeValue() {
    if (this.amountValue === 0 || this.feeValue === 0) {
      return '-';
    }
    return (this.amountValue / this.feeValue).toFixed(2);
  }
}
export default Store;
