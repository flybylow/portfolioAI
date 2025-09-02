# Ward's Portfolio - Making Tech Human

A minimal, clean portfolio showcasing AI and blockchain UX leadership work. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🎯 Portfolio Goals

- **Landing AI & Blockchain UX Leadership Roles**: Demonstrate expertise in making complex technology accessible
- **Clean Design**: Black/white/grey aesthetic inspired by Dan Machado and DMCG
- **Case Study Focus**: 4 in-depth case studies with consistent structure
- **Responsive**: Mobile-first design that works across all devices

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React useState (minimal)

### File Structure
```
src/
├── app/                    # Next.js app router
│   ├── globals.css        # Global styles + shadcn/ui variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page (Portfolio component)
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx     # Button component
│   │   └── card.tsx       # Card component
│   ├── CaseStudyCard.tsx  # Case study grid item
│   ├── CaseStudyDetail.tsx # Full case study view
│   ├── HomePage.tsx       # Landing page
│   └── Portfolio.tsx      # Main app component
├── data/                  # Data layer
│   └── case-studies.ts    # Case study definitions
└── lib/                   # Utilities
    └── utils.ts           # shadcn/ui utility functions
```

## 📊 Case Study Structure

Each case study follows a consistent template with these sections:

### Required Fields
- `id`: Unique identifier
- `title`: Project title
- `subtitle`: Brief description
- `year`: Project year
- `client`: Client name
- `role`: Your role
- `duration`: Project duration
- `team`: Team composition
- `tags`: Technology/domain tags
- `heroImage`: Tailwind gradient class
- `challenge`: Problem statement
- `solution`: Solution overview
- `impact`: Array of impact metrics
- `keyTakeaway`: Main learning

### Optional Fields
- `businessContext`: Business background
- `problemBreakdown`: ASCII diagram of problems
- `researchMethods`: Research approach
- `keyInsight`: Key user insight
- `solutions`: Detailed solution breakdowns
- `implementationResults`: Results with ASCII metrics
- `testimonials`: User feedback
- `technologyStack`: Technical details
- `designPrinciples`: Design principles developed

## 🚀 Adding New Case Studies

### 1. Add to Data File
```typescript
// src/data/case-studies.ts
export const caseStudies: CaseStudy[] = [
  // ... existing cases
  {
    id: 'new-project',
    title: 'New Project Name',
    subtitle: 'Brief description',
    // ... fill in all required fields
  }
];
```

### 2. Follow the Template
- Use consistent formatting for ASCII diagrams
- Follow the same section structure
- Maintain consistent metric presentation
- Use the same color scheme (black/white/grey)

### 3. Update Navigation
The navigation automatically updates based on the case studies array.

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Grey variations (#F3F4F6, #E5E7EB, #D1D5DB)
- **Interactive**: Blue (#2563EB) for metrics and highlights

### Typography
- **Headings**: Bold, clean sans-serif
- **Body**: Readable, medium weight
- **Code/Diagrams**: Monospace for ASCII art

### Layout
- **Grid**: Responsive 2-column grid for case studies
- **Spacing**: Consistent 16px (py-16) between sections
- **Container**: Max-width 6xl (1152px) for content
- **Padding**: 6 (24px) for horizontal spacing

## 📱 Responsive Design

- **Mobile**: Single column layout, stacked sections
- **Tablet**: 2-column grid for case studies
- **Desktop**: Full layout with optimal spacing
- **Breakpoints**: Tailwind's default responsive system

## 🔧 Development

### Getting Started
```bash
npm install
npm run dev
```

### Building
```bash
npm run build
npm start
```

### Key Commands
- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run lint`: ESLint checking
- `npm run type-check`: TypeScript validation

## 📈 Performance

- **Images**: Optimized gradients (no image loading)
- **Fonts**: System fonts for fast loading
- **Bundle**: Minimal dependencies
- **SEO**: Semantic HTML structure

## 🎯 Future Enhancements

- [ ] About page content
- [ ] Contact form
- [ ] Dark mode toggle
- [ ] Case study filtering by tags
- [ ] Blog/thought leadership section
- [ ] PDF case study downloads

## 📝 Content Guidelines

### Writing Style
- **Clear**: Simple, direct language
- **Quantified**: Include specific metrics and numbers
- **Human-centered**: Focus on user impact, not just technical features
- **Story-driven**: Present problems, solutions, and outcomes

### Case Study Length
- **Overview**: 2-3 sentences for challenge/solution
- **Details**: 1-2 paragraphs for context
- **Metrics**: 3-5 key impact numbers
- **Takeaway**: 1-2 sentences maximum

## 🔗 External References

- **Dan Machado**: https://www.danmachado.com/trackr
- **DMCG**: https://www.dmcg.co/projects/infinitemachine

## 📄 License

This portfolio is for personal use. Case study content represents real work experience. 