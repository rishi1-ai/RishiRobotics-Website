import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import Footer from '@/components/Footer';
//import { supabase } from '@/lib/supabase';
import { BookOpen, Sparkles, Target } from 'lucide-react';

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
}

export default async function Home() {
  const courses = await getCategories();

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive curriculum designed to take you from
              beginner to expert in the most sought-after technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Structured Learning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Follow a carefully designed curriculum from basics to advanced topics.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Hands-on Projects
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Build real-world projects to solidify your understanding and skills.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Clear Explanations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complex concepts broken down into easy-to-understand language.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
