var words = [];
do {
    var userInput = prompt("Введіть слово:");
    if (userInput !== null) {
        words.push(userInput);
    }
} while (confirm("Досить?") === false);
var result = words.join(' ');
alert("Рядок із введеними словами:\n" + result);