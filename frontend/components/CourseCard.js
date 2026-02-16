import Link from 'next/link';
import { ArrowRight, Code2, Brain, Network, Cpu, Bot } from 'lucide-react';

const iconMap = {
  Code2,
  Brain,
  Network,
  Cpu,
  Bot,
};

export default function CourseCard({ course }) {
  const Icon = iconMap[course.icon] || Code2;

  return (
    <Link href={`/courses/${course.slug}`}>
      <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${course.color}15` }}
        >
          <Icon className="h-7 w-7" style={{ color: course.color }} />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
          {course.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
            {course.difficulty_level}
          </span>
          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}
