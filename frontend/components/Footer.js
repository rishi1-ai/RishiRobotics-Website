import Link from 'next/link';
import { Brain, Code2, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { name: 'Python Programming', href: '/courses/python' },
      { name: 'Artificial Intelligence', href: '/courses/artificial-intelligence' },
      { name: 'Machine Learning', href: '/courses/machine-learning' },
      { name: 'Deep Learning', href: '/courses/deep-learning' },
      { name: 'Robotics', href: '/courses/robotics' },
    ],
    resources: [
      { name: 'All Courses', href: '/#courses' },
      { name: 'Getting Started', href: '/' },
      { name: 'Documentation', href: '/' },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Brain className="h-8 w-8 text-gray-900" />
                <Code2 className="h-4 w-4 text-gray-600 absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-gray-900">Rishi Robotics</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md leading-relaxed">
              Empowering learners worldwide with comprehensive tutorials in Python,
              AI, Machine Learning, Deep Learning, and Robotics.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
              Courses
            </h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} Rishi Robotics. Built with passion for learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
