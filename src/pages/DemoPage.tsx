import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import ChatbotTab from '../tabs/ChatbotTab';
import VisionTab from '../tabs/VisionTab';

type TabType = 'chatbot' | 'vision';

const DemoPage: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<TabType>('chatbot');

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: theme === 'dark' ? 'var(--dark-background)' : 'var(--light-background)',
    color: theme === 'dark' ? 'var(--dark-text)' : 'var(--light-text)',
    overflowX: 'hidden',
  };

  const containerStyle: React.CSSProperties = {
    padding: '3rem 0',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '3rem',
    textAlign: 'center',
    color: 'var(--color-primary)',
    textShadow: theme === 'dark' ? '0 2px 4px rgba(0,0,0,0.5)' : 'none',
  };

  const tabsContainerStyle: React.CSSProperties = {
    maxWidth: '1024px',
    margin: '0 auto 2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  };

  const getTabStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '1rem 2rem',
    fontWeight: 'bold',
    color: isActive ? '#000' : theme === 'dark' ? '#fff' : '#000',
    backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
    border: isActive ? 'none' : `2px solid ${theme === 'dark' ? '#333' : '#ddd'}`,
    borderRadius: '2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    boxShadow: isActive ? '0 4px 8px rgba(0,0,0,0.2)' : 'none',
  });

  const contentContainerStyle: React.CSSProperties = {
    maxWidth: '1024px',
    margin: '2rem auto',
  };

  const decorationStyle: React.CSSProperties = {
    position: 'absolute',
    top: '15%',
    left: '5%',
    width: '150px',
    height: '150px',
    backgroundImage: 'url("https://www.transparentpng.com/thumb/egypt/ancient-egypt-png-transparent-image--0.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    opacity: 0.1,
    zIndex: 0,
  };

  const decoration2Style: React.CSSProperties = {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: '200px',
    height: '200px',
    backgroundImage: 'url("https://www.transparentpng.com/thumb/egypt/egypt-free-download-14.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    opacity: 0.1,
    zIndex: 0,
  };

  return (
    <div style={pageStyle}>
      <div style={decorationStyle}></div>
      <div style={decoration2Style}></div>

      <div className="container" style={containerStyle}>
        <h1 style={titleStyle}>KEMIT AI Interactive Demo</h1>

        {/* Tabs */}
        <div style={tabsContainerStyle}>
          <button
            style={getTabStyle(activeTab === 'chatbot')}
            onClick={() => setActiveTab('chatbot')}
          >
            <span style={{ marginRight: '0.5rem' }}>💬</span>
            Chat with an Ancient Egyptian Historian
          </button>
          <button
            style={getTabStyle(activeTab === 'vision')}
            onClick={() => setActiveTab('vision')}
          >
            <span style={{ marginRight: '0.5rem' }}>🖼️</span>
            Who is the King in Your Image?
          </button>
        </div>

        {/* Tab Content */}
        <div style={contentContainerStyle}>
          {activeTab === 'chatbot' ? <ChatbotTab /> : <VisionTab />}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
