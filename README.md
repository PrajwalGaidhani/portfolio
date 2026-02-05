<<<<<<< HEAD

# portfolio

# this is portfolio website i will be hosting this.

# Modern Angular Portfolio Website

A sleek, responsive, and modern portfolio website built with Angular 17+ featuring dark mode support, smooth animations, and a professional design.

## 🎯 Features

- **Modern Design**: Clean and contemporary UI with gradient accents and smooth transitions
- **Dark Mode**: Automatic dark mode detection with manual toggle option
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Smooth Animations**: Subtle fade-in and slide animations for enhanced UX
- **Standalone Components**: Built with Angular's latest standalone component architecture
- **TypeScript Signals**: Modern reactive state management
- **SCSS Styling**: Advanced styling with CSS variables and mixins
- **SEO Friendly**: Semantic HTML5 and proper structure
- **Performance**: Optimized for fast loading and smooth interactions

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/        # Navigation bar with mobile menu
│   │   ├── hero/          # Hero section with introduction
│   │   ├── projects/      # Projects/portfolio showcase
│   │   ├── about/         # About section with skills
│   │   ├── contact/       # Contact form section
│   │   └── footer/        # Footer with social links
│   ├── services/
│   │   └── portfolio.service.ts    # Portfolio data management
│   ├── app.ts             # Root component
│   ├── app.routes.ts      # Application routing
│   └── ...
├── styles.scss            # Global styles and animations
├── main.ts                # Bootstrap entry point
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Angular CLI (optional, but recommended)

### Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm start
   ```

   Or using ng:

   ```bash
   ng serve --open
   ```

3. **Open in browser**:
   Navigate to `http://localhost:4200/` in your web browser.

## 🎨 Customization Guide

### Update Your Personal Information

Edit [src/app/services/portfolio.service.ts](src/app/services/portfolio.service.ts):

```typescript
portfolioData = signal<PortfolioData>({
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... other details
});
```

### Add Your Projects

Edit the `projects()` signal in [src/app/components/projects/projects.component.ts](src/app/components/projects/projects.component.ts):

```typescript
projects = signal<Project[]>([
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    tags: ['Angular', 'TypeScript'],
    image: 'project-image',
    link: 'https://your-project.com',
    github: 'https://github.com/your-repo',
  },
  // ... more projects
]);
```

### Customize Skills

Edit the `skills()` signal in [src/app/components/about/about.component.ts](src/app/components/about/about.component.ts):

```typescript
skills = signal<Skill[]>([
  {
    category: 'Frontend',
    items: ['Your', 'Skills', 'Here'],
  },
  // ... more categories
]);
```

### Update Colors

Edit the CSS variables in [src/styles.scss](src/styles.scss):

```scss
:root {
  --primary-color: #4f46e5;
  --secondary-color: #ec4899;
  // ... customize other colors
}
```

## 🏗️ Build Commands

### Development Server

```bash
npm start          # Start with hot reload
ng serve           # Alternative ng command
```

### Production Build

```bash
npm run build      # Build for production
ng build           # Alternative ng command
```

### Build Output Location

The production build artifacts are stored in the `dist/` directory.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:

- **Mobile**: < 512px
- **Tablet**: < 768px
- **Desktop**: ≥ 1200px

## 🌓 Dark Mode

- Automatically detects system preference using `prefers-color-scheme`
- Manual toggle button in the navbar for user override
- Smooth transitions between light and dark themes

## 🎭 Animation & Transitions

The portfolio includes several CSS animations:

- **fadeIn**: Smooth fade-in effect
- **slideInLeft/Right**: Directional slide animations
- **glow**: Pulsing glow effect for accent elements

## 📝 Available Routes

- `/` - Home page (portfolio homepage)
- `*` - Wildcard route (redirects to home)

Extend routing in [src/app/app.routes.ts](src/app/app.routes.ts).

## 🔧 Development

### Generate New Components

```bash
ng generate component components/component-name --standalone
```

### Generate New Services

```bash
ng generate service services/service-name
```

## 📊 Performance Tips

1. **Images**: Replace placeholder image divs with actual optimized images
2. **Lazy Loading**: Consider implementing lazy loading for project images
3. **Code Splitting**: Angular automatically handles route-based code splitting
4. **Tree Shaking**: Unused dependencies are automatically removed in production builds

## 🐛 Troubleshooting

### Port Already in Use

If port 4200 is already in use:

```bash
ng serve --port 4201
```

### Dependencies Issues

Clear node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Cache Issues

Clear Angular cache:

```bash
ng cache clean
```

## 📦 Dependencies

- **Angular 17+**: Modern framework
- **Angular Forms**: Form handling
- **Angular Router**: Routing
- **TypeScript**: Type-safe JavaScript
- **SCSS**: Advanced CSS preprocessing

## 🚢 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your Git repository to Netlify
3. Set build command to: `npm run build`
4. Set publish directory to: `dist/portfolio`

### Deploy to GitHub Pages

```bash
npm install -g angular-cli-ghpages
ng build --base-href "/portfolio/"
ngh --dir=dist/portfolio
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 💬 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Built with ❤️ using Angular**

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

> > > > > > > 0805fe5 (basic portfolio done need some changes)
