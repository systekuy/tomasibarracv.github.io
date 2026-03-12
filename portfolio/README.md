# Tomás Ibarra - Developer Portfolio

A modern, minimal, and responsive portfolio website for a junior developer. Built with pure HTML, CSS, and JavaScript - no frameworks required.

## ✨ Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern Aesthetics**: Clean, minimal design inspired by Silicon Valley tech companies
- **Smooth Animations**: Subtle hover effects and scroll animations
- **Professional Layout**: Grid-based sections with excellent typography
- **Fast Loading**: Pure HTML/CSS/JS - no dependencies
- **GitHub Pages Ready**: Deploy in minutes
- **SEO Friendly**: Semantic HTML structure

## 📋 Sections

1. **Hero** - Name, title, location, and call-to-action buttons
2. **About** - Personal introduction and key stats
3. **Languages** - Language proficiencies with progress bars
4. **Education** - Timeline of educational achievements
5. **Experience** - Work experience summary
6. **Skills** - Organized by category with hover effects
7. **Projects** - Featured projects with descriptions
8. **Contact** - Contact information and CTA
9. **Footer** - Links and social profiles

## 🚀 Deployment on GitHub Pages

### Quick Start (5 minutes)

1. **Create a GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `<username>.github.io` (replace `<username>` with your GitHub username)
   - Make it public
   - Click "Create repository"

2. **Upload Files**
   - Clone your new repository: `git clone https://github.com/<username>/<username>.github.io.git`
   - Copy all portfolio files (`index.html`, `style.css`, `script.js`) to the repository folder
   - Create a `README.md` file (optional)

3. **Push to GitHub**
   ```bash
   cd <username>.github.io
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

4. **Access Your Portfolio**
   - Your site will be live at: `https://<username>.github.io`
   - It may take a few minutes to deploy

### Using Git Commands

```bash
# Initialize git in portfolio folder
git init

# Add GitHub Pages repository as remote
git remote add origin https://github.com/<username>/<username>.github.io.git

# Add all files
git add .

# Commit changes
git commit -m "Deploy portfolio"

# Push to GitHub Pages
git push -u origin main
```

### Alternative: Upload Without Git

1. Go to your GitHub repository
2. Click "Upload files"
3. Drag and drop your `index.html`, `style.css`, and `script.js`
4. Commit changes
5. Your portfolio will be live in a few minutes

## 📦 Project Structure

```
portfolio/
├── index.html      # Main HTML file with all content
├── style.css       # Responsive styling and animations
├── script.js       # Smooth scrolling and interactive features
└── README.md       # This file
```

## 🎨 Customization

### Change Personal Information

Edit `index.html`:
- Replace "Tomás Ibarra" with your name
- Update the hero section subtitle and description
- Modify contact information in the contact section
- Update social media links (GitHub, LinkedIn)

### Update Skills

Find the Skills section in `index.html` and edit the skill categories and tags.

### Add Projects

Duplicate the project card in the Projects section and update content.

### Customize Colors

Edit the CSS variables in `style.css` at the top:

```css
:root {
    --primary-color: #0f172a;      /* Dark blue */
    --secondary-color: #3b82f6;    /* Bright blue */
    --accent-color: #06b6d4;       /* Cyan */
    --text-dark: #1e293b;
    /* ... more colors ... */
}
```

### Modify Fonts

Change the font family in `style.css`:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## 💻 Local Testing

### Using Python (Built-in on most systems)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000` in your browser.

### Using Node.js

```bash
npx http-server -p 8000
```

### Using VS Code

- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## ✅ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Features Explained

### Smooth Scrolling
Navigation links smoothly scroll to sections with `scroll-behavior: smooth`

### Animations
- Hero slide-up animations
- Card hover lift effects
- Scroll-triggered entrance animations
- Smooth color transitions

### Performance
- No external CSS frameworks or JavaScript libraries
- Minimal CSS and JavaScript (< 20 KB total)
- Fast loading and rendering

## 📝 Contact

- **Email**: ttomasibarra@gmail.com
- **Phone**: +598 97 990 860
- **Location**: Montevideo, Uruguay
- **LinkedIn**: linkedin.com/in/ttomasibarra
- **GitHub**: github.com/ttomasibarra

## 📄 License

This portfolio template is free to use and modify for your personal portfolio.

## 🤝 Tips for Success

1. **Keep it Updated**: Regularly update your experience and projects
2. **Add More Projects**: Include 3-5 solid projects to showcase skills
3. **Update Frequently**: Add new skills and experiences as you grow
4. **Mobile Testing**: Always test on mobile devices before deployment
5. **SEO**: Keep titles, descriptions, and content relevant
6. **Fast Deployment**: Push changes to GitHub to see them live in seconds

## 🎯 Next Steps

1. Customize all personal information
2. Add your real projects with links
3. Update skills based on your expertise
4. Add profile picture (optional enhancement)
5. Deploy to GitHub Pages
6. Share your portfolio link!

---

**Built with ❤️ - A clean, professional portfolio for junior developers**
