export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * @param {any} name
   */
  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
   * @param {any} code
   */
  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
