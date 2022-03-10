const answer = ["germany", "luffy", "colombus"];
const questions = document.querySelectorAll('.quiz-form > .question > input')
const information = document.querySelectorAll('.quiz-form > .information > input');
const btn = document.querySelector('button');

const handleCheckedValue = () => {
    const checked_values = [];
    questions.forEach((question) => {
        if (question.checked) {
            checked_values.push(question.value);
        }
    })
    return checked_values;
}

handleTextValue = () => {
    const name_class = [];
    information.forEach(infor => {
        name_class.push(infor.value);
    })
    return name_class;
}

const handleScoreCalculator = () => {
    let score = 0;
    for (let i = 0; i < answer.length; i++) {
        if (handleCheckedValue()[i] == answer[i]) {
            score++;
        }
    }
    return score;
}

btn.onclick = (e) => {
    const your_score = handleScoreCalculator();
    alert(`${handleTextValue()[0]} from class ${handleTextValue()[1]}, your score is ${your_score}/3`);
}
