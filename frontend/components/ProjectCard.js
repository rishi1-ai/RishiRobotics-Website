import { Badge } from '@/components/ui/badge';
import { Lightbulb } from 'lucide-react';

export default function ProjectCard({ project, courseName }) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 border-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    advanced: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
          <Lightbulb className="h-6 w-6 text-gray-700" />
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium border ${
            difficultyColors[project.difficulty] || difficultyColors.beginner
          }`}
        >
          {project.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>

      <p className="text-sm text-gray-500 mb-3">{courseName}</p>

      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
        {project.description}
      </p>

      {project.requirements && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-700 mb-2">Prerequisites:</p>
          <p className="text-xs text-gray-600 line-clamp-2">{project.requirements}</p>
        </div>
      )}
    </div>
  );
}
