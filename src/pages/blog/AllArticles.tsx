import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { getArticles } from "../../services/githubCMS";
import { Dialog } from '@headlessui/react';
import { Link } from "react-router-dom";

const AllArticles: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);

  useEffect(() => {
    getArticles(i18n.language)
      .then((articles) => {
        console.log('All articles fetched:', articles);
        setArticles(articles || []);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, [i18n.language]);

  useEffect(() => {
    if (articles.length > 0) {
      const tags = Array.from(new Set(articles.flatMap(article => article.tags)));
      setAvailableTags(tags);
    }
  }, [articles]);

  const filteredArticles = articles.filter(article =>
    selectedTags.length === 0 || 
    selectedTags.some(tag => article.tags.includes(tag))
  );

  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">
            {t('blog.allArticles')} <span className="text-blue-600">({articles.length})</span>
          </h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← {t('blog.backToHome')}
          </Link>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-gray-600 mr-2">{t('blog.filterBy')}:</span>
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTags(prev => 
                  prev.includes(tag) 
                    ? prev.filter(t => t !== tag) 
                    : [...prev, tag]
                )}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="ml-4 text-blue-600 hover:text-blue-800 text-sm"
              >
                {t('blog.clearFilters')}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div key={article.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-64 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/blog/${article.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {t('blog.readMore')} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Modal identique à Blog.tsx */}
        <Dialog
          open={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          className="relative z-50"
        >
          {/* ... même contenu modal que Blog.tsx ... */}
        </Dialog>
      </div>
    </section>
  );
};

export default AllArticles;

// Interface Article identique à Blog.tsx
interface Article {
  id: number;
  image: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  slug: string;
  content: string;
  excerpt: string;
} 