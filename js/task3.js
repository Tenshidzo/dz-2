var saladOrAppetizer = prompt("Введіть вид салату або закуску:");
var firstCourse = prompt("Введіть вид першої страви:");
var mainCourse = prompt("Введіть вид другої страви:");
var dessert = prompt("Введіть вид десерту:");
var saladOrAppetizerPrice = 67.5;
var firstCoursePrice = 103.9;
var mainCoursePrice = 89.5;
var dessertPrice = 53.6;
var totalCost = 0;
if (saladOrAppetizer !== null) {
    totalCost += saladOrAppetizerPrice;
}
if (firstCourse !== null) {
    totalCost += firstCoursePrice;
}
if (mainCourse !== null) {
    totalCost += mainCoursePrice;
}
if (dessert !== null) {
    totalCost += dessertPrice;
}
var orderMessage;
if (totalCost > 0) {
    orderMessage = "Ваше замовлення:\n";
    
    if (saladOrAppetizer !== null) {
        orderMessage += "- " + saladOrAppetizer + " - " + saladOrAppetizerPrice.toFixed(2) + " грн\n";
    }

    if (firstCourse !== null) {
        orderMessage += "- " + firstCourse + " - " + firstCoursePrice.toFixed(2) + " грн\n";
    }

    if (mainCourse !== null) {
        orderMessage += "- " + mainCourse + " - " + mainCoursePrice.toFixed(2) + " грн\n";
    }

    if (dessert !== null) {
        orderMessage += "- " + dessert + " - " + dessertPrice.toFixed(2) + " грн\n";
    }

    orderMessage += "Загальна сума: " + totalCost.toFixed(2) + " грн";
} else {
    orderMessage = "На жаль, Ви нічого не замовили.";
}
alert(orderMessage);