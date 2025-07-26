# DeviceCare Chatbot

This project provides a simple React client that connects to OpenAI's GPT‑4 Assistants API to answer DeviceCare FAQs. If a user's question is not covered by the FAQ data, the assistant responds that the question is out of scope.

<img width="1728" height="956" alt="Screenshot 2025-07-26 at 2 30 18 PM" src="https://github.com/user-attachments/assets/1f2c4a7e-9e13-4a3c-ac8f-17fd6905240b" />

## Setup

First, clone this repository to your local machine and enter the project folder:
```bash
git clone https://github.com/jhwan0707/devicecare-chatbot.git
cd devicecare-chatbot
```

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
4. Open http://localhost:3000 to view the chatbot. (Should be automatic, but if fail, open URL in browser)

## FAQ Integration

The file `src/faqs.js` contains the DeviceCare FAQ text. This string is sent as a system prompt in `src/openai.js` so the assistant answers questions only using that information. If a question doesn't relate to the FAQs, the API response falls back to an "out of scope" message.

## Deployment

Create an optimized build that can be uploaded to any static host:

```bash
npm run build
```

The compiled files will be placed in the `build/` directory. You can preview them locally with:

```bash
npx serve -s build
```

Copy the `build/` directory to your preferred hosting service (GitHub Pages, Netlify, Vercel, etc.) to deploy the chatbot.

## Features

- Chat history persists in the browser so conversations are not lost on refresh.
- Messages display timestamps for better context.
- When a question is out of scope, the app suggests contacting live support via email.
- Polished pastel design with rounded message bubbles for a friendlier look.
- Friendly greetings like "hello" receive a polite response instead of an out-of-scope warning.
