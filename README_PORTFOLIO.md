# Parth Shrivastava - Portfolio Website

A modern, professional portfolio website built with Angular featuring smooth animations and responsive design.

## Features

✨ **Modern Design**
- Clean and professional UI/UX
- Gradient color scheme with glassmorphism effects
- Smooth scroll animations
- Responsive design for all devices

🎨 **Sections**
- **Home**: Hero section with animated introduction
- **About**: Professional timeline and quick facts
- **Skills**: Categorized skills with animated progress bars
- **Experience**: Work history with detailed descriptions
- **Projects**: Showcase of featured projects
- **Contact**: Functional contact form with validation

🚀 **Technologies Used**
- Angular 19
- TypeScript
- HTML5 & CSS3
- Font Awesome Icons
- Reactive Forms
- CSS Animations

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
cd parth-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Personal Information
Update the following files with your information:
- `src/app/pages/home/home.component.html` - Name and title
- `src/app/pages/about/about.component.html` - Bio and timeline
- `src/app/pages/experience/experience.component.html` - Work experience
- `src/app/pages/projects/projects.component.html` - Your projects
- `src/app/pages/contact/contact.component.html` - Contact details

### Colors
Modify the color scheme in `src/styles.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... */
}
```

### Images
- Replace profile image in `src/app/pages/home/home.component.html`
- Add project screenshots in `src/assets/images/`

## Features Highlights

### Smooth Animations
- Fade in/up animations on scroll
- Hover effects on cards and buttons
- Smooth scroll navigation
- Loading states

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Flexible grid layouts
- Touch-friendly interactions

### Form Validation
- Real-time validation
- Clear error messages
- Success feedback
- Email validation

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance
- Optimized animations
- Lazy loading ready
- Efficient CSS
- Fast load times

## License
This project is open source and available for personal use.

## Contact
For any queries or suggestions:
- Email: parth@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Made with ❤️ using Angular
