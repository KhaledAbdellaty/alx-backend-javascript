export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (!this.evacuationWarningMessage || typeof this.evacuationWarningMessage !== 'function') {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  /**
     * @param {Number} sqft
     */
  set sqft(sqft) {
    if (typeof sqft !== 'number') throw TypeError('Sqft must be a number');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
