import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ] as const;

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="language-selector" style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'rgba(248, 246, 240, 0.1)',
          border: '1px solid rgba(248, 246, 240, 0.3)',
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          color: 'var(--limestone-white)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.9rem',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(248, 246, 240, 0.2)';
          e.currentTarget.style.borderColor = 'var(--limestone-white)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(248, 246, 240, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(248, 246, 240, 0.3)';
        }}
      >
        <span>{currentLanguage?.flag}</span>
        <span>{currentLanguage?.code.toUpperCase()}</span>
        <span style={{ fontSize: '0.7rem' }}>▼</span>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '0.5rem',
            background: 'rgba(26, 37, 47, 0.95)',
            border: '1px solid rgba(248, 246, 240, 0.3)',
            borderRadius: '8px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            zIndex: 1000,
            minWidth: '150px',
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'transparent',
                border: 'none',
                color: language === lang.code ? 'var(--mist-blue)' : 'var(--limestone-white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                borderRadius: language === lang.code ? '6px' : '0',
                margin: language === lang.code ? '2px' : '0',
              }}
              onMouseEnter={(e) => {
                if (language !== lang.code) {
                  e.currentTarget.style.background = 'rgba(248, 246, 240, 0.1)';
                  e.currentTarget.style.color = 'var(--mist-blue)';
                }
              }}
              onMouseLeave={(e) => {
                if (language !== lang.code) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--limestone-white)';
                }
              }}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && <span style={{ marginLeft: 'auto', fontSize: '0.8rem' }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;