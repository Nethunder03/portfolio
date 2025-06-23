import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { getProjects } from "../../services/githubCMS";
import clientProjects from '../../data/clientProjects';
import ConfidentialBadge from "../../components/ConfidentialBadge";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [projects, setProjects] = useState<any[]>([]);
  // const [clientProjectsData, setClientProjects] = useState<ClientProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const githubProjects = await getProjects();
      setProjects([...githubProjects, ...clientProjects]);
      // setClientProjects(clientProjects);
      setLoading(false);
    };
    
    loadData();
  }, []);

  const personalProjects = projects.filter(p => !p.client);
  const clientProjectsDisplay = projects.filter(p => p.client);

  // const filteredProjects = activeFilter === 'all' 
  //   ? projects 
  //   : projects.filter(project => 
  //       project.tags?.some((tag: string) => tag === activeFilter)
  //     );

  const filters = [
    { id: 'all', label: t('projects.all') },
    { id: 'client', label: t('projects.clientWork') },
    { id: 'data-science', label: t('projects.dataScience') },
    { id: 'cybersecurity', label: t('projects.cybersecurity') },
    { id: 'web-dev', label: t('projects.webDev') },
    { id: 'networking', label: t('projects.networking') },
  ];

  if (loading) {
    return <div className="text-center py-20">{t('projects.loading')}</div>;
  }

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t('projects.title')} <span className="text-blue-600">{t('projects.highlight')}</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          {t('projects.description')}
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`project-filter px-4 py-2 rounded-full bg-blue-600 text-whitetransition-colors ${
                activeFilter === filter.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Section Projets Clients */}
        {activeFilter !== 'personal' && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                <i className="fas fa-briefcase mr-2 text-blue-600"></i>
                {t('projects.clientWork')}
              </h3>
              <span className="badge bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {clientProjectsDisplay.length} {t('projects.projects')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clientProjectsDisplay.map(project => (
                <div key={project.id} className="client-project bg-white rounded-xl shadow-lg border border-blue-100">
                  <ConfidentialBadge />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {t('projects.clientWork')}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                        {project.domain}
                      </span>
                    </div>

                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>
                        {t('projects.visitSite')}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section Projets Personnels */}
        {activeFilter !== 'client' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                <i className="fas fa-code mr-2 text-green-600"></i>
                {t('projects.personal')}
              </h3>
              <span className="badge bg-green-100 text-green-800 px-3 py-1 rounded-full">
                {personalProjects.length} {t('projects.projects')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map(project => (
                <div key={project.id} className="personal-project bg-white rounded-xl shadow-lg border border-green-100">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                        {project.domain}
                      </span>
                    </div>

                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>
                        {t('projects.visitSite')}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
