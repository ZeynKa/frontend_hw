const rating = prompt("Пожалуйста оцените сервис от 1 до 10:")

if (!isNaN(rating) && rating <= 10) {
    const score = parseInt(rating);

    if (score > 5 ) {
        console.log("спасибо за высокую оценку!");
    } else{
        console.log("Мы раюотаем над улушением сервиса")
    }
} else {
    console.log("Ошибка: пожалуйста ввкдите оценку от 1 до 10.")
}

// const language = prompt("Пожалуйста, выберите язык (ENG или RUS):");
//
// if (language === "ENG") {
//     const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     console.log(daysOfWeek);
// } else if (language === "RUS") {
//     const daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
//     console.log(daysOfWeek);
// } else {
//     console.log("Ошибка: Пожалуйста, выберите язык ENG или RUS.");
// }