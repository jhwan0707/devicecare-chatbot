# DeviceCare Chatbot

This project provides a simple React client that connects to OpenAI's GPT‑4 Assistants API to answer DeviceCare FAQs. If a user's question is not covered by the FAQ data, the assistant responds that the question is out of scope.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root with your OpenAI API key:
   ```bash
   REACT_APP_OPENAI_API_KEY=your-key-here
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## FAQ Integration

The FAQ text is stored in `src/faqs.js` and provided to the GPT‑4 model in every request via the system prompt.
