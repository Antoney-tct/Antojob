import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

// IMPORTANT: Set the OPENAI_API_KEY environment variable in your Vercel project settings.
const openai = createOpenAI();

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages,
    // A simple system prompt to guide the AI
    system: `You are a helpful assistant for a portfolio website. Your name is Antoney's Assistant. You should answer questions about Antoney's skills, projects, and experience based on the context of a portfolio. Be friendly and professional.`,
  });

  return result.toAIStreamResponse();
}