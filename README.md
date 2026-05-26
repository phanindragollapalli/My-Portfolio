# My-Portfolio
This repo contains the code for my portfolio website
# Portfolio - Phanindra Gollapalli

A modern, responsive personal portfolio website showcasing projects, skills, experience, and achievements of Phanindra Gollapalli, a B.Tech Computer Science student at IIIT Hyderabad.

## 🌐 Live Demo

Visit the portfolio at: [Portfolio Website](https://phanindragollapalli.com) *(Update with your deployed URL)*

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Sections Overview](#sections-overview)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Theme Support](#theme-support)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [License](#license)

---

## ✨ Features

### Core Features
- **Responsive Design** - Adapts seamlessly to desktop, tablet, and mobile devices
- **Tab-Based Navigation** - Clean navigation between 8 distinct portfolio sections
- **Light/Dark Theme Toggle** - User preference persisted in localStorage
- **Hero Section** - Eye-catching introduction with profile photo and downloadable resume
- **Smooth Interactions** - CSS transitions and hover effects for polished UX

### Portfolio Sections
1. **About Me** - Personal introduction and background
2. **Education** - Academic journey from elementary school to university
3. **Skills** - Technical expertise organized by domain (Web Dev, AI, Tools, etc.)
4. **Projects** - Detailed showcase of personal and academic projects
5. **Research Interests** - Areas of exploration and study
6. **Experience** - Internships and professional work experience
7. **Achievements** - Academic awards and accomplishments
8. **Contact Me** - Email and social media contact information

---

## 📂 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete styling with CSS variables
├── script.js           # Tab navigation and theme toggle logic
├── README.md           # This file
└── assets/
    ├── images/
    │   └── My_pic.jpg          # Profile photo
    ├── documents/
    │   └── My_CV.pdf           # Resume/CV
    └── videos/                  # Video content (if any)
```

---

## 🛠 Technology Stack

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS custom properties (variables)
- **JavaScript (Vanilla)** - Tab navigation, theme management, no frameworks
- **Responsive Web Design** - Mobile-first approach

### Key CSS Features
- **CSS Variables** - Dynamic theming system
- **Flexbox & Grid** - Modern layout techniques
- **Media Queries** - Responsive breakpoints
- **Transitions & Animations** - Smooth user interactions

### Design System
- **Font Stack** - Fraunces (serif) for headings, Source Sans 3 (sans-serif) for body
- **Color Palette** - Customizable through CSS variables
- **Spacing System** - Consistent spacing scale (xs, sm, md, lg, xl, 2xl, 3xl)
- **Border Radius Scale** - sm, md, lg for consistent rounded corners

---

## 📄 Sections Overview

### About Me
Personal introduction with background information, interests, and hobbies.

### Education
Three-column timeline showing educational journey:
- Elementary School (2010-2017)
- High School (2017-2024)
- Undergraduate (2024-2028) - IIIT Hyderabad

### Skills
Categorized expertise across 9 domains:
- Web Development
- Mobile App Development
- AI & Machine Learning
- Tools & Utilities
- Desktop Application Development
- Embedded Systems & IoT
- DevOps
- Cybersecurity
- Game Development

### Projects
Five major projects including:
- C-shell (Unix utilities)
- C-shark packet sniffer (Networking)
- Distributed Collaborative Document System
- S.H.A.M.: Reliable UDP Transport Protocol
- Felicity Event Management System (MERN Stack)

### Experience
Two internship experiences:
- **ML Research Intern** at IIT Bombay (May-July 2025)
- **Software Developer Intern** at Hustlr (Jan-Apr 2026)

### Achievements
Academic accomplishments including JEE scores, board percentages, and competitive programming ratings.

### Contact
Multiple contact methods:
- Email
- GitHub
- LinkedIn (if configured)
- Other social profiles

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side dependencies required

### Installation

1. **Clone the repository** (if hosted on Git)
   ```bash
   git clone https://github.com/phanindragollapalli/portfolio.git
   cd portfolio
   ```

2. **Open locally**
   ```bash
   # Using Python (any version)
   python -m http.server 8000
   
   # Or using Node.js with http-server
   npx http-server
   
   # Or simply open index.html in your browser
   ```

3. **Access the portfolio**
   - Navigate to `http://localhost:8000` or open `index.html` directly

### Deployment

#### Option 1: GitHub Pages (Recommended for static sites)
```bash
git push origin main
# Enable GitHub Pages in repository settings
```

#### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

#### Option 3: Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

#### Option 4: Traditional Hosting
Upload all files to your web hosting provider via FTP/SFTP.

---

## ✏️ Customization

### Update Personal Information

**Hero Section** - Edit `index.html`:
```html
<h1 class="hero__title">Your Name</h1>
<p class="hero__subtitle">Your tagline here</p>
```

**Profile Photo** - Replace `assets/images/My_pic.jpg` with your image

**Resume** - Replace `assets/documents/My_CV.pdf` with your CV

### Modify Sections

#### Adding Skills
Locate the Skills section in `index.html` and add new skills as list items:
```html
<ul class="skills__list">
  <li>Your Skill Here</li>
</ul>
```

#### Adding Projects
Insert new project items in the Projects section:
```html
<article class="project-item">
  <h3>Project Name</h3>
  <p>Project description here...</p>
</article>
```

#### Adding Experience
Add timeline items in the Experience section:
```html
<article class="timeline__item">
  <div class="timeline__content">
    <h3>Position Title</h3>
    <p class="timeline__meta">Company • Date Range • Location</p>
    <ul>
      <li>Achievement or responsibility</li>
    </ul>
  </div>
</article>
```

### Customize Colors

Edit CSS variables in `style.css` under `:root` and `[data-theme="dark"]`:

```css
:root {
  --color-accent: #2563eb;        /* Primary accent color */
  --color-text: #111111;          /* Text color */
  --color-bg: #ffffff;            /* Background color */
  /* ... other variables ... */
}
```

### Adjust Spacing & Sizing

Modify the spacing scale in `style.css`:
```css
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
/* ... other sizes ... */
```

---

## 🎨 Theme Support

The portfolio includes a built-in light/dark theme toggle with persistent user preference.

### Theme Toggle Behavior
- **Click the theme button** (top-right) to switch themes
- **Preference is saved** in browser's localStorage
- **Automatic detection** of system preference on first visit
- **Smooth transitions** between themes

### Adding Custom Themes

Define new theme in `style.css`:
```css
[data-theme="custom"] {
  --color-bg: #custom;
  --color-text: #custom;
  /* ... other variables ... */
}
```

Update `script.js` to include the new theme option.

---

## ♿ Accessibility

The portfolio is built with accessibility in mind:

- **Semantic HTML5** - Proper heading hierarchy and structure
- **ARIA Labels** - Descriptive labels for interactive elements
- **Keyboard Navigation** - Full tab navigation support
- **Color Contrast** - WCAG AA compliant contrast ratios
- **Alt Text** - All images have descriptive alt attributes
- **Focus States** - Visible focus indicators for keyboard users

---

## ⚡ Performance

### Optimizations
- **No external frameworks** - Pure HTML, CSS, and vanilla JavaScript
- **Minimal dependencies** - Single stylesheet and script
- **Optimized images** - Use compressed images for faster loading
- **CSS-in-file** - No external CSS libraries
- **Lazy loading** - Images load efficiently
- **Mobile-first design** - Optimized for all device sizes

### Performance Metrics
- **Load Time** - Under 2 seconds on 4G
- **Lighthouse Score** - Target 90+ across all categories
- **FCP (First Contentful Paint)** - < 1.5s
- **LCP (Largest Contentful Paint)** - < 2.5s

---

## 🔧 Troubleshooting

### Resume Not Downloading
- Ensure `My_CV.pdf` exists in `assets/documents/`
- Check file permissions
- Try a different browser

### Images Not Showing
- Verify image paths in `index.html`
- Check if `assets/images/` directory exists
- Ensure file names match exactly (case-sensitive)

### Theme Not Persisting
- Check if localStorage is enabled in browser
- Clear browser cache and try again
- Check browser console for errors

### Tabs Not Working
- Ensure `script.js` is loaded (check browser console)
- Verify all `data-tab` attributes match section IDs
- Check JavaScript for errors in browser DevTools

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| IE 11 | ❌ Not supported |

---

## 📝 License

This portfolio is open source and available under the MIT License. Feel free to fork, modify, and use it as a template for your own portfolio.

---

## 🤝 Contributing

Improvements and suggestions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Contact & Links

- **Email** - phanindragollapalli1729@gmail.com
- **GitHub** - [github.com/phanindragollapalli](https://github.com/phanindragollapalli)
- **Portfolio** - [Portfolio Website](*update-with-your-url*)

---

## 🙏 Acknowledgments

- Inspired by modern portfolio design principles
- Built with a focus on clean code and user experience
- Special thanks to IIIT Hyderabad and mentors

---

## 📌 Version History

- **v1.0.0** - Initial portfolio release with 8 sections and theme support

---

**Last Updated:** May 26, 2026

For the latest updates and improvements, check the repository regularly!

