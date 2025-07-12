import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatbotTab: React.FC = () => {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your virtual Egyptian historian. Ask me anything about Ancient Egypt and its kings!",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null); // no longer used but harmless

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://006f3af952ed.ngrok-free.app/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputMessage })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Unknown error');
      }

      const data = await response.json();
      const fullAiResponseText = data.text;

      const initialAiMessage: Message = {
        id: messages.length + 2,
        text: '',
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, initialAiMessage]);

      const words = fullAiResponseText.split(' ');
      let currentDisplayedText = '';
      for (let i = 0; i < words.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        currentDisplayedText += (i > 0 ? ' ' : '') + words[i];
        setMessages(prevMessages => {
          const newMessages = [...prevMessages];
          const aiMsgToUpdate = newMessages.find(msg => msg.id === initialAiMessage.id);
          if (aiMsgToUpdate) {
            aiMsgToUpdate.text = currentDisplayedText;
          }
          return newMessages;
        });
      }

      setIsLoading(false);

    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);

      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Sorry, I couldn't process your request. Please try again later.",
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const chatContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '600px',
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
  };

  const chatIconStyle = {
    fontSize: '1.5rem',
    marginRight: '0.75rem',
  };

  const chatMessagesStyle = {
    flexGrow: 1,
    padding: '1.5rem',
    overflowY: 'auto' as const,
    backgroundImage: theme === 'dark' 
      ? 'url("https://www.transparenttextures.com/patterns/black-paper.png")' 
      : 'url("https://www.transparenttextures.com/patterns/papyrus.png")',
    backgroundBlendMode: 'overlay',
  };

  const chatInputContainerStyle = {
    padding: '1rem',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    backgroundColor: theme === 'dark' ? 'var(--dark-background)' : 'var(--light-background)',
  };

  const chatFormStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const chatInputStyle = {
    flexGrow: 1,
    padding: '0.75rem 1rem',
    borderRadius: '2rem',
    border: `1px solid ${theme === 'dark' ? '#444' : '#ddd'}`,
    backgroundColor: theme === 'dark' ? 'var(--dark-background)' : 'var(--light-background)',
    color: theme === 'dark' ? 'var(--dark-text)' : 'var(--light-text)',
    outline: 'none',
    marginRight: '0.75rem',
  };

  const sendButtonStyle = {
    backgroundColor: 'var(--color-primary)',
    color: 'black',
    border: 'none',
    borderRadius: '50%',
    width: '2.5rem',
    height: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: isLoading || !inputMessage.trim() ? 0.5 : 1,
  };

  return (
    <div style={chatContainerStyle}>
      <div style={chatHeaderStyle}>
        <span style={chatIconStyle}>👑</span>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Chat with an Ancient Egyptian Historian</h2>
      </div>

      <div style={chatMessagesStyle}>
        {messages.map((message) => {
          const isUser = message.sender === 'user';
          const messageBubbleStyle = {
            maxWidth: '80%',
            padding: '1rem',
            borderRadius: isUser ? '1.25rem 1.25rem 0 1.25rem' : '1.25rem 1.25rem 1.25rem 0',
            backgroundColor: isUser 
              ? 'var(--color-primary)' 
              : theme === 'dark' ? 'rgba(31, 31, 31, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            color: isUser ? 'black' : theme === 'dark' ? 'var(--dark-text)' : 'var(--light-text)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginBottom: '1rem',
            alignSelf: isUser ? 'flex-end' : 'flex-start',
          };

          const timeStyle = {
            fontSize: '0.75rem',
            opacity: 0.7,
            marginTop: '0.5rem',
            textAlign: isUser ? 'right' as const : 'left' as const,
          };

          return (
            <div 
              key={message.id} 
              style={{
                display: 'flex',
                justifyContent: isUser ? 'flex-end' : 'flex-start',
                marginBottom: '1rem',
              }}
            >
              {!isUser && (
                <div style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--color-primary)',
                  marginRight: '0.75rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '1.25rem' }}>🧠</span>
                </div>
              )}
              <div style={messageBubbleStyle}>
                <p style={{ lineHeight: 1.5 }}>{message.text}</p>
                <div style={timeStyle}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
              {isUser && (
                <div style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  borderRadius: '50%', 
                  backgroundColor: '#888',
                  marginLeft: '0.75rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '1rem', color: 'white' }}>👤</span>
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: '1rem',
          }}>
            <div style={{ 
              width: '2.5rem', 
              height: '2.5rem', 
              borderRadius: '50%', 
              backgroundColor: 'var(--color-primary)',
              marginRight: '0.75rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '1.25rem' }}>🧠</span>
            </div>
            <div style={{
              padding: '1rem',
              borderRadius: '1.25rem 1.25rem 1.25rem 0',
              backgroundColor: theme === 'dark' ? 'rgba(31, 31, 31, 0.8)' : 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--color-primary)', animation: 'bounce 1s infinite' }}></div>
                <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--color-primary)', animation: 'bounce 1s infinite', animationDelay: '0.2s' }}></div>
                <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--color-primary)', animation: 'bounce 1s infinite', animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div style={chatInputContainerStyle}>
        <form onSubmit={handleSendMessage} style={chatFormStyle}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about Ancient Egyptian kings..."
            style={chatInputStyle}
            disabled={isLoading}
          />
          <button
            type="submit"
            style={sendButtonStyle}
            disabled={isLoading || !inputMessage.trim()}
          >
            <span style={{ fontSize: '1.25rem' }}>➤</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotTab;
