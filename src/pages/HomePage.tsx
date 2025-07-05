import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  
  const heroStyle = {
    position: 'relative' as const,
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
  };
  
  const heroBackgroundStyle = {
    position: 'absolute' as const,
    inset: 0,
    zIndex: 0,
  };
  
  const heroImageStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: "url('https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: theme === 'dark' ? 'overlay' as const : 'normal' as const,
    position: 'relative' as const,
  };
  
  const overlayStyle = {
    position: 'absolute' as const,
    inset: 0,
    backgroundColor: 'black',
    opacity: 0.5,
  };
  
  const heroContentStyle = {
    position: 'relative' as const,
    zIndex: 10,
    color: 'white',
    maxWidth: '800px',
  };
  
  const sectionStyle = {
    padding: '5rem 0',
    backgroundColor: theme === 'dark' ? 'var(--dark-ui)' : 'var(--light-ui)',
  };

  const featureCardStyle = {
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: theme === 'dark' ? 'var(--dark-background)' : 'var(--light-background)',
    transition: 'all 0.3s ease',
  };
  
  const ctaSectionStyle = {
    padding: '5rem 0',
    backgroundColor: 'var(--color-primary)',
    textAlign: 'center' as const,
  };
  
  const primaryButtonStyle = {
    display: 'inline-block',
    backgroundColor: 'var(--color-primary)',
    color: 'black',
    fontWeight: 'bold',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontSize: '1.125rem',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  };
  
  const secondaryButtonStyle = {
    display: 'inline-block',
    backgroundColor: theme === 'dark' ? 'var(--dark-background)' : 'var(--light-background)',
    color: theme === 'dark' ? 'var(--dark-text)' : 'var(--light-text)',
    fontWeight: 'bold',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontSize: '1.125rem',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  };
  
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={heroBackgroundStyle}>
          <div style={heroImageStyle}>
            <div style={overlayStyle}></div>
          </div>
        </div>
        
        <div className="container">
          <div style={heroContentStyle}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Can you recognize the Kings of Ancient Egypt?
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              Explore their legacy using the power of artificial intelligence.
            </p>
            <Link 
              to="/demo" 
              style={primaryButtonStyle}
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" style={sectionStyle}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '4rem' }}>
            Discover KEMIT Features
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {/* Feature 1 */}
            <div style={featureCardStyle}>
              <div style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Tourism & History AI Assistant</h3>
              <p>Chat with our AI assistant for personalized travel help across Egypt — from sightseeing tips and local insights to answering your historical questions about Ancient Egypt and beyond.</p>
            </div>
            
            {/* Feature 2 */}
            <div style={featureCardStyle}>
              <div style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>🖼</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Upload and recognize Egyptian kings</h3>
              <p>Upload images of Egyptian kings and let our AI identify them, providing detailed historical information.</p>
            </div>
            
            {/* Feature 3 */}
            <div style={featureCardStyle}>
              <div style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>📍</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Discover Nearby Attractions</h3>
              <p>Get personalized recommendations for must-visit places in Egypt based on your current location — from hidden gems to iconic landmarks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="services" style={{
        ...sectionStyle, 
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, var(--dark-ui), var(--dark-background))' 
          : 'linear-gradient(135deg, var(--light-ui), var(--light-background))',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '7rem',
        paddingBottom: '7rem'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          right: '5%',
          top: '15%',
          backgroundImage: 'url("https://www.transparentpng.com/thumb/egypt/pyramid-egypt-free-cut-out-6.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: theme === 'dark' ? 0.07 : 0.05,
          zIndex: 0,
        }}></div>
        
        <div style={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          left: '7%',
          bottom: '10%',
          backgroundImage: 'url("https://www.transparentpng.com/thumb/egypt/sphinx-egypt-clipart-8.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: theme === 'dark' ? 0.07 : 0.05,
          zIndex: 0,
        }}></div>
        
        <div className="container">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              textAlign: 'center', 
              marginBottom: '3rem',
              color: 'var(--color-primary)',
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              paddingBottom: '0.75rem',
              textShadow: theme === 'dark' ? '0 2px 10px rgba(0,0,0,0.3)' : 'none',
              letterSpacing: '1px'
            }}>
              Our Services
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '5%', 
                width: '90%', 
                height: '6px', 
                background: 'var(--color-primary)', 
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}></div>
            </h2>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px', 
              margin: '0 auto', 
            }}>
              {/* Service Card 1 - AI-Powered Virtual Tour Guide */}
              <div style={{
                padding: '2.5rem',
                borderRadius: '1.5rem',
                backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                boxShadow: theme === 'dark' 
                  ? '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.05)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '8px',
                  height: '100%',
                  background: 'var(--color-primary)',
                }}></div>
                
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    color: 'var(--color-primary)', 
                    backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    marginBottom: '1.5rem',
                    border: `2px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
                  }}>🧠</div>
                  
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem',
                      color: theme === 'dark' ? 'var(--color-primary)' : '#333'
                    }}>
                      AI-Powered Virtual Tour Guide
                    </h3>
                    <p style={{ 
                      fontSize: '1.125rem', 
                      lineHeight: 1.8,
                      color: theme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)'
                    }}>
                      Users can interact with a chatbot to ask questions about Egypt's history, statues, temples, and more. Offers instant, accurate answers using LLM (Google BERT).
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Service Card 2 - Interactive Image Recognition */}
              <div style={{
                padding: '2.5rem',
                borderRadius: '1.5rem',
                backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                boxShadow: theme === 'dark' 
                  ? '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.05)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '8px',
                  height: '100%',
                  background: 'var(--color-primary)',
                }}></div>
                
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    color: 'var(--color-primary)', 
                    backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    marginBottom: '1.5rem',
                    border: `2px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
                  }}>🖼️</div>
                  
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem',
                      color: theme === 'dark' ? 'var(--color-primary)' : '#333'
                    }}>
                      Interactive Image Recognition
                    </h3>
                    <p style={{ 
                      fontSize: '1.125rem', 
                      lineHeight: 1.8,
                      color: theme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)'
                    }}>
                      Users can upload photos of statues or temples, and the app provides detailed historical and cultural information.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Service Card 3 - Personalized Trip Recommendations */}
              <div style={{
                padding: '2.5rem',
                borderRadius: '1.5rem',
                backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                boxShadow: theme === 'dark' 
                  ? '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.05)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '8px',
                  height: '100%',
                  background: 'var(--color-primary)',
                }}></div>
                
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    color: 'var(--color-primary)', 
                    backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    marginBottom: '1.5rem',
                    border: `2px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
                  }}>📍</div>
                  
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem',
                      color: theme === 'dark' ? 'var(--color-primary)' : '#333'
                    }}>
                      Personalized Trip Recommendations
                    </h3>
                    <p style={{ 
                      fontSize: '1.125rem', 
                      lineHeight: 1.8,
                      color: theme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)'
                    }}>
                      AI generates custom travel plans based on user interests and preferences.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Service Card 4 - Multilingual Support */}
              <div style={{
                padding: '2.5rem',
                borderRadius: '1.5rem',
                backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                boxShadow: theme === 'dark' 
                  ? '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.05)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '8px',
                  height: '100%',
                  background: 'var(--color-primary)',
                }}></div>
                
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    color: 'var(--color-primary)', 
                    backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    marginBottom: '1.5rem',
                    border: `2px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
                  }}>🌍</div>
                  
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem',
                      color: theme === 'dark' ? 'var(--color-primary)' : '#333'
                    }}>
                      Multilingual Support
                    </h3>
                    <p style={{ 
                      fontSize: '1.125rem', 
                      lineHeight: 1.8,
                      color: theme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)'
                    }}>
                      The app supports multiple languages, helping tourists from different backgrounds understand and enjoy their trip.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Service Card 5 - User-Friendly Interface */}
              <div style={{
                padding: '2.5rem',
                borderRadius: '1.5rem',
                backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                boxShadow: theme === 'dark' 
                  ? '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.05)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '8px',
                  height: '100%',
                  background: 'var(--color-primary)',
                }}></div>
                
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    color: 'var(--color-primary)', 
                    backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    marginBottom: '1.5rem',
                    border: `2px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
                  }}>💻</div>
                  
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem',
                      color: theme === 'dark' ? 'var(--color-primary)' : '#333'
                    }}>
                      User-Friendly Interface
                    </h3>
                    <p style={{ 
                      fontSize: '1.125rem', 
                      lineHeight: 1.8,
                      color: theme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)'
                    }}>
                      Clean and intuitive UI design using technologies like Flutter and React.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Service Card 6 - Interactive Maps & Navigation */}
              <div style={{
                padding: '2.5rem',
                borderRadius: '1.5rem',
                backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                boxShadow: theme === 'dark' 
                  ? '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.05)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '8px',
                  height: '100%',
                  background: 'var(--color-primary)',
                }}></div>
                
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    color: 'var(--color-primary)', 
                    backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    marginBottom: '1.5rem',
                    border: `2px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`
                  }}>🗺️</div>
                  
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem',
                      color: theme === 'dark' ? 'var(--color-primary)' : '#333'
                    }}>
                      Interactive Maps & Navigation
                    </h3>
                    <p style={{ 
                      fontSize: '1.125rem', 
                      lineHeight: 1.8,
                      color: theme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)'
                    }}>
                      Includes smart maps with GPS guidance to help tourists navigate Egypt's landmarks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" style={{...sectionStyle, position: 'relative', overflow: 'hidden'}}>
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          right: '-50px',
          top: '10%',
          backgroundImage: 'url("https://www.transparentpng.com/thumb/egypt/egypt-free-download-14.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: 0.05,
          zIndex: 0,
          transform: 'rotate(15deg)'
        }}></div>
        
        <div className="container">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              textAlign: 'center', 
              marginBottom: '3rem',
              color: 'var(--color-primary)',
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              paddingBottom: '0.5rem'
            }}>
              Our Vision
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '10%', 
                width: '80%', 
                height: '4px', 
                background: 'var(--color-primary)', 
                borderRadius: '2px' 
              }}></div>
            </h2>
            
            <div style={{ 
              maxWidth: '800px', 
              margin: '0 auto', 
              padding: '2.5rem',
              borderRadius: '1rem',
              backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.7)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--color-primary)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem'
              }}>👁️</div>
              
              <p style={{ fontSize: '1.25rem', lineHeight: 1.8, fontStyle: 'italic' }}>
                "To empower people worldwide to connect deeply with the fascinating history of Ancient Egypt through cutting-edge AI technology, making cultural heritage accessible, engaging, and personalized for every traveler and history enthusiast."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" style={{...sectionStyle, position: 'relative', overflow: 'hidden', background: theme === 'dark' ? 'linear-gradient(to top, var(--dark-ui), var(--dark-background))' : 'linear-gradient(to top, var(--light-ui), var(--light-background))'}}>
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          left: '-50px',
          bottom: '10%',
          backgroundImage: 'url("https://www.transparentpng.com/thumb/egypt/ancient-egypt-png-transparent-image--0.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: 0.05,
          zIndex: 0,
          transform: 'rotate(-15deg)'
        }}></div>
        
        <div className="container">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              textAlign: 'center', 
              marginBottom: '3rem',
              color: 'var(--color-primary)',
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              paddingBottom: '0.5rem'
            }}>
              Our Mission
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '10%', 
                width: '80%', 
                height: '4px', 
                background: 'var(--color-primary)', 
                borderRadius: '2px' 
              }}></div>
            </h2>
            
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '800px', 
              margin: '0 auto', 
              padding: '2.5rem',
              borderRadius: '1rem',
              backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.7)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
            }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{ 
                  backgroundColor: 'var(--color-primary)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.75rem',
                  marginRight: '1rem',
                  color: 'black'
                }}>🚀</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Innovation & Accessibility</h3>
              </div>
              
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, textAlign: 'center' }}>
                To develop innovative AI-driven tools that provide personalized, accurate, and interactive experiences centered on Egypt's ancient kings and landmarks, fostering a deeper appreciation and understanding of Egypt's timeless legacy for users around the globe.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black', marginBottom: '1.5rem' }}>
            Ready to explore Ancient Egypt?
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'black', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Start your journey through the fascinating world of Ancient Egyptian kings and their remarkable legacy.
          </p>
          <Link 
            to="/demo" 
            style={secondaryButtonStyle}
          >
            Try Demo Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
