module.exports = class {
  #collection = [];

  constructor(collection = []) {
    for (let element of collection) {
      this.add(element);
    }
  }

  *values() {
    for (let element of this.#collection) {
      yield element;
    }
  }

  *keys() {
    yield* this.values();
  }

  *entries() {
    for (let element of this.#collection) {
      yield [element, element];
    }
  }
  
  *[Symbol.iterator]() {
    yield* this.values();
  };

  has(element) {
    return this.#collection.includes(element);
  }

  size() {
    return this.#collection.length;
  }

  clear() {
    this.#collection.length = 0;
  }

  delete(element) {
    if (this.has(element)) {
      let index = this.#collection.indexOf(element);
      this.#collection.splice(index, 1);
      return this;
    }
    return this;
  }

  add(element) {
    if (!this.#collection.includes(element)) {
      this.#collection.push(element);
      return this;
    }
    return this;
  }

  forEach(callback, data) {
    for (let element of this.#collection) {
      callback.bind(data)(element);
    }
  }

  toString() {
    return `[object ^_^]`;
  }

}