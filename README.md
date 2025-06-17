# Ahmed Mohammed Ali - Portfolio Website

A beautiful, terminal-inspired portfolio website showcasing backend development and integration engineering expertise.

## 🚀 Features

### Design & Aesthetics
- **Terminal-inspired UI**: Authentic terminal window design with macOS-style controls
- **Dark theme**: Professional dark color scheme with green accent colors
- **Typography**: JetBrains Mono for code elements, Inter for readable text
- **Responsive design**: Fully responsive across all device sizes
- **Smooth animations**: Fade-in effects and hover animations

### Technical Features
- **Modular structure**: Easy to extend with new sections
- **Interactive elements**: Hover effects and smooth transitions
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance optimized**: Efficient animations and smooth scrolling
- **Cross-browser compatible**: Works on all modern browsers

### Sections Included
1. **Hero Section**: Name, title, and key skills
2. **Contact Information**: Phone, email, location, social links
3. **Professional Summary**: About section with key highlights
4. **Experience**: Detailed work history with achievements
5. **Skills**: Categorized technical skills and technologies
6. **Projects**: Notable projects and technical highlights
7. **Education**: Academic background and certifications
8. **Footer**: Call-to-action for opportunities

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Interactive features and animations
- **Font Awesome**: Icons for contact information
- **Google Fonts**: JetBrains Mono and Inter typography

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop**: 1200px+ (full terminal window experience)
- **Tablet**: 768px - 1199px (optimized layout)
- **Mobile**: < 768px (mobile-first design)

## 🎨 Customization

### Colors
The color scheme can be easily modified by updating CSS custom properties in `styles.css`:

```css
:root {
    --bg-primary: #0a0a0a;
    --text-primary: #00ff00;
    --accent: #00ff88;
    /* ... more colors */
}
```

### Adding New Sections
To add a new section, follow this structure:

```html
<section id="new-section" class="section">
    <div class="command-line">
        <span class="prompt">$</span>
        <span class="command">your-command</span>
    </div>
    <div class="output">
        <!-- Your content here -->
    </div>
</section>
```

### Styling New Elements
Use the existing CSS classes for consistency:
- `.section` for main sections
- `.command-line` for terminal commands
- `.output` for content areas
- `.tag` for skill/technology tags

## 🚀 Getting Started

1. **Clone or download** the portfolio files
2. **Open `index.html`** in your web browser
3. **Customize** the content in the HTML file
4. **Modify styles** in `styles.css` as needed
5. **Add interactions** in `script.js` if desired

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript interactions and animations
└── README.md           # This documentation file
```

## 🎯 Key Features for Employers

### Professional Presentation
- Clean, modern design that reflects technical expertise
- Terminal theme shows familiarity with developer tools
- Professional color scheme and typography
- Easy-to-scan information architecture

### Technical Demonstration
- Responsive design shows frontend skills
- Modular code structure demonstrates good practices
- Performance optimizations show attention to detail
- Accessibility features show inclusive design thinking

### Content Highlights
- Clear professional summary
- Quantified achievements in experience section
- Comprehensive skills categorization
- Notable projects and technical highlights
- Strong educational background

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back!

---

**Built with ❤️ for showcasing backend development expertise** 