import { useState, useCallback } from 'react';

/**
 * Gemini Q&A hook for the updated topic in NoiDung.md.
 */
export const useGeminiQA = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [answer, setAnswer] = useState<string | null>(null);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
    const model = 'gemini-2.5-flash-lite';

    const systemPrompt = `You are an AI assistant for Marxism-Leninism political economy.

BASE CONTENT:
- Industry 4.0 creates productivity breakthroughs and also causes technology disruption.
- Technology disruption widens gaps between countries, firms, and regions.
- In Vietnam, industrialization and modernization (CNH, HĐH) are objective requirements to build a modern productive base.
- Positive effects: chance to leapfrog, economic restructuring, AI/Big Data/IoT adoption.
- Negative effects: erosion of traditional low-cost advantages, unemployment pressure, income inequality.
- Objective requirement: tie CNH, HĐH to innovation, digital transformation, knowledge economy, and high-quality human resources.
- Key actions: innovation institutions, digital infrastructure, education reform, talent attraction.

ANSWERING RULES:
1. Answer only based on the content above.
2. Use Vietnamese language.
3. If outside scope, respond exactly: "Xin lỗi, tôi không có thông tin về chủ đề này trong cơ sở dữ liệu hiện có."
4. Keep answers clear and educational.`;

    const ask = useCallback(async (question: string) => {
        if (!apiKey) {
            setError('VITE_GEMINI_API_KEY không được cấu hình trong .env');
            return null;
        }

        setLoading(true);
        setError(null);
        setAnswer(null);

        try {
            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
            const prompt = `${systemPrompt}\n\nUser: ${question}`;

            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [
                        { role: 'user', parts: [{ text: prompt }] }
                    ],
                    generationConfig: {
                        temperature: 0.2,
                        topP: 0.95,
                        maxOutputTokens: 10000
                    }
                })
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Gemini API error ${res.status}: ${text}`);
            }

            const data = await res.json();
            const text: string | undefined = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!text) {
                throw new Error('Không nhận được phản hồi từ Gemini');
            }

            const apology = 'Xin lỗi, tôi không có thông tin về chủ đề này trong cơ sở dữ liệu hiện có.';
            if (text.trim() === apology) {
                setAnswer(null);
                setError(apology);
                return null;
            }

            setAnswer(text.trim());
            return text.trim();
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Có lỗi xảy ra khi kết nối với Gemini';
            setError(msg);
            setAnswer(null);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [apiKey]);

    const clearAnswer = useCallback(() => {
        setAnswer(null);
        setError(null);
    }, []);

    return { loading, error, answer, ask, clearAnswer, hasApiConfig: !!apiKey };
};
