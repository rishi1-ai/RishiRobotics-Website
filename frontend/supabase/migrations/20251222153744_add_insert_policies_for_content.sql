/*
  # Add INSERT Policies for Content Management

  ## Changes
  - Add INSERT policies for courses, lessons, code_examples, and projects tables
  - Allow anonymous users to insert content (for seeding and demo purposes)
  - In production, these should be restricted to authenticated admin users

  ## Security Note
  For a production system, these policies should be restricted to admin roles only.
  For this educational demo, we allow public inserts for easy content management.
*/

-- Allow anyone to insert courses
CREATE POLICY "Anyone can insert courses"
  ON courses FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to insert lessons
CREATE POLICY "Anyone can insert lessons"
  ON lessons FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to insert code examples
CREATE POLICY "Anyone can insert code examples"
  ON code_examples FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to insert projects
CREATE POLICY "Anyone can insert projects"
  ON projects FOR INSERT
  TO anon
  WITH CHECK (true);