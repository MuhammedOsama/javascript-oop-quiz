class Questions {
    constructor(questions) {
        this.questionsElements = document.querySelector('#questions');
        this.answersElements = [
            document.querySelector('#a1'),
            document.querySelector('#a2'),
            document.querySelector('#a3'),
            document.querySelector('#a4')
        ];
        this.correctAnswer = questions.correct_answer;
        this.questions = questions.question;
        this.isCorrect = false;
        this.answers = [questions.correctAnswer, ...questions.incorrect_answers];
    }

    answer(checkElement) {
        this.isCorrect = checkElement[0].textContent === this.correctAnswer;
    }

    render() {
        this.questionsElements.innerHTML = this.questions;
        this.answersElements.forEach((el, index) =>
            el.innerHTML = '<input type="radio" name="radio">' + this.answers[index]
        );
    }
}

export default Questions;
