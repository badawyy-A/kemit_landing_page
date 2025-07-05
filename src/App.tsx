import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh',
  };
  
  const mainStyle = {
    flexGrow: 1,
  };
  
  return (
    <ThemeProvider>
      <Router>
        <div style={appStyle}>
          <Header />
          <main style={mainStyle}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/demo" element={<DemoPage />} />
              {/* Add more routes as needed */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
