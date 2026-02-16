'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CheckCircle2, Circle } from 'lucide-react';

export default function Sidebar({ course, lessons }) {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-80 bg-white border-r border-gray-200 h-full lg:sticky lg:top-16 overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h2>
        <p className="text-sm text-gray-600">{course.description}</p>
      </div>

      <nav className="p-4">
        <div className="space-y-1">
          {lessons.map((lesson, index) => {
            const isActive = pathname.includes(lesson.slug);
            return (
              <Link
                key={lesson.id}
                href={`/courses/${course.slug}/${lesson.slug}`}
                className={`flex items-start space-x-3 p-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {isActive ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium mb-1">
                    {index + 1}. {lesson.title}
                  </div>
                  <div
                    className={`text-xs ${
                      isActive ? 'text-gray-300' : 'text-gray-500'
                    }`}
                  >
                    {lesson.duration_minutes} min
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
