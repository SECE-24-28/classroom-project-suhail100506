class QuizApp {
    constructor() {
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultScreen = document.getElementById('result-screen');
        this.reviewScreen = document.getElementById('review-screen');

        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.questionNumber = document.getElementById('question-number');
        this.timer = document.getElementById('timer');
        this.currentScoreDisplay = document.getElementById('current-score');
        this.progressFill = document.getElementById('progress-fill');
        this.nextBtn = document.getElementById('next-btn');

        this.startBtn = document.getElementById('start-btn');
        this.quitBtn = document.getElementById('quit-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.reviewBtn = document.getElementById('review-btn');
        this.backToResultBtn = document.getElementById('back-to-result-btn');


        this.currentQuestion = 0;
        this.score = 0;
        this.timeLeft = 30;
        this.timerInterval = null;
        this.selectedAnswer = null;
        this.questions = [];
        this.userAnswers = [];
        this.difficulty = 'medium';
        this.totalTime = 0;
        this.startTime = 0;

        this.initEventListeners();
    }

    initEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.quitBtn.addEventListener('click', () => this.quitQuiz());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.reviewBtn.addEventListener('click', () => this.showReview());
        this.backToResultBtn.addEventListener('click', () => this.showResults());

        this.difficultyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.difficultyBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.difficulty = e.target.dataset.difficulty;
            });
        });
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.startTime = Date.now();


        this.switchScreen(this.startScreen, this.quizScreen);
        this.loadQuestion();
    }

    loadQuestion() {
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentQuestion];
        this.selectedAnswer = null;
        this.nextBtn.disabled = true;

        this.questionText.textContent = question.question;
        this.questionNumber.textContent = `${this.currentQuestion + 1}/${this.questions.length}`;

        // Update progress bar
        const progress = ((this.currentQuestion) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;

        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.addEventListener('click', () => this.selectAnswer(index));
            this.optionsContainer.appendChild(optionDiv);
        });

        this.startTimer();
    }

    startTimer() {
        this.timeLeft = 30;
        this.timer.textContent = this.timeLeft;
        this.timer.classList.remove('warning');

        clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.timer.textContent = this.timeLeft;

            if (this.timeLeft <= 10) {
                this.timer.classList.add('warning');
            }

            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                this.handleTimeout();
            }
        }, 1000);
    }

    selectAnswer(index) {
        if (this.selectedAnswer !== null) return;

        this.selectedAnswer = index;
        const options = this.optionsContainer.querySelectorAll('.option');
        const question = this.questions[this.currentQuestion];

        options[index].classList.add('selected');

        clearInterval(this.timerInterval);

        setTimeout(() => {
            if (index === question.correct) {
                options[index].classList.remove('selected');
                options[index].classList.add('correct');
                this.score += 10;
                this.currentScoreDisplay.textContent = this.score;
            } else {
                options[index].classList.remove('selected');
                options[index].classList.add('wrong');
                options[question.correct].classList.add('correct');
            }

            options.forEach(opt => opt.classList.add('disabled'));


            this.userAnswers.push({
                question: question.question,
                userAnswer: index,
                correctAnswer: question.correct,
                options: question.options
            });
        }, 300);
    }

    handleTimeout() {
        const question = this.questions[this.currentQuestion];
        const options = this.optionsContainer.querySelectorAll('.option');

        // Show correct answer
        options[question.correct].classList.add('correct');
        options.forEach(opt => opt.classList.add('disabled'));

        this.nextBtn.disabled = false;

        this.userAnswers.push({
            question: question.question,
            userAnswer: null,
            correctAnswer: question.correct,
            options: question.options,
            timeout: true
        });
    }

    nextQuestion() {
        this.currentQuestion++;

        if (this.currentQuestion < this.questions.length) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        clearInterval(this.timerInterval);


        this.progressFill.style.width = '100%';

        const correctAnswers = this.userAnswers.filter(answer =>
            answer.userAnswer === answer.correctAnswer
        ).length;
        const wrongAnswers = this.questions.length - correctAnswers;
        const accuracy = Math.round((correctAnswers / this.questions.length) * 100);

        document.getElementById('final-score').textContent = this.score;
        document.getElementById('correct-count').textContent = correctAnswers;
        document.getElementById('wrong-count').textContent = wrongAnswers;
        document.getElementById('accuracy').textContent = `${accuracy}%`;
        document.getElementById('time-taken').textContent = `${this.totalTime}s`;

        const resultIcon = document.getElementById('result-icon');
        const resultTitle = document.getElementById('result-title');
        const scoreMessage = document.getElementById('score-message');

        if (accuracy >= 90) {
            resultIcon.textContent = '🏆';
            resultTitle.textContent = 'Outstanding!';
            scoreMessage.textContent = 'Perfect performance! You\'re a quiz master!';
        } else if (accuracy >= 70) {
            resultIcon.textContent = '🎉';
            resultTitle.textContent = 'Great Job!';
            scoreMessage.textContent = 'Excellent work! Keep it up!';
        } else if (accuracy >= 50) {
            resultIcon.textContent = '👍';
            resultTitle.textContent = 'Good Effort!';
            scoreMessage.textContent = 'Not bad! Practice makes perfect!';
        } else {
            resultIcon.textContent = '📚';
            resultTitle.textContent = 'Keep Learning!';
            scoreMessage.textContent = 'Don\'t give up! Try again to improve!';
        }

        this.switchScreen(this.quizScreen, this.resultScreen);
    }

    showReview() {
        const reviewContainer = document.getElementById('review-container');
        reviewContainer.innerHTML = '';

        this.userAnswers.forEach((answer, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${answer.userAnswer === answer.correctAnswer ? 'correct' : 'wrong'}`;

            let answerText = answer.timeout ?
                'Time Out - No Answer' :
                answer.options[answer.userAnswer];

            reviewItem.innerHTML = `
                <div class="review-question">
                    <strong>Question ${index + 1}:</strong> ${answer.question}
                </div>
                <div class="review-answer user-answer">
                    <span class="review-label">Your Answer:</span>
                    ${answerText}
                </div>
                <div class="review-answer correct-answer">
                    <span class="review-label">Correct Answer:</span>
                    ${answer.options[answer.correctAnswer]}
                </div>
            `;

            reviewContainer.appendChild(reviewItem);
        });

        this.switchScreen(this.resultScreen, this.reviewScreen);
    }

    quitQuiz() {
        if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
            clearInterval(this.timerInterval);
            this.switchScreen(this.quizScreen, this.startScreen);
        }
    }

    restartQuiz() {
        this.switchScreen(this.resultScreen, this.startScreen);
    }

    switchScreen(fromScreen, toScreen) {
        fromScreen.classList.remove('active');
        toScreen.classList.add('active');
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
