# Quadratic Equation Solver

An interactive web application for practicing quadratic equation solving. This educational tool generates random quadratic equations with integer roots and provides an intuitive interface for students to practice finding solutions.

![Quadratic Equation Solver Screenshot](https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Quadratic+Equation+Solver)

## 🌟 Features

- **Random Problem Generation**: Automatically generates quadratic equations with integer roots
- **Interactive Interface**: Clean, modern UI built with Tailwind CSS
- **Real-time Feedback**: Immediate validation of answers with visual feedback
- **Progressive Hints**: Three-level hint system to guide learning
- **Score Tracking**: Keep track of correct answers
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: Keyboard navigation support with Enter key functionality

## 🚀 Demo

[Live Demo](https://your-username.github.io/quadratic-equations-practice) *(Update with your GitHub Pages URL)*

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

## 📦 Installation

### Option 1: Direct Download
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/quadratic-equations-practice.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quadratic-equations-practice
   ```
3. Open `index.html` in your web browser

### Option 2: Live Server (Recommended for Development)
1. Install a live server extension in VS Code or use Node.js live-server:
   ```bash
   npm install -g live-server
   live-server
   ```

### Option 3: GitHub Pages
This project is configured for GitHub Pages deployment. Simply fork the repository and enable Pages in your repository settings.

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

### Difficulty Levels
To modify the difficulty, adjust the root generation in `script.js`:
```javascript
// Current: roots between -10 and 10
root1 = Math.floor(Math.random() * 21) - 10;

// Easy: roots between -5 and 5
root1 = Math.floor(Math.random() * 11) - 5;

// Hard: roots between -20 and 20
root1 = Math.floor(Math.random() * 41) - 20;
```

### Styling
The project uses Tailwind CSS. Modify classes in `index.html` or add custom CSS for personalization.

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Bug Reports**: Found a bug? Please open an issue
2. **Feature Requests**: Have an idea? We'd love to hear it
3. **Code Contributions**: 
   - Fork the repository
   - Create a feature branch (`git checkout -b feature/amazing-feature`)
   - Commit your changes (`git commit -m 'Add amazing feature'`)
   - Push to the branch (`git push origin feature/amazing-feature`)
   - Open a Pull Request

### Development Setup
```bash
# Clone your fork
git clone https://github.com/your-username/quadratic-equations-practice.git

# Create a branch for your feature
git checkout -b feature/your-feature-name

# Make your changes and test
# ...

# Commit and push
git add .
git commit -m "Description of your changes"
git push origin feature/your-feature-name
```

## 📝 Future Enhancements

- [ ] Multiple difficulty levels
- [ ] Complex number roots
- [ ] Graphical visualization of parabolas
- [ ] Step-by-step solution explanations
- [ ] User accounts and progress tracking
- [ ] Leaderboard system
- [ ] Multiple equation types (cubic, etc.)
- [ ] Mobile app version

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Google Fonts](https://fonts.google.com/) for the Inter font family
- Educational mathematics community for inspiration

## 📊 Project Statistics

![GitHub repo size](https://img.shields.io/github/repo-size/your-username/quadratic-equations-practice)
![GitHub stars](https://img.shields.io/github/stars/your-username/quadratic-equations-practice)
![GitHub forks](https://img.shields.io/github/forks/your-username/quadratic-equations-practice)
![GitHub issues](https://img.shields.io/github/issues/your-username/quadratic-equations-practice)

---

⭐ If this project helped you learn quadratic equations, please give it a star!