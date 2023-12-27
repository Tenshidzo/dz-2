var number1 = parseFloat(prompt("Введіть перше число:"));
var number2 = parseFloat(prompt("Введіть друге число:"));
var increment = 5;
var attempts = 0;
do {
    var sum = number1 + number2;
    var userAnswer = parseFloat(prompt("Підрахуйте суму чисел " + number1 + " і " + number2 + " (кожне число збільште на " + increment + "):"));
    if (userAnswer === sum) {
        increment += 5;
        attempts++;
    } else {
        break;
    }
} while (true);
alert("На жаль, Ви все-таки помилилися після " + attempts + " спроб. Результат: " + sum);