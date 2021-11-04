module.exports = class {
  // static _uniq(coll) {
  //   const prims = { "boolean": {}, "number": {}, "string": {} }, objs = [];

  //   return coll.filter((item) => {
  //     const type = typeof item;
  //     if (type in prims)
  //       return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
  //     else {
  //       return objs.indexOf(item) >= 0 ? false : objs.push(item);
  //     }
  //   });
  // }

  constructor(collection = []) {
    // const uniqCollection = this.constructor._uniq(collection);
    this.collection = collection;
  }

  
  [Symbol.iterator] = function() {
    let index = 0;
    let collection = this.collection;
    let length = this.collection.length;

    return {
      next: function() {
        return index < length ?
          { value: collection[index++], done: false } :
          { done: true };
      }
    }
  };

  has(element) {
    return this.collection.includes(element);
  }

  size() {
    return this.collection.length;
  }

  clear() {
    this.collection.length = 0;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return this;
    }
    return this;
  }
}