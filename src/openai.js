import { FAQ_PROMPT } from './faqs';

export async function getAssistantResponse(history) {
  const lastUser = [...history].reverse().find((m) => m.role === 'user');
  const text = lastUser?.content?.trim().toLowerCase() || '';
  if (/^(hi|hello|hey|good (morning|afternoon|evening))\b/.test(text)) {
    return 'Hello! How can I assist you with DeviceCare today?';
  }

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OpenAI API key not configured');
  }

  const messages = [
    { role: 'system', content: FAQ_PROMPT },
    ...history,
  ];

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages,
      temperature: 0,
    }),
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  const data = await response.json();
  const answer = data.choices?.[0]?.message?.content;
  return answer || "I'm sorry, that question is out of scope.";
}
