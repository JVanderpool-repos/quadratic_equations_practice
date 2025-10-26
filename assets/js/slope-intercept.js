/**
 * Slope Intercept Problem Generator and Solver
 * Interactive educational tool for practicing slope-intercept form problems
 */

class SlopeInterceptSolver {
    constructor() {
        // DOM Element References
        this.equationEl = document.querySelector('#equation-display p');
        this.x1Input = document.getElementById('x1-input');
        this.x2Input = document.getElementById('x2-input');
        this.checkButton = document.getElementById('check-button');
        this.feedbackEl = document.getElementById('feedback');
        this.scoreEl = document.getElementById('score');
        this.appContainer = document.getElementById('app-container');
        this.hintEl = document.getElementById('hint');

        // State Variables
        this.slope = 0;
        this.yIntercept = 0;
        this.score = 0;
        this.attempts = 0;
        this.hints = [
            "Hint: Look for the number in front of x - that's your slope (m). If there's just x, the slope is 1; if it's -x, the slope is -1.",
            "Hint: The y-intercept (b) is the number being added or subtracted at the end of the equation. If there's no number at the end, b = 0.",
            "Hint: In the equation y = mx + b, first find m (slope) before x, then find b (the constant term)."
        ];
    }

    /**
     * Initialize the solver
     */
    init() {
        this.setupUI();
        this.generateProblem();
    }

    /**
     * Set up the UI for slope-intercept problems
     */
    setupUI() {
        // Update labels for slope-intercept form
        document.querySelector('label[for="x1-input"]').textContent = 'm =';
        document.querySelector('label[for="x2-input"]').textContent = 'b =';
        document.querySelector('h1').textContent = 'Slope-Intercept Solver';
        document.querySelector('#app-container p').textContent = 'Find the slope (m) and y-intercept (b) of the line.';
    }

    /**
     * Generate a new slope-intercept problem
     */
    generateProblem() {
        // Generate slope and y-intercept between -10 and 10
        this.slope = Math.floor(Math.random() * 21) - 10;
        this.yIntercept = Math.floor(Math.random() * 21) - 10;

        // Format and display the equation: y = mx + b
        this.displayEquation();
        this.resetInputs();
        this.attempts = 0;
        this.hintEl.textContent = '';
    }

    /**
     * Display the slope-intercept equation
     */
    displayEquation() {
        let equationStr = 'y = ';
        
        // Add slope term (mx)
        if (this.slope === 1) {
            equationStr += 'x ';
        } else if (this.slope === -1) {
            equationStr += '-x ';
        } else if (this.slope !== 0) {
            equationStr += `${this.slope}x `;
        }

        // Add y-intercept (b)
        if (this.yIntercept > 0) {
            equationStr += `+ ${this.yIntercept}`;
        } else if (this.yIntercept < 0) {
            equationStr += `- ${Math.abs(this.yIntercept)}`;
        } else if (this.slope === 0) {
            equationStr += '0';
        }

        this.equationEl.textContent = equationStr;
        this.equationEl.classList.add('fade-in');
    }

    /**
     * Reset input fields and feedback
     */
    resetInputs() {
        this.x1Input.value = '';
        this.x2Input.value = '';
        this.feedbackEl.textContent = '';
        this.hintEl.textContent = '';
        this.x1Input.focus();
        
        this.feedbackEl.classList.remove('success-bounce', 'error-shake');
    }

    /**
     * Check the user's answer
     */
    checkAnswer() {
        const userSlope = parseInt(this.x1Input.value, 10);
        const userYIntercept = parseInt(this.x2Input.value, 10);

        if (isNaN(userSlope) || isNaN(userYIntercept)) {
            this.showFeedback('Please enter both values!', 'error');
            return;
        }

        const isCorrect = userSlope === this.slope && userYIntercept === this.yIntercept;

        if (isCorrect) {
            this.handleCorrectAnswer();
        } else {
            this.handleIncorrectAnswer();
        }
    }

    /**
     * Handle correct answer submission
     */
    handleCorrectAnswer() {
        this.showFeedback('Correct!', 'success');
        this.score++;
        this.scoreEl.textContent = this.score;
        
        this.appContainer.classList.add('correct-animation');
        this.feedbackEl.classList.add('success-bounce');
        
        setTimeout(() => {
            this.appContainer.classList.remove('correct-animation');
            this.generateProblem();
        }, 1000);
    }

    /**
     * Handle incorrect answer submission
     */
    handleIncorrectAnswer() {
        this.attempts++;
        this.feedbackEl.classList.add('error-shake');
        
        if (this.attempts < 3) {
            this.showFeedback('Not quite, try again!', 'error');
            this.hintEl.textContent = this.hints[this.attempts - 1];
        } else {
            this.showFeedback(`The correct values are: slope (m) = ${this.slope}, y-intercept (b) = ${this.yIntercept}`, 'error');
            this.hintEl.textContent = `Explanation: In the equation y = ${this.slope}x ${this.yIntercept >= 0 ? '+' : '-'} ${Math.abs(this.yIntercept)}, ${this.slope} is the slope and ${this.yIntercept} is the y-intercept.`;
            setTimeout(() => this.generateProblem(), 3000);
        }
    }

    /**
     * Display feedback to the user
     */
    showFeedback(message, type) {
        this.feedbackEl.textContent = message;
        this.feedbackEl.className = `mt-6 h-8 text-xl font-semibold ${type === 'error' ? 'text-red-600' : 'text-green-600'}`;
    }
}