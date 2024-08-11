import { GoogleGenerativeAI } from "@google/generative-ai";


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API);

// The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

