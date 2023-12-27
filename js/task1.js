
var speakEnglish = confirm("Do you speak English?");
var parlezVousFrancais = confirm("Parlez-vous Francais?");
var sprechenZiDeutch = confirm("Sprechen Zi Deutch?");
var ukrainianLanguage = confirm("Чи володієте Ви українською мовою?");
var speakRussian = confirm("Говорите по-русски?");
var speakSpanish = confirm("¿Habla usted español?");
var numberOfLanguagesKnown = 
    (speakEnglish ? 1 : 0) +
    (parlezVousFrancais ? 1 : 0) +
    (sprechenZiDeutch ? 1 : 0) +
    (ukrainianLanguage ? 1 : 0) +
    (speakRussian ? 1 : 0) +
    (speakSpanish ? 1 : 0);
var message = "Ви знаєте " + numberOfLanguagesKnown;
if (numberOfLanguagesKnown === 1) {
    message += " мову";
} else if (numberOfLanguagesKnown >= 2 && numberOfLanguagesKnown <= 4) {
    message += " мови";
} else {
    message += " мов";
}
alert(message);