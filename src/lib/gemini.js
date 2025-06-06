import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_PUBLICKEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
