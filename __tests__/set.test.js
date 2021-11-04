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

  // it('Set хранит только уникальные значения', () => {
  //   const newSet = new mySet([5, 1, 2, 3, 4, 4, 5 ]);

  //   const expected = [ 1, 2, 3 ];

  //   expect([...newSet]).toEqual(expected);
  // });

  it('Метод clear очищает значения в Set', () => {
    const newSet = new mySet([1, 2, 3]);

    expect(newSet.size()).toEqual(3);

    newSet.clear();

    expect(newSet.size()).toEqual(0);
  });
  
})