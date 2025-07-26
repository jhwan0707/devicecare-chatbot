import React from 'react';
import './ChatBubble.css';

function ChatBubble({ message }) {
  const { role, content } = message;
  return (
    <div className={`ChatBubble ChatBubble-${role}`}>{content}</div>
  );
}

export default ChatBubble;
