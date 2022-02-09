class Final {
    constructor(correctAnswers, totalAnswers) {
        this.scoreElemet = document.querySelector('.score');
        this.againBtn = document.querySelector('#again');

        this.render(correctAnswers, totalAnswers);
        this.againBtn.addEventListener('click', this.startAgain);
    }

    render(correctAnswers, totalAnswers) {
        this.scoreElemet.innerHTML = `You answered ${correctAnswers} out of ${totalAnswers} correct.`;
    }

    startAgain = _ => location.reload();
}

export default Final;
