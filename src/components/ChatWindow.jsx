
import React, { useState, useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import MessageInput from './MessageInput';
import SupportLink from './SupportLink';

import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import MessageInput from './MessageInput';

import { getAssistantResponse } from '../openai';
import '../ChatWindow.css';

function ChatWindow() {

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
    if (messagesEndRef.current && typeof messagesEndRef.current.scrollIntoView === 'function') {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async (text) => {
    const userMessage = { role: 'user', content: text, timestamp: new Date().toISOString() };

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    const userMessage = { role: 'user', content: text };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    try {
      const response = await getAssistantResponse([...messages, userMessage]);

      const outOfScope = response.toLowerCase().includes('out of scope');
      const assistantMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date().toISOString(),
        outOfScope,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'There was an error contacting the assistant.',
          timestamp: new Date().toISOString(),
        },

      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'There was an error contacting the assistant.' },

      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ChatWindow">
      <div className="ChatMessages">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} message={msg} />
        ))}

        {loading && <ChatBubble message={{ role: 'assistant', content: '...' }} />}
        <div ref={messagesEndRef} />
      </div>
      {messages[messages.length - 1]?.outOfScope && <SupportLink />}

        {loading && <ChatBubble message={{ role: 'assistant', content: '...'}} />}
      </div>

      <MessageInput onSend={handleSend} />
    </div>
  );
}

export default ChatWindow;
