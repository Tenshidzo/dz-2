var monthlyIncome = parseFloat(prompt("Скільки грошей вам потрібно на місяць, щоб нормально почуватися і дозволяти собі все, що хочеться?"));
if (monthlyIncome <= 100) {
    alert("Скромні у тебе запити.");
} else if (monthlyIncome <= 300) {
    alert("Тобі точно вистачає?");
} else if (monthlyIncome <= 500) {
    alert("Напевно, роботу вдало знайшов...");
} else if (monthlyIncome <= 1000) {
    alert("Ти сам ці гроші заробляєш?");
} else {
    var isBusinessOwner = confirm("Ти бізнесмен?");
    if (isBusinessOwner) {
        alert("Вражає! Бажаємо успіхів у бізнесі!");
    } else {
        alert("Цікаво, звідки у вас такий високий дохід!");
    }
}