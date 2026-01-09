# Buddha Jumps Over the Wall: Interactive Biochemistry Website

## 🧬 佛跳墙生化研究 | Biochemistry Research

An interactive educational website exploring the biochemistry behind China's most legendary dish, Buddha Jumps Over the Wall (佛跳墙). This project combines traditional Chinese culinary culture with modern molecular science through engaging visualizations and interactive components.

## ✨ Features

### 🏠 **Home Page (index.html)**
- **Hero Section**: Stunning visual presentation with generated hero image
- **Interactive Ingredient Explorer**: Clickable grid of 12+ premium ingredients
- **Molecular Viewer**: Real-time display of molecular structures and biochemical data
- **Macromolecule Categories**: Filter ingredients by Proteins, Carbohydrates, and Lipids
- **Cultural Introduction**: Bilingual content in English and Chinese

### 🧪 **Biochemistry Page (biochemistry.html)**
- **Enzyme Reaction Simulator**: Interactive pH and temperature controls affecting enzyme structure
- **Digestive Pathway Visualization**: Step-by-step breakdown of macromolecules
- **Chemical Equations**: Balanced reactions for protein, carbohydrate, and lipid digestion
- **Nutritional Charts**: ECharts visualizations comparing amino acid profiles and macromolecule distribution
- **Real-time Feedback**: Visual enzyme denaturation and reaction rate changes

### 🏛️ **Culture Page (culture.html)**
- **Historical Timeline**: Interactive scrollable timeline from Qing Dynasty to present
- **Origin Stories**: Three different legends explaining the dish's name
- **Cultural Significance**: Deep dive into traditional values and preparation philosophy
- **Regional Variations**: Map showing different preparation styles across regions

## 🛠 Technical Implementation

### **Frontend Technologies**
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, Flexbox, Grid, and animations
- **Tailwind CSS**: Utility-first styling framework
- **JavaScript ES6+**: Modern JavaScript with modular architecture

### **Interactive Libraries**
- **Anime.js**: Smooth animations and transitions
- **ECharts.js**: Professional data visualizations and charts
- **p5.js**: Creative coding for particle systems and molecular animations
- **Splide.js**: Image carousels and sliders
- **Matter.js**: Physics simulations (ready for future enhancements)

### **Design System**
- **Color Palette**: Jade green (#2D5A3D), Warm coral (#E67E4D), Soft gold (#D4AF37)
- **Typography**: Playfair Display (headings), Inter (body), Noto Serif SC (Chinese)
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **Accessibility**: WCAG 2.1 AA compliance with proper contrast ratios

## 📁 Project Structure

```
/
├── index.html              # Main landing page
├── biochemistry.html       # Molecular breakdown and enzyme simulator
├── culture.html           # Historical timeline and cultural content
├── main.js               # Core JavaScript functionality
├── resources/            # Media assets
│   ├── hero-buddha-jump.jpg
│   ├── ingredients/      # Premium ingredient photos
│   ├── molecules/        # Molecular structure diagrams
│   └── cultural/         # Historical images
├── interaction.md        # Interactive component specifications
├── design.md            # Visual design philosophy
├── outline.md           # Project structure documentation
└── README.md           # This file
```

## 🎯 Interactive Components

### **1. Ingredient Explorer**
- **Functionality**: Click any of 12 ingredients to view molecular details
- **Data**: Each ingredient includes molecular structure, enzymes, and monomers
- **Interaction**: Category filtering with smooth animations
- **Educational Value**: Learn about different macromolecule categories

### **2. Enzyme Simulator**
- **Functionality**: Adjust pH (1-14) and temperature (20-100°C) sliders
- **Visual Feedback**: Real-time enzyme structure changes and denaturation
- **Scientific Accuracy**: Based on actual pepsin optimal conditions (pH 1.5-2.0, 37°C)
- **Educational Value**: Understand enzyme sensitivity to environmental factors

### **3. Digestive Pathway**
- **Functionality**: Click through 4 stages of digestion
- **Content**: Detailed chemical reactions for each stage
- **Progression**: Mouth → Stomach → Small Intestine → Absorption
- **Educational Value**: Complete understanding of macromolecule breakdown

### **4. Historical Timeline**
- **Functionality**: Interactive timeline from Qing Dynasty to present
- **Content**: Historical periods with detailed cultural context
- **Navigation**: Click to explore different eras
- **Educational Value**: Cultural appreciation and historical context

## 📊 Data & Research

### **Scientific Accuracy**
- All chemical equations balanced and verified
- Enzyme names and functions based on peer-reviewed sources
- pH ranges and optimal conditions scientifically accurate
- Nutritional data from published research studies

### **Cultural Authenticity**
- Chinese translations verified for accuracy and respect
- Historical information cross-referenced with multiple sources
- Traditional preparation methods properly represented
- Cultural significance explained with appropriate context

### **Ingredient Database**
```javascript
// Example ingredient data structure
{
  id: 'abalone',
  name: 'Abalone 鲍鱼',
  category: 'proteins',
  description: 'High-quality protein source rich in essential amino acids',
  molecular: 'Collagen and myofibrillar proteins',
  enzyme: 'Pepsin, Trypsin',
  monomer: 'Amino acids (Glycine, Proline, Hydroxyproline)'
}
```

## 🚀 Getting Started

### **Local Development**
```bash
# Clone or download the project files
cd buddha-jumps-biochemistry

# Start a local web server
python -m http.server 8000

# Open in browser
http://localhost:8000
```

### **Deployment**
The website is designed as a static site and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

## 🎨 Design Philosophy

### **Visual Language**
- **Scientific Precision**: Clean molecular diagrams and accurate data representation
- **Cultural Elegance**: Traditional Chinese design motifs with jade-inspired colors
- **Modern Interactivity**: Smooth animations and responsive layouts
- **Educational Clarity**: Clear information hierarchy and accessible design

### **Color Psychology**
- **Jade Green**: Represents traditional Chinese ceramics and natural ingredients
- **Warm Coral**: Evokes the rich broth and cooked seafood elements
- **Soft Gold**: Highlights premium ingredients and traditional luxury
- **Warm Cream**: Clean background for scientific content readability

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### **Mobile Optimizations**
- Touch-friendly interactive elements
- Optimized font sizes for readability
- Simplified navigation for mobile
- Performance-optimized animations

## ♿ Accessibility Features

### **WCAG 2.1 AA Compliance**
- Color contrast ratios meet 4.5:1 minimum
- Keyboard navigation support
- Screen reader compatible markup
- Alternative text for all images
- Semantic HTML structure

### **Inclusive Design**
- Bilingual content (English/Chinese)
- Clear visual hierarchy
- Consistent navigation patterns
- Error prevention and recovery

## 🔬 Educational Objectives

### **Learning Outcomes**
1. **Molecular Biology**: Understanding macromolecule structure and function
2. **Enzymology**: Comprehending enzyme-substrate interactions and environmental effects
3. **Nutrition Science**: Learning about protein quality and amino acid profiles
4. **Cultural Studies**: Appreciating Chinese culinary traditions and history
5. **Scientific Method**: Connecting theoretical knowledge to practical applications

### **Target Audience**
- High school and university students
- Food science enthusiasts
- Cultural heritage learners
- Biochemistry educators
- General public interested in science and culture

## 🌟 Future Enhancements

### **Potential Additions**
- 3D molecular models with WebGL
- Virtual reality cooking experience
- Additional language translations
- More detailed nutritional analysis
- User-generated content features
- Social sharing capabilities

## 📄 License

This project is created for educational purposes. All content is original or properly attributed.

## 🤝 Contributing

This is an educational project demonstrating the intersection of food culture and molecular science. Suggestions for improvements are welcome!

## 📞 Contact

For questions about the biochemistry content, cultural research, or technical implementation, please refer to the detailed documentation in the project files.

---

**🧬 佛跳墙生化研究 | Buddha Jumps Over the Wall Biochemistry Research**

*Exploring the molecular magic behind China's most legendary dish*