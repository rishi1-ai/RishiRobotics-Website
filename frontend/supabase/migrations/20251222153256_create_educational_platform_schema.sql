/*
  # Educational Platform Database Schema

  ## Overview
  Creates the complete database structure for an educational tutorial platform
  focused on Python, AI, ML, Deep Learning, and Robotics.

  ## New Tables
  
  ### `courses`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Course title (e.g., "Python Programming")
  - `slug` (text, unique) - URL-friendly identifier
  - `description` (text) - Course description
  - `icon` (text) - Icon name for display
  - `difficulty_level` (text) - beginner, intermediate, advanced
  - `order_index` (integer) - Display order
  - `color` (text) - Theme color for the course
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `lessons`
  - `id` (uuid, primary key) - Unique identifier
  - `course_id` (uuid, foreign key) - Reference to courses
  - `title` (text) - Lesson title
  - `slug` (text) - URL-friendly identifier
  - `content` (text) - Markdown content
  - `order_index` (integer) - Display order within course
  - `duration_minutes` (integer) - Estimated completion time
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `code_examples`
  - `id` (uuid, primary key) - Unique identifier
  - `lesson_id` (uuid, foreign key) - Reference to lessons
  - `title` (text) - Example title
  - `code` (text) - Code content
  - `language` (text) - Programming language
  - `output` (text) - Expected output
  - `explanation` (text) - Code explanation
  - `order_index` (integer) - Display order within lesson
  - `created_at` (timestamptz) - Creation timestamp

  ### `projects`
  - `id` (uuid, primary key) - Unique identifier
  - `course_id` (uuid, foreign key) - Reference to courses
  - `title` (text) - Project title
  - `description` (text) - Project description
  - `difficulty` (text) - beginner, intermediate, advanced
  - `requirements` (text) - Prerequisites
  - `instructions` (text) - Step-by-step instructions
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Add policies for public read access (educational content is public)
*/

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  icon text DEFAULT 'BookOpen',
  difficulty_level text DEFAULT 'beginner',
  order_index integer NOT NULL,
  color text DEFAULT '#64748b',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create lessons table
CREATE TABLE IF NOT EXISTS lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title text NOT NULL,
  slug text NOT NULL,
  content text NOT NULL,
  order_index integer NOT NULL,
  duration_minutes integer DEFAULT 15,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(course_id, slug)
);

-- Create code_examples table
CREATE TABLE IF NOT EXISTS code_examples (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  title text NOT NULL,
  code text NOT NULL,
  language text DEFAULT 'python',
  output text,
  explanation text,
  order_index integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  difficulty text DEFAULT 'beginner',
  requirements text,
  instructions text NOT NULL,
  order_index integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_lessons_course_id ON lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_code_examples_lesson_id ON code_examples(lesson_id);
CREATE INDEX IF NOT EXISTS idx_projects_course_id ON projects(course_id);

-- Enable Row Level Security
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE code_examples ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (educational content is public)
CREATE POLICY "Anyone can view courses"
  ON courses FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view lessons"
  ON lessons FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view code examples"
  ON code_examples FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon
  USING (true);