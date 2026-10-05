import { redirect } from 'next/navigation';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';


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


async function getArticlesByCategory(categoryId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/?category=${categoryId}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }

  return res.json();
}


export default async function CoursePage({ params }) {
  const { slug } = params;

  const categories = await getCategories();

  const category = categories.find(
    (cat) => cat.slug === slug
  );

  if (!category) {
    return (
    <div className="p-10">
      Category "{slug}" not found .
    </div>
  );
  }

  const articles = await getArticlesByCategory(category.id);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">

        <h1 className="text-3xl font-bold mb-6">
          {category.name}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Practice Questions */}
          <Link href={`/courses/${slug}/practice`}>
            <div className="group border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer h-full">

              <div className="text-3xl mb-4">
                📝
              </div>

              <h2 className="text-lg font-semibold mb-2">
                Practice Questions
              </h2>

              <p className="text-gray-600 mb-4">
                Test your knowledge with curated practice questions.
              </p>

              <span className="text-blue-600 group-hover:underline">
                Start Practice →
              </span>

            </div>
          </Link>


          {/* Lesson Cards */}
          {articles.slice().reverse().map((article) => (
            <CourseCard
              key={article.id}
              course={{
                title: article.title,
                description: article.short_description || '',
                slug: `${slug}/${article.slug}`,
              }}
            />
          ))}

        </div>

      </div>
    </div>
  );
}