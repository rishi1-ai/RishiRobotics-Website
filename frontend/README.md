# Rishi Robotics - Educational Tutorial Platform

A modern, production-ready educational platform for learning Python Programming, Artificial Intelligence, Machine Learning, Deep Learning, and Robotics.

## Features

- **5 Comprehensive Courses**: Python, AI, ML, Deep Learning, and Robotics
- **Structured Learning**: Well-organized lessons with clear progression
- **Interactive Code Examples**: Syntax-highlighted code blocks with copy functionality
- **Hands-on Projects**: Real-world projects to practice skills
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Clean UI**: Minimalist design with white and light-grey color palette
- **Fast Loading**: Optimized for performance with Next.js 13+
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Frontend**: Next.js 13 (App Router), React, JavaScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Ready for Netlify/Vercel

## Database Schema

### Tables

1. **courses**: Store course information
   - id, title, slug, description, icon, difficulty_level, order_index, color

2. **lessons**: Individual tutorials within courses
   - id, course_id, title, slug, content, order_index, duration_minutes

3. **code_examples**: Code snippets with syntax highlighting
   - id, lesson_id, title, code, language, output, explanation

4. **projects**: Hands-on projects for practice
   - id, course_id, title, description, difficulty, requirements, instructions

## Course Content

### 1. Python Programming
- Introduction to Python
- Variables and Data Types
- Control Flow (If-Else)
- Loops and Iterations
- Functions and Modules
- Object-Oriented Programming

### 2. Artificial Intelligence
- What is AI?
- Search Algorithms (BFS, DFS, A*)
- Knowledge Representation
- Machine Learning Basics
- Neural Networks Introduction

### 3. Machine Learning
- ML Fundamentals
- Linear Regression
- Classification Algorithms
- Clustering
- Model Evaluation

### 4. Deep Learning
- Neural Networks Architecture
- Convolutional Neural Networks (CNN)
- Recurrent Neural Networks (RNN)
- Transfer Learning
- Popular Frameworks (TensorFlow, PyTorch)

### 5. Robotics
- Introduction to Robotics
- Sensors and Actuators
- Robot Kinematics
- ROS (Robot Operating System) Basics
- AI in Robotics
- Hands-on Projects

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account (database provided)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment variables are already configured in `.env`

4. Seed the database with sample content:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_url NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key node scripts/seed-database.js
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.js                 # Home page with course listing
│   ├── globals.css             # Global styles
│   └── courses/
│       └── [slug]/
│           ├── page.js         # Course overview (redirects to first lesson)
│           └── [lessonSlug]/
│               └── page.js     # Individual lesson page
├── components/
│   ├── Header.js               # Navigation header
│   ├── Hero.js                 # Hero section with CTA
│   ├── CourseCard.js           # Course card component
│   ├── Sidebar.js              # Lesson navigation sidebar
│   └── CodeBlock.js            # Code syntax highlighting
├── lib/
│   └── supabase.js             # Supabase client configuration
├── scripts/
│   └── seed-database.js        # Database seeding script
└── public/                     # Static assets
```

## Features Roadmap

### Current Features ✅
- Course listings
- Lesson navigation
- Code examples with syntax highlighting
- Responsive design
- Database integration

### Future Enhancements
- [ ] Quiz system for practice
- [ ] User authentication and progress tracking
- [ ] Video tutorials
- [ ] Dark mode support
- [ ] Search functionality
- [ ] Bookmarking lessons
- [ ] Discussion forum
- [ ] Certificates of completion
- [ ] Django REST API backend integration

## Design Philosophy

- **Minimalist**: Clean, distraction-free learning environment
- **Accessible**: Clear typography and sufficient contrast
- **Performance**: Fast loading times and optimized assets
- **Scalable**: Modular architecture for easy expansion
- **User-Focused**: Intuitive navigation and clear progression

## Color Palette

- **Primary Background**: White (#FFFFFF)
- **Secondary Background**: Light Grey (#F9FAFB)
- **Text**: Dark Grey/Black (#111827)
- **Accents**: Course-specific colors
- **Borders**: Light Grey (#E5E7EB)

## Backend Integration (Django)

The frontend is designed to work with a Django REST API backend. To integrate:

1. Set up Django REST Framework
2. Create API endpoints for:
   - Course listing and details
   - Lesson content
   - User authentication
   - Progress tracking
   - Quiz submissions

3. Update Supabase client calls to fetch from Django API
4. Add authentication token management

## Contributing

This is an educational platform built for learning purposes. Feel free to extend and customize it for your needs.

## License

This project is open source and available for educational purposes.

## Support

For questions or issues, please refer to the documentation or create an issue in the repository.

---

Built with ❤️ for learners worldwide
