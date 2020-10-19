export default class BodyMassIndex {
  setName(name) {
    this.name = name;
  }

  setSize(size) {
    this.size = size;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  display() {
    return `${this.name} : ${this.weight} / ${this.size} a un IMC de ${
      this.imc
    }`;
  }

  _calculerIMC() {
    this.imc = (this.weight / (this.size * this.size)).toFixed(2);
  }
}
