# DevCard Generator



A modern, open-source web application that allows developers to create professional business cards with VS Code theme styling. Generate JSON-based business cards and download them as images or JSON files.

- [Live Demo](https://devcard-generator-five.vercel.app/)

## ✨ Features

- **🎨 VS Code Themes**: Choose from 15+ popular VS Code themes
- **💼 Professional Layout**: Clean, JSON-styled business card design
- **📱 Responsive Design**: Works perfectly on desktop and mobile
- **📥 Multiple Export Options**:
  - Download as high-quality PNG image
  - Export as JSON file
  - Full-size preview capture
- **⚡ Real-time Preview**: See changes instantly as you type
- **🎯 Developer Focused**: JSON format with syntax highlighting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/XerxesCoder/devcard-generator.git
   cd devcard-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [shadCn](https://ui.shadcn.com/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [html2canvas](https://html2canvas.hertzen.com/) - Image capture
- [Lucide React](https://lucide.dev/) - Icons

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Supported Themes

The application includes 15+ VS Code-inspired themes:

- **Dark Themes**: Dark+, Monokai, GitHub Dark, Dracula, Solarized Dark, Night Owl, One Dark Pro, Material Ocean, Synthwave '84, Palenight, Tokyo Night, Rosé Pine, Catppuccin Mocha, Ayu Dark, Nord, Gruvbox Dark
- **Light Themes**: Light+, GitHub Light

## 💡 Usage

1. **Fill in your information** in the form:
   - Personal details (name, title, bio)
   - Contact information (email, phone, website)
   - Social profiles (GitHub, LinkedIn, Twitter, etc.)

2. **Choose a theme** from the theme selector

3. **Preview your card** in real-time with JSON syntax highlighting

4. **Download your card**:
   - **JSON**: Download as a structured JSON file
   - **Image**: Download as a professional business card PNG
   - **Full Preview**: Capture the entire preview panel

## 🏗️ Project Structure

```
developer-business-card-generator/
├── app/
│   ├── layout.js
│   └── page.js
├── components/
│   ├── business-card-form.js
│   ├── business-card-preview.js
│   ├── theme-selector.js
│   └── ui/ (shadcn/ui components)
├── lib/
│   └── vscode-themes.js
├── stores/
│   └── business-card-store.js
└── public/
```

## 🔧 Customization

### Adding New Themes

Add new VS Code themes to `lib/vscode-themes.js`:

```javascript
"your-theme-name": {
  name: "Your Theme Name",
  backgroundColor: "#your-color",
  editorBackground: "#your-color",
  textColor: "#your-color",
  // ... other theme properties
}
```

### Modifying Business Card Fields

Update the form and preview components to add new fields:

1. Add field to `BusinessCardForm`
2. Update state management in the store
3. Modify the preview rendering logic

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Areas for Contribution

- 🎨 New VS Code themes
- 📱 Mobile responsiveness improvements
- 🧪 Testing coverage
- 📚 Documentation improvements
- 🐛 Bug fixes
- 💡 New features

## 🐛 Reporting Issues

Found a bug? Please [create an issue](https://github.com/your-username/developer-business-card-generator/issues) with:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- VS Code team for theme inspiration
- shadcn/ui for beautiful components
- The open-source community

## 📞 Contact

- **E-mail**: [xerxescode@gmail.com](mailto:xerxescode@gmail.com)
- **Telegram**: [t.me/xerxescoder](https://t.me/xerxescoder)

---

**Made with ❤️ for developers**

If you find this project helpful, please give it a ⭐ on GitHub!