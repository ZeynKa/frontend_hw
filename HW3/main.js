// Задание 1

//
// function getDataType(value) {
//     const dataType = typeof value;
//     console.log(dataType);
// }
//
// getDataType(false);
// getDataType('hello world!');
// getDataType(42);
//
//
// // Задание 2


// function calculate(num1, operator, num2) {
//   let result;
//
//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     default:
//       console.log('Неподдерживаемая операция');
//       return;
//   }
//
//   console.log(result);
// }
//
// calculate(40, '+', 2);
// calculate(52, '-', 12);
// calculate(30, '/', 3);
// calculate(23, '*', 10);

// Задание 3
//
// var myArray = [2, 1, 4, 5, 7];
//
// var getPositionArrayElement = (element, array) => {
//     for (var i = 0; i< array.length; i++) {
//         if (array[i] === element) {
//             return console.log(array.indexOf(element))
//         } else {
//             return console.log('error')
//         }
//     }
// }
//
// getPositionArrayElement(5, myArray);