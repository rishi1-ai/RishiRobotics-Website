import { notFound } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';

async function getArticle(lessonSlug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/${lessonSlug}/`,
    { cache: 'no-store' }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function LessonPage({ params }) {
  const { lessonSlug } = params;
  const article = await getArticle(lessonSlug);

  if (!article) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>

        <MarkdownRenderer content={article.content} />
      </div>
    </div>
  );
}
