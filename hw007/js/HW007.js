// first task
const translateToUkrainian = (word) => {
    let translation;
    switch (word.toLowerCase()) {
        case 'apple':
            translation = 'яблуко';
            break;
        case 'banana':
            translation = 'банан';
            break;
        case 'orange':
            translation = 'апельсин';
            break;
        case 'grape':
            translation = 'виноград';
            break;
        case 'kiwi':
            translation = 'ківі';
            break;
        default:
            translation = 'Переклад не знайдено';
    }
    return translation;
};


document.getElementById('translate').addEventListener('click', () => {
    const englishWord = prompt('Введіть слово англійською мовою:');
    const ukrainianTranslation = translateToUkrainian(englishWord);
    alert(ukrainianTranslation);
});
// second task
const quizzes = [
    {
        question: "Яка столиця України?",
        options: ["Львів", "Харків", "Київ", "Одеса"],
        correctAnswer: 2
    },
    {
        question: "Скільки континентів на Землі?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2
    },
    {
        question: "Яка найбільша планета Сонячної системи?",
        options: ["Марс", "Юпітер", "Венера", "Сатурн"],
        correctAnswer: 1
    }
];

const startQuiz = (quizzes) => {
    quizzes.forEach((quiz, index) => {
        let optionsText = quiz.options.map((option, i) => `${i + 1}. ${option}`).join('\n');
        let userAnswer = parseInt(prompt(`${quiz.question}\n${optionsText}`)) - 1;
        checkAnswer(userAnswer, quiz);
    });
};

const checkAnswer = (userAnswer, quiz) => {
    if (userAnswer === quiz.correctAnswer) {
        console.log("Правильно!");
    } else {
        console.log(`НЕ правильно! правильна відповідь: ${quiz.options[quiz.correctAnswer]}`);
    }
};

document.getElementById('startQuiz').addEventListener('click', () => startQuiz(quizzes));