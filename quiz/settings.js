class Settings {
    constructor() {
        this.settings = document.querySelector('.settings');
        this.quiz = document.querySelector('.quiz');
        this.category = document.querySelector('#category');
        this.nQuestions = document.querySelector('#nQuestions');
        this.btn = document.querySelector('#btn');
        this.difficulty = [
            document.querySelector('#easy'),
            document.querySelector('#medium'),
            document.querySelector('#hard')
        ];

        this.btn.addEventListener('click', this.startQuizApp);
    }

    startQuizApp = async () => {
        try {
            const amount = this.getAmount();
            const category = this.category.value;
            const difficulty = this.getDifficulty();
            const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
            let result = await this.fetchData(url);
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

    fetchData = (url) => fetch(url)
        .then((response) => response.json())
        .then((data) => data.result);

    toggleElements = () => {
        this.quiz.style.display = 'block';
        this.settings.style.display = 'none';
    }
}

export default Settings;
