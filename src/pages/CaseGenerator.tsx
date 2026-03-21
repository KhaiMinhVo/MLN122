import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

// Hàm gọi Gemini API với error handling tốt hơn
async function callGeminiAPI(apiKey: string, prompt: string) {
   // Sử dụng model mới nhất: gemini-1.5-flash (nhanh, miễn phí) hoặc gemini-1.5-pro
   const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;
  
  let response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 150,
        }
      })
    });
  } catch (error) {
    console.error('Network error:', error);
    throw new Error('Không thể kết nối đến Gemini API. Vui lòng kiểm tra kết nối mạng của bạn.');
  }

  if (!response.ok) {
    let errorMsg = 'Có lỗi xảy ra khi gọi Gemini API';
    try {
      const error = await response.json();
      console.error('Gemini API Error:', error);
      
      // Xử lý các loại lỗi phổ biến
      if (response.status === 400) {
        errorMsg = 'API key không hợp lệ hoặc request không đúng định dạng';
      } else if (response.status === 403) {
        errorMsg = 'API key không có quyền truy cập. Vui lòng kiểm tra API key của bạn';
      } else if (response.status === 429) {
        errorMsg = 'Đã vượt quá giới hạn request. Vui lòng thử lại sau';
      } else if (response.status === 500) {
        errorMsg = 'Lỗi server của Gemini. Vui lòng thử lại sau';
      } else {
        errorMsg = error.error?.message || errorMsg;
      }
    } catch (parseError) {
      console.error('Error parsing response:', parseError);
    }
    throw new Error(errorMsg);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!text) {
    console.error('No text in response:', data);
    throw new Error('API không trả về kết quả. Vui lòng thử lại');
  }
  
  return text.trim();
}

// Sample data
type Concept = {
  id: string;
  name: string;
  description: string;
};

type Field = {
  id: string;
  name: string;
};

const concepts: Concept[] = [
  {
    id: 'concept-1',
    name: 'Công nghiệp hóa gắn liền với phát triển kinh tế tri thức',
    description: 'Ứng dụng các thành tựu khoa học công nghệ mới vào sản xuất và đời sống',
  },
  {
    id: 'concept-2',
    name: 'Công nghiệp hóa trong bối cảnh toàn cầu hóa',
    description: 'Tận dụng cơ hội từ hội nhập quốc tế để phát triển công nghiệp',
  },
  {
    id: 'concept-3',
    name: 'Công nghiệp hóa gắn với phát triển bền vững',
    description: 'Phát triển công nghiệp đi đôi với bảo vệ môi trường và phát triển xã hội',
  },
];

const fields: Field[] = [
  { id: 'field-1', name: 'Y tế' },
  { id: 'field-2', name: 'Giáo dục' },
  { id: 'field-3', name: 'Nông nghiệp' },
  { id: 'field-4', name: 'Công nghệ thông tin' },
  { id: 'field-5', name: 'Giao thông vận tải' },
  { id: 'field-6', name: 'Xây dựng' },
];

// Hàm tạo ví dụ sử dụng Gemini API
async function generateExample(concept: Concept, field: Field, apiKey: string): Promise<string> {
  const prompt = `Hãy tạo một ví dụ thực tế ngắn gọn (khoảng 2-3 câu) về "${concept.name}" trong lĩnh vực "${field.name}". 
  
Ví dụ nên:
- Cụ thể, dễ hiểu
- Phản ánh rõ nét mối liên hệ giữa lý thuyết và thực tiễn
- Có tính ứng dụng cao

Viết bằng tiếng Việt, ngắn gọn, súc tích.`;

  return await callGeminiAPI(apiKey, prompt);
}

export default function CaseGenerator() {
  const [selectedConcept, setSelectedConcept] = useState<string>('');
  const [selectedField, setSelectedField] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    // Validate selections
    if (!selectedConcept || !selectedField) {
      setError('Vui lòng chọn đầy đủ khái niệm và lĩnh vực');
      toast.error('Vui lòng chọn đầy đủ thông tin');
      return;
    }
    
    const concept = concepts.find(c => c.id === selectedConcept);
    const field = fields.find(f => f.id === selectedField);
    
    if (!concept || !field) {
      setError('Không tìm thấy thông tin đã chọn');
      return;
    }
    
    // Validate API key
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      setError('Lỗi cấu hình: Không tìm thấy Gemini API key. Vui lòng thêm VITE_GEMINI_API_KEY vào file .env');
      toast.error('Thiếu API key');
      return;
    }
    
    setIsGenerating(true);
    setError(null);
    setShowResult(false);
    
    try {
      const example = await generateExample(concept, field, apiKey);
      setResult(example);
      setShowResult(true);
      toast.success('Đã tạo ví dụ thành công!');
    } catch (err) {
      console.error('Lỗi khi tạo ví dụ:', err);
      const errorMessage = err instanceof Error ? err.message : 'Đã xảy ra lỗi không xác định';
      setError(errorMessage);
      toast.error('Không thể tạo ví dụ');
    } finally {
      setIsGenerating(false);
    }
  };

  const resetForm = () => {
    setSelectedConcept('');
    setSelectedField('');
    setShowResult(false);
    setResult('');
    setError(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Bộ tạo ví dụ thực tiễn</h1>
        <p className="text-muted-foreground text-center mb-8">
          Chọn một khái niệm và lĩnh vực để tạo ví dụ minh họa thực tế về Công nghiệp hóa, Hiện đại hóa
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tạo ví dụ minh họa</CardTitle>
            <CardDescription>
              Chọn khái niệm và lĩnh vực để tạo ví dụ thực tế
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Chọn khái niệm
              </label>
              <Select value={selectedConcept} onValueChange={setSelectedConcept}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn khái niệm" />
                </SelectTrigger>
                <SelectContent>
                  {concepts.map((concept) => (
                    <SelectItem key={concept.id} value={concept.id}>
                      {concept.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedConcept && (
                <p className="text-sm text-muted-foreground">
                  {concepts.find(c => c.id === selectedConcept)?.description}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Chọn lĩnh vực
              </label>
              <Select value={selectedField} onValueChange={setSelectedField}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn lĩnh vực" />
                </SelectTrigger>
                <SelectContent>
                  {fields.map((field) => (
                    <SelectItem key={field.id} value={field.id}>
                      {field.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 pt-2">
              <Button 
                onClick={handleGenerate} 
                disabled={!selectedConcept || !selectedField || isGenerating}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Trí tuệ nhân tạo đang tạo ví dụ...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Tạo ví dụ với trí tuệ nhân tạo
                  </>
                )}
              </Button>
              <Button 
                variant="outline" 
                onClick={resetForm}
                disabled={isGenerating}
              >
                Đặt lại
              </Button>
            </div>
          </CardContent>
        </Card>

        {error && (
          <Card className="mb-8 border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">
                    Đã xảy ra lỗi
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    {error}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {showResult && (
          <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-300">
                Ví dụ minh họa
              </CardTitle>
              <CardDescription className="text-green-600 dark:text-green-400">
                {concepts.find(c => c.id === selectedConcept)?.name} trong lĩnh vực {fields.find(f => f.id === selectedField)?.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none">
                <p className="whitespace-pre-line text-green-900 dark:text-green-100">{result}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300">
                  💡 <strong>Mẹo:</strong> Bạn có thể thử kết hợp các khái niệm và lĩnh vực khác nhau để khám phá thêm nhiều ví dụ thú vị!
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}