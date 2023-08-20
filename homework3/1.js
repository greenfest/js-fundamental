"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const cube = getCube(3);
console.log(cube);

function getCube(number) {
    if (number && typeof number === 'number') {
        return Math.pow(number, 3);
    } else {
        return 'Передано некорректное значение';
    }
}