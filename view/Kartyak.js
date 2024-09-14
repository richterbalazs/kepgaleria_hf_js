import Kartya from "./Kartya.js";

export default class Kartyak {
  #lista = [];
  #szuloElem;

  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.#szuloElem = szuloElem;
    this.kartyakkiir();
  }

  kartyakkiir() {
    this.#lista.forEach((elem) => {
      console.log(elem);
      new Kartya(elem, this.#szuloElem);
    });
  }
}
