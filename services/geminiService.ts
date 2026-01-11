
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `你是一位专业且充满热情的游戏开发导师，专门针对“纯新手小白”提供咨询。
你的任务是：
1. 鼓励用户：游戏开发并不像想象中那么难。
2. 提供实用建议：推荐具体的引擎（如Godot, Unity, GameMaker, Scratch）并解释原因。
3. 规划路径：告诉他们第一步该做什么，第二步做什么。
4. 语言通俗：避免过度使用深奥的术语，如果使用了，请给出解释。
5. 回答要点：请使用 Markdown 格式，多用列表和加粗。
6. 对于特定的游戏创意，给出实现难度的评估（1-10分）。`;

export const getGeminiResponse = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，我现在遇到了一点技术问题。请稍后再试，或者查看下方的推荐引擎。";
  }
};
