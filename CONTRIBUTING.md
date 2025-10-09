# Contributing to Quadratic Equations Practice

Thank you for your interest in contributing to this educational project! This guide will help you get started.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/JVanderpool-repos/quadratic-equations-practice.git
   cd quadratic-equations-practice
   ```
3. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and test them
5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** on GitHub

## 🎯 How You Can Contribute

### 🐛 Bug Reports
- Check existing issues first
- Use the bug report template
- Include steps to reproduce
- Mention browser and version

### ✨ Feature Requests
- Check if similar features have been requested
- Explain the educational value
- Provide use cases
- Consider the target audience (students learning algebra)

### 💻 Code Contributions
- **Educational Features**: New problem types, difficulty levels, learning aids
- **UI/UX Improvements**: Better accessibility, mobile responsiveness, animations
- **Performance**: Optimization, code quality improvements
- **Documentation**: Code comments, README updates, tutorials

### 📚 Educational Content
- **Hints and Explanations**: Better mathematical explanations
- **Learning Resources**: Links to educational materials
- **Accessibility**: Screen reader compatibility, keyboard navigation

## 🛠️ Development Setup

### Prerequisites
- A modern web browser
- Text editor (VS Code recommended)
- Optional: Node.js for development server

### Local Development
```bash
# Option 1: Simple HTTP server (Python)
python -m http.server 8000

# Option 2: Node.js live server (install first)
npm install -g live-server
live-server --port=3000

# Option 3: Use the package.json scripts
npm install
npm start
```

### Project Structure
```
quadratic-equations-practice/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles
│   └── js/
│       └── app.js          # Main application logic
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── README.md               # Project documentation
├── CONTRIBUTING.md         # This file
├── LICENSE                 # MIT license
├── package.json            # Project metadata
└── .gitignore             # Git ignore rules
```

## 📋 Coding Guidelines

### JavaScript
- Use modern ES6+ features
- Follow camelCase naming convention
- Add JSDoc comments for functions
- Keep functions focused and small
- Use meaningful variable names

```javascript
/**
 * Generates a random quadratic equation with integer roots
 * @returns {Object} Object containing coefficients and roots
 */
function generateProblem() {
    // Implementation here
}
```

### CSS
- Follow BEM methodology where applicable
- Use CSS custom properties for theming
- Ensure responsive design
- Maintain accessibility standards

### HTML
- Use semantic HTML5 elements
- Include proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers

## 🧪 Testing

### Manual Testing Checklist
- [ ] Generate multiple problems successfully
- [ ] Correct answers are accepted
- [ ] Incorrect answers show proper feedback
- [ ] Hints appear after wrong attempts
- [ ] Score tracking works correctly
- [ ] Keyboard navigation (Tab, Enter) works
- [ ] Mobile responsiveness
- [ ] Accessibility with screen readers

### Browser Testing
Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📖 Educational Considerations

When contributing, keep in mind:
- **Target Audience**: Middle and high school students learning algebra
- **Learning Objectives**: Understanding quadratic equations, roots, and problem-solving
- **Difficulty Progression**: Features should support gradual learning
- **Feedback Quality**: Error messages should be educational, not just corrective
- **Motivation**: Features should encourage continued practice

## 🎨 Design Principles

- **Simplicity**: Clean, uncluttered interface
- **Accessibility**: Usable by students with disabilities
- **Responsiveness**: Works on all device sizes
- **Visual Feedback**: Clear indication of success/failure
- **Consistency**: Uniform design patterns throughout

## 📝 Commit Message Guidelines

Use clear, descriptive commit messages:

- **Add**: New features or files
- **Fix**: Bug fixes
- **Update**: Changes to existing features
- **Remove**: Deleted features or files
- **Refactor**: Code improvements without functional changes
- **Docs**: Documentation updates

Examples:
```
Add: difficulty level selection feature
Fix: equation display formatting issue
Update: improve hint explanations
Docs: add setup instructions to README
```

## 🔍 Pull Request Process

1. **Update documentation** if needed
2. **Test your changes** thoroughly
3. **Follow the PR template**
4. **Link related issues** with keywords (fixes #123)
5. **Request review** from maintainers
6. **Be responsive** to feedback

### PR Checklist
- [ ] Code follows project style guidelines
- [ ] Changes are tested and working
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] No breaking changes (or clearly documented)

## 🆘 Getting Help

- **Questions**: Open a GitHub issue with the "question" label
- **Discussion**: Use GitHub Discussions for broader topics
- **Real-time Chat**: Join our community Discord (if available)

## 🏆 Recognition

Contributors will be:
- Listed in the README contributors section
- Mentioned in release notes for significant contributions
- Given credit in the project documentation

## 📄 License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

Thank you for helping make mathematics education more accessible and engaging! 🎓✨