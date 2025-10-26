# Math Problem Practice

An interactive web application for practicing mathematical concepts. This educational tool supports both quadratic equations and slope-intercept form problems, providing an intuitive interface for students to practice and enhance their mathematical skills.

## 🌟 Features

- **Multiple Problem Types**: Switch between quadratic equations and slope-intercept form problems
- **Random Problem Generation**: Automatically generates problems with integer solutions
- **Interactive Interface**: Clean, modern UI built with Tailwind CSS
- **Real-time Feedback**: Immediate validation of answers with visual feedback
- **Progressive Hints**: Three-level hint system to guide learning
- **Score Tracking**: Keep track of correct answers for each problem type
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: Keyboard navigation support with Enter key functionality

## 🚀 Demo

**[🎮 Try the Live Demo →](https://jvanderpool-repos.github.io/quadratic_equations_practice/)**

*Practice solving quadratic equations right in your browser!*

## 📚 Educational Value

This tool helps students practice:

### Quadratic Equations
- Solving quadratic equations
- Understanding the relationship between roots and coefficients
- Applying the quadratic formula
- Factoring polynomials

### Slope-Intercept Form
- Identifying slope and y-intercept in linear equations
- Understanding linear relationships
- Graphing lines
- Real-world applications of linear equations

Both problem types feature:
- Build confidence through immediate feedback
- Develop pattern recognition skills
- Progressive hint system for guided learning

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Custom animations and responsive design
- **JavaScript (ES6+)**: Interactive functionality
- **Tailwind CSS**: Modern styling framework
- **Google Fonts**: Inter font family for better readability

## 📦 How to Use

### Online (Recommended)
Simply visit the **[live demo](https://jvanderpool-repos.github.io/quadratic_equations_practice/)** - no installation needed!

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

1. **Select Problem Type**: Choose between "Quadratic Equations" or "Slope-Intercept Form"

### For Quadratic Equations:
1. **View the Equation**: A random quadratic equation appears in the format `ax² + bx + c = 0`
2. **Enter Roots**: Input the two roots (x₁ and x₂) in the provided fields
3. **Check Answer**: Click "Check Answer" or press Enter after the second input

### For Slope-Intercept Form:
1. **View the Equation**: A random linear equation appears in the format `y = mx + b`
2. **Enter Values**: Input the slope (m) and y-intercept (b) in the provided fields
3. **Check Answer**: Click "Check Answer" or press Enter after the second input

### For Both Types:
- **Get Feedback**: 
  - ✅ Correct answers advance to the next problem
  - ❌ Incorrect answers provide hints and explanations
- **Track Progress**: Your score increases with each correct answer
- **Use Hints**: Progressive hints help guide you to the solution

## 📖 Mathematical Background

### Quadratic Equations
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

### Slope-Intercept Form
The application generates linear equations of the form:
```
y = mx + b
```

Where:
- **m** is the slope (integers between -10 and 10)
- **b** is the y-intercept (integers between -10 and 10)
- The equation represents a line with:
  - Rate of change = m (rise/run)
  - Point of intersection with y-axis = (0, b)

## 🎨 Customization

### Quadratic Equations
Modify the difficulty by adjusting the root generation in `assets/js/app.js`:
```javascript
// Current: roots between -10 and 10
this.root1 = Math.floor(Math.random() * 21) - 10;

// Easy: roots between -5 and 5
this.root1 = Math.floor(Math.random() * 11) - 5;

// Hard: roots between -20 and 20
this.root1 = Math.floor(Math.random() * 41) - 20;
```

### Slope-Intercept Form
Adjust the difficulty by modifying value ranges in `assets/js/slope-intercept.js`:
```javascript
// Current: values between -10 and 10
this.slope = Math.floor(Math.random() * 21) - 10;

// Easy: values between -5 and 5
this.slope = Math.floor(Math.random() * 11) - 5;

// Hard: values between -20 and 20
this.slope = Math.floor(Math.random() * 41) - 20;
```

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**JVanderpool-repos**
- GitHub: [@JVanderpool-repos](https://github.com/JVanderpool-repos)
- Project: [Quadratic Equations Practice](https://github.com/JVanderpool-repos/quadratic-equations-practice)

---

⭐ If this project helped you learn quadratic equations, please give it a star!