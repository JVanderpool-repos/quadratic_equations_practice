/**
 * Quadratic Equation Solver
 * Interactive educational tool for practicing quadratic equation solving
 */

class QuadraticSolver {
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
        this.root1 = 0;
        this.root2 = 0;
        this.score = 0;
        this.attempts = 0;
        this.hints = [
            "Hint: The roots are the values of x that make the equation equal to zero.",
            "Hint: Use the quadratic formula: x = [-b ± √(b² - 4ac)] / 2a",
            "Hint: For this equation, the sum of roots is -b/a and product is c/a."
        ];

        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.setupEventListeners();
        this.generateProblem();
    }

    /**
     * Set up all event listeners
     */
    setupEventListeners() {
        this.checkButton.addEventListener('click', () => this.checkAnswer());
        
        this.x1Input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.x2Input.focus();
            }
        });

        this.x2Input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.checkAnswer();
            }
        });

        // Add input validation
        [this.x1Input, this.x2Input].forEach(input => {
            input.addEventListener('input', (e) => this.validateInput(e.target));
        });
    }

    /**
     * Validate numeric input
     */
    validateInput(input) {
        const value = input.value;
        // Allow negative numbers and integers
        if (value && !/^-?\d*$/.test(value)) {
            input.value = value.slice(0, -1);
        }
    }

    /**
     * Generates a new random quadratic equation with integer roots
     */
    generateProblem() {
        // Generate two distinct integer roots between -10 and 10
        do {
            this.root1 = Math.floor(Math.random() * 21) - 10;
            this.root2 = Math.floor(Math.random() * 21) - 10;
        } while (this.root1 === this.root2); // Ensure roots are different

        // Equation is (x - root1)(x - root2) = 0
        // x^2 - (root1 + root2)x + (root1 * root2) = 0
        const a = 1;
        const b = -(this.root1 + this.root2);
        const c = this.root1 * this.root2;

        this.displayEquation(a, b, c);
        this.resetInputs();
        this.attempts = 0;
        this.hintEl.textContent = '';
    }

    /**
     * Formats and displays the equation string
     */
    displayEquation(a, b, c) {
        let equationStr = '';
        
        // Coefficient 'a' (always 1 in this simple version)
        equationStr += 'x² ';

        // Coefficient 'b'
        if (b > 0) {
            equationStr += `+ ${b}x `;
        } else if (b < 0) {
            equationStr += `- ${Math.abs(b)}x `;
        }
        // if b is 0, we add nothing for the x term

        // Coefficient 'c'
        if (c > 0) {
            equationStr += `+ ${c} `;
        } else if (c < 0) {
            equationStr += `- ${Math.abs(c)} `;
        }
        
        equationStr += '= 0';
        this.equationEl.textContent = equationStr;
        this.equationEl.classList.add('fade-in');
    }
    
    /**
     * Resets input fields and feedback messages
     */
    resetInputs() {
        this.x1Input.value = '';
        this.x2Input.value = '';
        this.feedbackEl.textContent = '';
        this.hintEl.textContent = '';
        this.x1Input.focus();
        
        // Remove any animation classes
        this.feedbackEl.classList.remove('success-bounce', 'error-shake');
    }

    /**
     * Checks the user's answer against the correct roots
     */
    checkAnswer() {
        const userRoot1 = parseInt(this.x1Input.value, 10);
        const userRoot2 = parseInt(this.x2Input.value, 10);

        // Check for empty inputs
        if (isNaN(userRoot1) || isNaN(userRoot2)) {
            this.showFeedback('Please enter both roots!', 'error');
            return;
        }

        // Check if the user's answers match the roots, in any order
        const isCorrect = (userRoot1 === this.root1 && userRoot2 === this.root2) || 
                          (userRoot1 === this.root2 && userRoot2 === this.root1);

        if (isCorrect) {
            this.handleCorrectAnswer();
        } else {
            this.handleIncorrectAnswer();
        }
    }

    /**
     * Handle correct answer logic
     */
    handleCorrectAnswer() {
        this.showFeedback('Correct!', 'success');
        this.score++;
        this.scoreEl.textContent = this.score;
        
        // Add animations
        this.appContainer.classList.add('correct-animation');
        this.feedbackEl.classList.add('success-bounce');
        
        // Clean up animations and generate new problem
        setTimeout(() => {
            this.appContainer.classList.remove('correct-animation');
            this.generateProblem();
        }, 1000);
    }

    /**
     * Handle incorrect answer logic
     */
    handleIncorrectAnswer() {
        this.attempts++;
        this.feedbackEl.classList.add('error-shake');
        
        if (this.attempts < 3) {
            this.showFeedback('Not quite, try again!', 'error');
            this.hintEl.textContent = this.hints[this.attempts - 1];
        } else {
            this.showFeedback(`The correct roots are ${this.root1} and ${this.root2}.`, 'error');
            this.hintEl.textContent = `Explanation: These are the roots because when plugged into the equation, it equals zero. The equation factors as (x - ${this.root1})(x - ${this.root2}) = 0.`;
            setTimeout(() => this.generateProblem(), 3000);
        }
    }

    /**
     * Display feedback with appropriate styling
     */
    showFeedback(message, type) {
        this.feedbackEl.textContent = message;
        
        // Remove existing classes
        this.feedbackEl.classList.remove('text-red-500', 'text-green-600');
        
        // Add appropriate class
        if (type === 'success') {
            this.feedbackEl.classList.add('text-green-600');
        } else if (type === 'error') {
            this.feedbackEl.classList.add('text-red-500');
        }
    }

    /**
     * Get current statistics
     */
    getStats() {
        return {
            score: this.score,
            currentRoots: [this.root1, this.root2],
            attempts: this.attempts
        };
    }

    /**
     * Reset the game
     */
    reset() {
        this.score = 0;
        this.scoreEl.textContent = this.score;
        this.generateProblem();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const solver = new QuadraticSolver();
    
    // Make solver available globally for debugging
    window.quadraticSolver = solver;
});