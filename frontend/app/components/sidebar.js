'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // This API now returns Categories AND their Articles inside
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <aside className="w-64 bg-white border-r h-screen hidden md:block overflow-y-auto shrink-0">
      <div className="p-4 font-bold text-gray-500 text-xs uppercase tracking-wider border-b">
        Course Index
      </div>
      
      <div className="py-2">
        {categories.map(cat => (
          <div key={cat.id} className="mb-2">
            
            {/* 1. The Category Title (Folder) */}
            <div className="px-4 py-2 font-bold text-gray-800 text-sm flex items-center gap-2">
              <span className="text-teal-600">📂</span> {cat.name}
            </div>

            {/* 2. The Articles Inside (Files) */}
            <ul className="border-l-2 border-gray-100 ml-6">
              {cat.articles && cat.articles.map(article => (
                <li key={article.id}>
                  <Link 
                    href={`/article/${article.slug}`} 
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
              
              {/* Show this if category is empty */}
              {(!cat.articles || cat.articles.length === 0) && (
                <li className="px-4 py-2 text-xs text-gray-400 italic">
                  (No articles yet)
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}