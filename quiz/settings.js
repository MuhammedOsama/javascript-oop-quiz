import Quiz from "./quiz.js";

class Settings {
    constructor() {
        this.settings = document.querySelector('.settings');
        this.quizElement = document.querySelector('.quiz');
        this.category = document.querySelector('#category');
        this.nQuestions = document.querySelector('#nQuestions');
        this.startBtn = document.querySelector('#btn');
        this.difficulty = [
            document.querySelector('#easy'),
            document.querySelector('#medium'),
            document.querySelector('#hard')
        ];

        this.quiz = {};
        this.startBtn.addEventListener('click', this.startQuizApp);
    }

    startQuizApp = async () => {
        try {
            const amount = this.getAmount();
            const category = this.category.value;
            const difficulty = this.getDifficulty();
            const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
            let {results} = await this.fetchData(url);
            this.quiz = new Quiz(this.quizElement, amount, results);
            this.toggleElements();
        } catch (err) {
            alert(err);
        }
    }

    getAmount = () => {
        const amount = this.nQuestions.value;
        if (amount > 0 && amount < 20) {
            return amount;
        } else {
            alert('Please, Enter Amount');
        }
    }

    getDifficulty = () => {
        const difficulty = this.difficulty.filter((el) => el.checked);
        if (difficulty.length === 1) {
            return difficulty[0].id;
        } else {
            alert('Please, Enter Difficulty');
        }
    }

    fetchData = async (url) => {
        const response = await fetch(url);
        return await response.json();
    }

    toggleElements = () => {
        this.settings.style.display = 'none';
        this.quiz.style.display = 'block';
    }
}

export default Settings;
