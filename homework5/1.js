"use strict";

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

// 1 вариант
Object.entries(numbers).forEach(el => {
  if (el[1] >= 3) {
    console.log(el);
  }
});

// 2 вариант
for (let key in numbers) {
  // Тут проверяем, что свойство принадлежит объекту, а не находится в цепочке прототипов.
  if(numbers.hasOwnProperty(key) && numbers[key] >= 3) {
    console.log({key: numbers[key]});
  }
}