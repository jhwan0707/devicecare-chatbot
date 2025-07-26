import React from 'react';
import './ChatBubble.css';

function ChatBubble({ message }) {
  const { role, content, timestamp } = message;
  const time = timestamp
    ? new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : null;

  return (
    <div className={`ChatBubble ChatBubble-${role}`}>
      <div>{content}</div>
      {time && (
        <span className="ChatBubble-time" data-testid="timestamp">
          {time}
        </span>
      )}
    </div>
  );
}

export default ChatBubble;
