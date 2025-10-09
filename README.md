# Quadratic Equation Solver

An interactive web application for practicing quadratic equation solving. This educational tool generates random quadratic equations with integer roots and provides an intuitive interface for students to practice finding solutions.

## 🌟 Features

- **Random Problem Generation**: Automatically generates quadratic equations with integer roots
- **Interactive Interface**: Clean, modern UI built with Tailwind CSS
- **Real-time Feedback**: Immediate validation of answers with visual feedback
- **Progressive Hints**: Three-level hint system to guide learning
- **Score Tracking**: Keep track of correct answers
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: Keyboard navigation support with Enter key functionality

## 🚀 Demo

[Live Demo](https://JVanderpool-repos.github.io/quadratic-equations-practice)

## 📚 Educational Value

This tool helps students:
- Practice solving quadratic equations
- Understand the relationship between roots and coefficients
- Learn the quadratic formula application
- Build confidence through immediate feedback
- Develop pattern recognition skills

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Custom animations and responsive design
- **JavaScript (ES6+)**: Interactive functionality
- **Tailwind CSS**: Modern styling framework
- **Google Fonts**: Inter font family for better readability

## 📦 How to Use

### Online (Recommended)
Simply visit the [live demo](https://JVanderpool-repos.github.io/quadratic-equations-practice) - no installation needed!

### Local Development
1. Clone this repository:
   ```bash
   git clone https://github.com/JVanderpool-repos/quadratic-equations-practice.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quadratic-equations-practice
   ```
3. Open `index.html` in your web browser

## 🎯 Usage

1. **View the Equation**: A random quadratic equation appears in the format `ax² + bx + c = 0`
2. **Enter Roots**: Input the two roots (x₁ and x₂) in the provided fields
3. **Check Answer**: Click "Check Answer" or press Enter after the second input
4. **Get Feedback**: 
   - ✅ Correct answers advance to the next problem
   - ❌ Incorrect answers provide hints and explanations
5. **Track Progress**: Your score increases with each correct answer

## 📖 Mathematical Background

The application generates quadratic equations of the form:
```
ax² + bx + c = 0
```

Where:
- **a = 1** (simplified for educational purposes)
- **b and c** are calculated from two random integer roots
- **Roots** are integers between -10 and 10

The relationship used:
- If roots are r₁ and r₂, then the equation is: `(x - r₁)(x - r₂) = 0`
- Expanding: `x² - (r₁ + r₂)x + (r₁ × r₂) = 0`

## 🎨 Customization

To modify the difficulty, adjust the root generation in `assets/js/app.js`:
```javascript
// Current: roots between -10 and 10
this.root1 = Math.floor(Math.random() * 21) - 10;

// Easy: roots between -5 and 5
this.root1 = Math.floor(Math.random() * 11) - 5;

// Hard: roots between -20 and 20
this.root1 = Math.floor(Math.random() * 41) - 20;
```

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**JVanderpool-repos**
- GitHub: [@JVanderpool-repos](https://github.com/JVanderpool-repos)
- Project: [Quadratic Equations Practice](https://github.com/JVanderpool-repos/quadratic-equations-practice)

---

⭐ If this project helped you learn quadratic equations, please give it a star!