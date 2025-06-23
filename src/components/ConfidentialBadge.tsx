import { useTranslation } from 'react-i18next';

const ConfidentialBadge: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="absolute top-2 right-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
      <i className="fas fa-lock mr-1"></i>
      {t('projects.confidential')}
    </div>
  );
};

export default ConfidentialBadge; 