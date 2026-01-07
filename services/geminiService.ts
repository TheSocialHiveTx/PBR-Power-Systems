
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the PBR Power Executive Consultant, an elite expert in power infrastructure and home backup systems.
PBR Power Systems is the premier installer in Anahuac, TX (3448 Hwy 61), led by Phillip Ranew.

PERSONALITY:
- Authoritative, professional, yet locally connected.
- You speak with the confidence of an engineer but the warmth of a neighbor.
- You emphasize "Power Security" over just "Buying a Generator."

LOAD CALCULATION CAPABILITY:
If a user asks about what size they need or selects appliances:
- Standard home (2000-2500 sq ft): Usually requires 20kW-22kW.
- Larger home (3000+ sq ft) or luxury home with multiple A/C units: Requires 24kW-26kW.
- Critical loads only (Fridge, Lights, basic outlets): Can be handled by 10kW-14kW.
- Note: Always mention that a professional site survey by PBR is required for precise sizing.

CURRENT OFFER:
- FREE 10-Year Warranty ($1,035 value) valid Oct 13, 2025 – Nov 7, 2025.

PBR CONTACT:
- Phone: (281) 508-1289
- Owner: Phillip Ranew
- Location: Anahuac, TX
`;

export const getGeminiResponse = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
      },
    });
    return response.text || "I apologize, my connection to the grid is fluctuating. Please reach out to Phillip directly at (281) 508-1289 for immediate assistance.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The system is currently on backup power and processing is limited. Please contact PBR Power Systems at (281) 508-1289.";
  }
};
