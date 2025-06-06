import { delay } from "./utils";

// Interface for chat message
export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

// Interface for chat completion options
export interface ChatCompletionOptions {
  messages: ChatMessage[];
  temperature?: number;
  maxTokens?: number;
}

// Interface for chat completion response
export interface ChatCompletionResponse {
  id: string;
  choices: {
    message: {
      role: string;
      content: string;
    };
    index: number;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

/**
 * Generate text using Llama 4 via Groq API
 */
export async function generateText(options: ChatCompletionOptions): Promise<string> {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    
    if (!apiKey) {
      throw new Error("GROQ_API_KEY is not defined in environment variables");
    }
    
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages: options.messages,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.maxTokens ?? 1000,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Groq API error: ${errorData.error?.message || response.statusText}`);
    }
    
    const data = await response.json() as ChatCompletionResponse;
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating text:", error);
    throw error;
  }
}

/**
 * Generate brand story using Llama 4
 */
export async function generateBrandStory(prompt: string, context?: string): Promise<string> {
  const systemMessage = `You are an expert brand storyteller and marketer. Create compelling, authentic brand narratives 
  that resonate with the target audience. Focus on creating emotional connections through storytelling.`;
  
  const messages: ChatMessage[] = [
    { role: "system", content: systemMessage },
  ];
  
  if (context) {
    messages.push({ role: "user", content: `Context information: ${context}` });
    messages.push({ role: "assistant", content: "Thank you for providing the context. I'll use this to craft a compelling brand story." });
  }
  
  messages.push({ role: "user", content: prompt });
  
  return generateText({ messages });
} 