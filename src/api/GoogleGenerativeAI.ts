import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.API_KEY || "";
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export { model };
