import { observable, computed, action } from 'mobx';

class Store {
  @observable
  value = 5000;

  @observable
  fee = 3;

  @action
  setValue(value) {
    this.value = value;
  }

  @action
  setFee(fee) {
    this.fee = fee;
  }

  @computed
  get fixedFeeValue() {
    if (this.value === 0 || this.fee === 0) {
      return '-';
    }
    return (this.value / this.fee).toFixed(2);
  }
}
export default Store;
