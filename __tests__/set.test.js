const { expect } = require('@jest/globals');
const exp = require('constants');
const mySet = require('../solution/index');

describe('Тестирование множества Set', () => {
  it('Метод has, проверка существования значения в Set', () => {
    const newSet = new mySet([1, 2]);

    const elementInSet = newSet.has(2);
    const elementNotInSet = newSet.has(3);

    expect(elementInSet).toBeTruthy();
    expect(elementNotInSet).toBeFalsy();
  });

  it('Метод size, возвращает размер данных в Set', () => {
    const newSet = new mySet([1, 2, 3]);

    expect(newSet.size()).toEqual(3);
  });

  it('Метод add, можно добавить значения в Set', () => {
    const newSet = new mySet();
    newSet.add('one').add('two');

    const expected = [ 'one', 'two' ];

    expect([...newSet]).toEqual(expected);
  });

  it('Set хранит только уникальные значения', () => {
    const newSet = new mySet([5, 1, 2, 3, 3, 4, 4, 5 ]);

    const expected = [ 5, 1, 2, 3, 4 ];

    expect([...newSet]).toEqual(expected);
  });

  it('Метод clear очищает значения в Set', () => {
    const newSet = new mySet([1, 2, 3]);

    expect(newSet.size()).toEqual(3);

    newSet.clear();

    expect(newSet.size()).toEqual(0);
  });

  it('Метод delete удаляет значения в Set', () => {
    const newSet = new mySet([1, 2, 3]);

    newSet.delete(2);
    const expected = [ 1, 3 ];

    expect([...newSet]).toEqual(expected);
  });

  it('Метод values возвращает значения Set', () => {
    const newSet = new mySet([1, 2, 3]);

    const expected = [ 1, 2, 3 ];

    expect([...newSet]).toEqual(expected);
  });

  it('Метод entries возвращает entries Set', () => {
    const newSet = new mySet([1, 2, 3]);

    let res = [];

    for (let el of newSet.entries()) {
      res.push(el)
    }

    const expected = [[1, 1], [2, 2], [3, 3]];

    expect(res).toEqual(expected);
  });

  it('Метод forEach вызывается для объекта без потери контекста', () => {
    const newSet = new mySet();

    const object = {
      getValue () { return this.value }
    }
  
    const data = {
      value: 42
    }

    let res = [];

    newSet.add(object);

    newSet.forEach(function (item) {
      res.push(item.getValue.call(this));
    }, data);

    const expected = [42];

    expect(res).toEqual(expected);
  });

  it('Проверка valueOf', () => {
    const newSet = new mySet();
    console.log(newSet.valueOf())

    expect(newSet).toEqual(newSet.valueOf());
  });

  it('Проверка приведения к строке', () => {
    const newSet = new mySet();
    const res = String(newSet);

    const expected = '[object ^_^]';
    expect(res).toEqual(expected);
    expect(Object.prototype.toString.call(newSet)).toEqual(expected);
  });
})