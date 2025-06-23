import { parse as parseYAML } from 'yaml';
import { marked } from 'marked';

const GITHUB_REPO = 'Nethunder03/mon-blog-content';
const BRANCH = 'main';

// Ajouter un cache côté client
const CACHE_TTL = 0; // Désactive le cache temporairement

interface CacheType {
  timestamp: number;
  data: any[] | null; // Allow both array and null
}

let cache: CacheType = {
  timestamp: 0,
  data: null
};

export const getArticles = async (locale: string) => {
  if (Date.now() - cache.timestamp < CACHE_TTL) {
    return cache.data;
  }
  
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/articles?ref=${BRANCH}`
  );
  
  const files = await res.json();
  console.log('GitHub API response:', files);
  const freshData = await Promise.all(
    files
      .filter((file: any) => file.name.endsWith(`.${locale}.md`))
      .map(async (file: any) => {
        const contentRes = await fetch(file.download_url);
        const rawContent = await contentRes.text();
        return parseMarkdown(rawContent);
      })
  );
  cache = { timestamp: Date.now(), data: freshData };
  return freshData;
};

const parseMarkdown = (raw: string) => {
  const [frontmatter, content] = raw.split('---\n').slice(1);
  console.log('Parsing markdown:', { frontmatter, content });
  const fullContent = marked.parse(content.trim());
  
  return {
    ...parseYAML(frontmatter),
    content: fullContent,
    // Ajouter un extrait des 150 premiers caractères
    excerpt: marked.parse(content.trim().substring(0, 150) + '...') 
  };
};

export const getProjects = async (username: string = 'Nethunder03') => {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=6`
    );
    
    const repos = await res.json();
    
    return repos.map((repo: any) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description,
      url: repo.html_url,
      demo: repo.homepage,
      tags: repo.topics,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updated: new Date(repo.updated_at).toLocaleDateString(),
      language: repo.language
    }));
    
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}; 