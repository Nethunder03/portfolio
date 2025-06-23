import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  // Organiser les compétences par catégorie
  const skillCategories = [
    {
      category: 'dataScience',
      title: t('skills.dataScience'),
      icon: 'fas fa-chart-line',
      skills: [
        t('skills.ml'),
        t('skills.dl'),
        t('skills.dataAnalysis'),
        t('skills.pythonTools'),
        t('skills.visualization'),
        t('skills.bigData')
      ]
    },
    {
      category: 'security',
      title: t('skills.networkSecurity'),
      icon: 'fas fa-shield-alt',
      skills: [
        t('skills.systemAdmin'),
        t('skills.networkConfig'),
        t('skills.vpnFirewall'),
        t('skills.systemSecurity'),
        t('skills.vulnerability'),
        t('skills.cloudSecurity')
      ]
    },
    {
      category: 'cyberDefense',
      title: t('skills.cyberDefense'),
      icon: 'fas fa-user-secret',
      skills: [
        t('skills.incidentMgmt'),
        t('skills.penTest'),
        t('skills.audits'),
        t('skills.compliance'),
        t('skills.response'),
        t('skills.riskMgmt')
      ]
    },
    {
      category: 'webDev',
      title: t('skills.webDev'),
      icon: 'fas fa-code',
      skills: [
        t('skills.frontend'),
        t('skills.frameworks'),
        t('skills.backend'),
        t('skills.pythonDjango'),
        t('skills.database'),
        t('skills.api')
      ]
    }
  ];

  return (
    <>
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
                {t('skills.title')} <span className="text-blue-600">{t('skills.highlight')}</span>
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                I've developed a diverse skill set across multiple domains of technology. Here's a comprehensive overview of my technical capabilities.
            </p>
            
            {/* Grille des compétences */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category) => (
                    <div key={category.category} className="skill-card bg-white p-6 rounded-xl shadow-md border border-gray-100 transition duration-300">
                        <div className="text-blue-600 text-4xl mb-4">
                            <i className={category.icon}></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                        <ul className="space-y-2 text-gray-600">
                            {category.skills.map((skill, index) => (
                                <li key={index} className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
            {/* Certifications */}
            <div className="mt-16">
                <h3 className="text-2xl font-semibold text-center mb-8">Certifications & Badges</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center">
                        <img src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-166de0e37d7e/Professional_Certificate_-_Data_Science.png" 
                             alt="IBM Data Science Professional" className="h-16 w-16 object-contain mr-4"/>
                        <div>
                            <h4 className="font-medium">IBM Data Science Professional</h4>
                            <p className="text-sm text-gray-500">2022</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center">
                        <img src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" 
                             alt="Certified Ethical Hacker" className="h-16 w-16 object-contain mr-4"/>
                        <div>
                            <h4 className="font-medium">Certified Ethical Hacker (CEH)</h4>
                            <p className="text-sm text-gray-500">2021</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center">
                        <img src="https://images.credly.com/size/680x680/images/5fc2d535-e716-46c2-9c00-899e6a3a5b0c/AWS-SolArchitect-Associate-2020.png" 
                             alt="AWS Solutions Architect" className="h-16 w-16 object-contain mr-4"/>
                        <div>
                            <h4 className="font-medium">AWS Solutions Architect</h4>
                            <p className="text-sm text-gray-500">2020</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center">
                        <img src="https://images.credly.com/size/680x680/images/2ca245e6-3f23-4aac-b7b9-9929838a9ff4/CISSP.png" 
                             alt="CISSP" className="h-16 w-16 object-contain mr-4"/>
                        <div>
                            <h4 className="font-medium">CISSP</h4>
                            <p className="text-sm text-gray-500">2019</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  );
};

export default Skills;
