import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are NixBot, the AI assistant for Nixsoft Technologies. 
Your goal is to help CIOs, CISOs, and IT leaders understand Nixsoft's value proposition.

Key Information about Nixsoft:
- **Positioning:** Open-Source First, Automation-Driven, Security-Focused.
- **Audience:** B2B Enterprise (BFSI, Telecom, Retail, Manufacturing).
- **Core Services:** DevOps, Cloud Migration, Security (CIS/VAPT), Database Management.
- **Products:** VulnGuard™ (Vulnerability mgmt), NixOps AI Agents (Self-healing infra).
- **Key Differentiators:** We reduce TCO using open source, we automate everything, and we are security-obsessed.
- **Contact:** Urge them to click "Talk to an Expert" for complex queries.

Behavior:
- Keep answers professional, concise, and business-oriented.
- Use a helpful, confident tone.
- If asked about pricing, suggest booking a consultation.
- If asked about technical support, direct them to the contact page.
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently in demo mode (API Key missing). I can tell you that Nixsoft specializes in Open-Source Automation and Security!";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history // Pass previous conversation context
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the knowledge base. Please try again or contact our team directly.";
  }
};
