import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import MessageInput from './MessageInput';
import { getAssistantResponse } from '../openai';
import '../ChatWindow.css';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    try {
      const response = await getAssistantResponse([...messages, userMessage]);
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
        {loading && <ChatBubble message={{ role: 'assistant', content: '...'}} />}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
}

export default ChatWindow;
