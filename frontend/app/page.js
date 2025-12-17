'use client';

import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Hero from './components/Hero';
import { useSearchParams } from 'next/navigation';

function HomeContent() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category');

  useEffect(() => {
    setLoading(true);
    let url = 'http://127.0.0.1:8000/api/articles/';
    if (categoryId) {
        url += `?category=${categoryId}`;
    }

    axios.get(url)
      .then(response => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error connecting to Django:", error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. LATEST TUTORIALS SECTION */}
      {/* 'courses-area' and 'pb-120' force the footer to stay down */}
      <section className="courses-area fix pt-120 pb-120">
        <div className="container">
          
          {/* Section Title */}
          <div className="row">
             <div className="col-lg-12">
                <div className="section-title center-align text-center mb-50">
                    <h5>Latest Tutorials</h5>
                    <h2>Explore Our Guides</h2>
                </div>
             </div>
          </div>

          {loading && <p className="text-center">Loading articles...</p>}

          <div className="row">
            {articles.map(article => (
              /* BOOTSTRAP COLUMN: 3 columns on large screens */
              <div key={article.id} className="col-xl-4 col-lg-4 col-md-6">
                
                {/* CARD CONTAINER (Styled manually to match Educato) */}
                <div className="box-courses mb-30" style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                   
                   {/* Category Badge */}
                   <span className="text-uppercase" style={{ color: '#ff7350', fontSize: '12px', fontWeight: 'bold' }}>
                    {article.category.name}
                   </span>

                   {/* Title */}
                   <h3 className="mt-2" style={{ fontSize: '20px', minHeight: '60px', fontWeight: '700' }}>
                     <Link href={`/article/${article.slug}`} style={{ color: '#101a2e' }}>
                       {article.title}
                     </Link>
                   </h3>

                   {/* Date */}
                   <p style={{ color: '#888', fontSize: '14px', marginBottom: '15px' }}>
                    {new Date(article.created_at).toDateString()}
                   </p>

                   {/* Button */}
                   <Link href={`/article/${article.slug}`} className="btn ss-btn" style={{ width: '100%', textAlign: 'center' }}>
                      Read Tutorial
                   </Link>

                </div>
              </div>
            ))}
          </div>

          {!loading && articles.length === 0 && (
             <div className="row">
                <div className="col-12 text-center">
                    <p>No articles found.</p>
                </div>
             </div>
          )}

        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="p-5 text-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}