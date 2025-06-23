import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { getArticles } from "../../services/githubCMS";
import { Dialog } from '@headlessui/react';
import { Link } from "react-router-dom";

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

const Blog: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    getArticles(i18n.language)
      .then((articles) => {
        console.log('Articles fetched:', articles);
        setArticles(articles || []);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, [i18n.language]);

  return (
    <section id="blog" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t('blog.title')} <span className="text-blue-600">{t('blog.highlight')}</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          {t('blog.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.slug} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover"/>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <div className="prose" dangerouslySetInnerHTML={{ __html: article.excerpt }} />
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedArticle(article)}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                >
                  {t('blog.readMore')} →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300">
            {t('blog.viewAll')}
          </Link>
        </div>
      </div>

      {/* Modal/Popup */}
      <Dialog
        open={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-start md:items-center justify-center p-0 md:p-4 overflow-y-auto">
          <Dialog.Panel className="w-full max-w-[95vw] md:max-w-4xl rounded-xl bg-white shadow-2xl mx-2 relative overflow-hidden h-[90vh]">
            {/* Contenu */}
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {selectedArticle?.title}
                </h2>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-400 hover:text-blue-600 text-2xl p-2 transition-colors"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <div className="prose prose-lg max-w-none p-6 overflow-y-auto flex-1">
                {selectedArticle?.content && (
                  <div 
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }} 
                    className="[&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:mt-8 [&_h2]:mb-4
                              [&_p]:text-gray-600 [&_p]:mb-4 [&_p]:leading-relaxed
                              [&_a]:text-blue-600 [&_a:hover]:underline
                              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
                              [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm
                              [&_pre]:bg-gray-100 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto"
                  />
                )}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default Blog;
