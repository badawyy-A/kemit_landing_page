import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface RecognitionResult {
  king_name: string;
  description: string;
  video_path: string;
}

const VisionTab: React.FC = () => {
  const { theme } = useTheme();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<RecognitionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en'); // New state for selected language

  const fileInputRef = useRef<HTMLInputElement>(null);

  const languageOptions = [
    { label: 'English', code: 'en' },
    { label: 'Spanish', code: 'es' },
    { label: 'French', code: 'fr' },
    { label: 'German', code: 'de' },
    { label: 'Arabic', code: 'ar' },
    { label: 'Japanese', code: 'ja' },
    { label: 'Chinese', code: 'zh' },
  ];

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  const handleFileUpload = async (file: File) => {
    if (!file.type.match('image.*')) {
      setError('Please upload an image file (JPG, JPEG, or PNG)');
      return;
    }
    setError(null);
    setResult(null);
    setIsLoading(true);
    setSelectedFile(file);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('lang', selectedLanguage); // Use the selected language

    try {
      const response = await fetch('https://1c09-156-196-50-227.ngrok-free.app/cnn_model/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to upload image');
      }

      const data: RecognitionResult = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // --- Styles ---
  const chatContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '600px', // Fixed height for the chat area
    backgroundColor: theme === 'dark' ? 'var(--dark-ui)' : 'var(--light-ui)',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  };

  const chatHeaderStyle = {
    padding: '1rem',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    backgroundColor: 'var(--color-primary)',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Added to space out title and dropdown
  };

  const chatIconStyle = {
    fontSize: '1.5rem',
    marginRight: '0.75rem',
  };

  const chatMessagesStyle = {
    flexGrow: 1,
    padding: '1.5rem', // Base padding
    overflowY: 'auto' as const,
    backgroundImage: theme === 'dark'
      ? 'url("https://www.transparenttextures.com/patterns/black-paper.png")'
      : 'url("https://www.transparenttextures.com/patterns/papyrus.png")',
    backgroundBlendMode: 'overlay',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center', // Centers content vertically when not enough content to fill
    alignItems: 'center', // Centers content horizontally
  };

  const uploadContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    border: `2px dashed ${isDragging ? 'var(--color-primary)' : theme === 'dark' ? '#444' : '#ddd'}`,
    borderRadius: '1rem',
    backgroundColor: theme === 'dark' ? 'rgba(31, 31, 31, 0.5)' : 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    maxWidth: '400px',
    width: '100%',
    transition: 'all 0.3s ease',
  };

  const uploadIconStyle = {
    fontSize: '3rem',
    color: 'var(--color-primary)',
    marginBottom: '1rem',
  };

  const uploadButtonStyle = {
    backgroundColor: 'var(--color-primary)',
    color: 'black',
    border: 'none',
    borderRadius: '2rem',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginTop: '1rem',
  };

  const resultContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    width: '100%',
    maxWidth: '800px', // Overall max width for the results content
    alignItems: 'center', // Centers content horizontally within its maxWidth
    marginTop: '8rem', // Crucial for pushing content down from the header
    paddingTop: '0.5rem', // Add a little extra padding inside if needed, or adjust marginTop
  };

  const resultCardStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: theme === 'dark' ? 'rgba(31, 31, 31, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    width: '100%', // Takes full width of resultContainerStyle's maxWidth
  };

  const resultContentStyle = {
    padding: '1.5rem',
  };

  // Ensure responsive video styling on the video container itself
  const videoWrapperStyle = {
    position: 'relative' as const,
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    maxWidth: '700px', // Max width for the video element
    width: '50%', // Make it responsive to its parent
    alignSelf: 'center', // Centers the video wrapper itself
    marginTop: '2rem', // Space between video and text below it
    marginBottom: '1rem', // Space between video and text below it
    // Removed marginTop here, as it's now handled by resultContainerStyle
  };

  const dropdownStyle = {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '0.9rem',
    cursor: 'pointer',
  };

  return (
    <div style={chatContainerStyle}>
      <div style={chatHeaderStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={chatIconStyle}>🔍</span>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Who is the King in Your Image?</h2>
        </div>
        <select
          style={dropdownStyle}
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {languageOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div style={chatMessagesStyle}>
        {!selectedFile ? (
          <div
            style={uploadContainerStyle}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClickUpload}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              accept="image/jpeg,image/png,image/jpg"
              style={{ display: 'none' }}
            />
            <div style={uploadIconStyle}>🖼️</div>
            <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Drag and drop an image here</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.7 }}>or</p>
            <button style={uploadButtonStyle}>Upload Image</button>
            <p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.6 }}>
              Supported formats: JPG, JPEG, PNG
            </p>
          </div>
        ) : (
          <div style={resultContainerStyle}> {/* This container now applies the top margin */}
            {isLoading ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2rem',
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  border: '4px solid var(--color-primary)',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}></div>
                <p style={{ marginTop: '1rem' }}>Analyzing your image...</p>
              </div>
            ) : error ? (
              <div style={{
                backgroundColor: 'rgba(255,0,0,0.1)',
                color: '#d32f2f',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1.5rem',
                textAlign: 'center' as const,
              }}>
                <p>{error}</p>
                <button
                  onClick={resetUpload}
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'black',
                    border: 'none',
                    borderRadius: '0.5rem',
                    padding: '0.5rem 1rem',
                    marginTop: '1rem',
                    cursor: 'pointer',
                  }}
                >
                  Try Again
                </button>
              </div>
            ) : result ? (
              <div style={resultCardStyle}>
                <div style={videoWrapperStyle}> {/* Using the dedicated videoWrapperStyle */}
                  <video
                    controls
                    src={result.video_path}
                    style={{ width: '100%', height: 'auto', display: 'block' }} // These are key for responsiveness
                    preload="auto"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={resetUpload}
                    style={{
                      position: 'absolute' as const,
                      top: '0.5rem',
                      right: '0.5rem',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '2rem',
                      height: '2rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    ✕
                  </button>
                </div>
                <div style={resultContentStyle}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: theme === 'dark' ? 'white' : 'black', marginBottom: '0.5rem', textAlign: 'center' as const }}>
                    👑 {result.king_name}
                  </h3>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ marginRight: '0.5rem' }}>📜</span> Historical Description:
                  </h4>
                  <p style={{ lineHeight: 1.6, textAlign: 'justify' as const }}>{result.description}</p>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default VisionTab;