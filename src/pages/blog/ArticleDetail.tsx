import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../services/githubCMS";
import { useTranslation } from 'react-i18next';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    getArticles(i18n.language)
      .then(articles => {
        const foundArticle = articles?.find(a => a.slug === slug);
        setArticle(foundArticle);
      })
      .catch(console.error);
  }, [slug, i18n.language]);

  if (!article) return <div className="text-center py-20">Chargement...</div>;

  return (
    <article className="max-w-4xl mx-auto px-4 py-20">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </article>
  );
};

export default ArticleDetail; 