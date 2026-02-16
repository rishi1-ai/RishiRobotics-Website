import { redirect } from 'next/navigation';
import CourseCard from '@/components/CourseCard';


/**
 * Fetch all categories from Django backend
 */
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

/**
 * Fetch articles for a given category ID
 */
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

  // 1. Get all categories
  const categories = await getCategories();

  // 2. Find the category matching the URL slug
  const category = categories.find(cat => cat.slug === slug);

  // 3. If category not found → go back to home
  if (!category) {
    redirect('/');
  }

  // 4. Get articles under this category
  const articles = await getArticlesByCategory(category.id);

  // 5. If articles exist, redirect to first lesson
  // if (articles.length > 0) {
  //   redirect(`/courses/${slug}/${articles[0].slug}`);
  // }

  // 6. Fallback UI (no lessons yet)
  return (
  <div className="min-h-screen bg-white">
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice().reverse().map(article => (
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
