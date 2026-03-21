import { useState, useCallback } from 'react';

export interface PracticeQuestion {
    id: number;
    question: string;
    options: string[];
    answer: string;
    type?: 'concept' | 'application' | 'analysis';
}

export interface QuestionWithType extends PracticeQuestion {
    type?: 'concept' | 'application' | 'analysis';
}

/**
 * Hook for generating multiple-choice practice questions from NoiDung.md topic.
 */
export const useGeminiPractice = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [questions, setQuestions] = useState<PracticeQuestion[]>([]);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
    const model = 'gemini-2.5-flash-lite';

    const systemPrompt = `You are an expert in Marxism-Leninism political economy education.
Create exactly 10 Vietnamese multiple-choice questions from this topic:
- CNH, HĐH ở Việt Nam
- Tác động hai mặt của tiến bộ công nghệ và đứt gãy công nghệ
- Yêu cầu gắn CNH, HĐH với đổi mới sáng tạo, chuyển đổi số, nhân lực chất lượng cao

Return ONLY valid JSON array. No markdown.
Each item must have:
- id: number
- question: string
- options: ["A. ...", "B. ...", "C. ...", "D. ..."]
- answer: "A" | "B" | "C" | "D"
- type: "concept" | "application" | "analysis"`;

    const noiDungContent = `MỞ ĐẦU:
Cách mạng công nghiệp lần thứ tư tạo bước nhảy vọt về năng suất, nhưng gây đứt gãy công nghệ giữa quốc gia, doanh nghiệp, khu vực.

1. CƠ SỞ LÝ LUẬN:
- CNH là quá trình chuyển từ lao động thủ công sang máy móc.
- Ở Việt Nam, CNH, HĐH là chuyển đổi toàn diện sản xuất, dịch vụ, quản lý trên nền tảng công nghệ hiện đại.
- CNH, HĐH là quy luật phát triển lực lượng sản xuất và là cơ sở vật chất - kỹ thuật cho phát triển.

2. TÁC ĐỘNG HAI MẶT:
- Tích cực: mở cơ hội đi tắt đón đầu, thúc đẩy chuyển dịch cơ cấu kinh tế, ứng dụng AI/Big Data/IoT.
- Tiêu cực: mất lợi thế truyền thống, nới rộng khoảng cách phát triển, tăng nguy cơ thất nghiệp và bất bình đẳng.

3. YÊU CẦU KHÁCH QUAN:
- Gắn CNH, HĐH với đổi mới sáng tạo và kinh tế tri thức.
- Đẩy mạnh chuyển đổi số, xây dựng hạ tầng công nghệ thông tin - truyền thông.
- Phát triển nguồn nhân lực chất lượng cao, đổi mới giáo dục, thu hút nhân tài.

KẾT LUẬN:
Đổi mới sáng tạo, công nghệ số và nhân lực chất lượng cao là chìa khóa để phát triển nhanh, bền vững.`;

    const generateQuestions = useCallback(async (_referenceQuestions: QuestionWithType[]) => {
        if (!apiKey) {
            setError('VITE_GEMINI_API_KEY không được cấu hình trong .env');
            return;
        }

        setLoading(true);
        setError(null);
        setQuestions([]);

        try {
            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
            const randomSeed = Math.random().toString(36).slice(2, 8);

            const prompt = `${systemPrompt}\n\nReference content:\n${noiDungContent}\n\nSession: ${randomSeed}`;

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }],
                    generationConfig: {
                        temperature: 0.8,
                        topP: 0.95,
                        maxOutputTokens: 4000,
                    }
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Gemini API error ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            const content = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

            const jsonMatch = content.match(/\[\s*\{[\s\S]*\}\s*\]/);
            if (!jsonMatch) {
                throw new Error('Invalid response format from AI. Could not find JSON array.');
            }

            const parsedQuestions: PracticeQuestion[] = JSON.parse(jsonMatch[0]);

            const validatedQuestions = parsedQuestions.map((q, idx) => ({
                ...q,
                id: idx + 1,
                answer: q.answer || 'A',
                type: q.type || 'concept',
            }));

            setQuestions(validatedQuestions);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : String(err);
            setError(`Lỗi: ${errorMessage}`);
            console.error('Error generating questions:', err);
        } finally {
            setLoading(false);
        }
    }, [apiKey]);

    return { loading, error, questions, generateQuestions };
};
