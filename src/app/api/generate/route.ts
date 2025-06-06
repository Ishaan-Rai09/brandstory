import { NextRequest, NextResponse } from "next/server";
import { generateBrandStory } from "@/lib/llama";

export async function POST(req: NextRequest) {
  try {
    const { prompt, context } = await req.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }
    
    const generatedText = await generateBrandStory(prompt, context);
    
    return NextResponse.json({ 
      text: generatedText 
    });
  } catch (error) {
    console.error("Error in generate route:", error);
    
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
} 