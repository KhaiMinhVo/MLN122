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

// Đọc nội dung từ file NoiDung.md
const getConceptContent = (concept: string): string => {
  const content: Record<string, string> = {
  'cnh hđh': `## CNH, HĐH

Công nghiệp hóa là quá trình chuyển từ lao động thủ công sang sản xuất bằng máy móc, nhằm nâng cao năng suất lao động xã hội. Ở Việt Nam, CNH, HĐH là quá trình chuyển đổi toàn diện sản xuất, dịch vụ và quản lý kinh tế - xã hội trên nền tảng công nghệ hiện đại.

Đặc điểm chính:
- Quy luật phát triển tất yếu
- Nâng cao năng suất và của cải xã hội
- Xây dựng cơ sở vật chất - kỹ thuật cho phát triển`,

  'đứt gãy công nghệ': `## Đứt gãy công nghệ

Đứt gãy công nghệ là sự chênh lệch ngày càng lớn về năng lực công nghệ giữa các quốc gia, doanh nghiệp và khu vực dân cư, khiến một bộ phận không kịp thích ứng với làn sóng công nghệ mới.

Đặc điểm chính:
- Mất lợi thế sản xuất truyền thống
- Tăng khoảng cách phát triển
- Gây sức ép lên việc làm và thu nhập`,

  'đổi mới sáng tạo': `## Đổi mới sáng tạo

Đổi mới sáng tạo là yêu cầu khách quan để CNH, HĐH thành công trong bối cảnh công nghệ biến đổi nhanh. Trọng tâm là hoàn thiện thể chế, liên kết tri thức và nâng năng suất nền kinh tế.

Đặc điểm chính:
- Hoàn thiện hệ sinh thái sáng tạo
- Gắn nghiên cứu với ứng dụng
- Tạo động lực tăng trưởng bền vững`,

  'chuyển đổi số': `## Chuyển đổi số

Chuyển đổi số là quá trình ứng dụng công nghệ số vào sản xuất, quản trị, phân phối và dịch vụ nhằm nâng cao hiệu quả vận hành của nền kinh tế và xã hội.

Đặc điểm chính:
- Phát triển hạ tầng CNTT-TT
- Tạo nền tảng kinh tế số
- Nâng cao năng lực quản trị xã hội`,

  'nguồn nhân lực chất lượng cao': `## Nguồn nhân lực chất lượng cao

Nguồn nhân lực chất lượng cao là điều kiện then chốt để thích ứng công nghệ mới và duy trì tốc độ tăng trưởng trong quá trình CNH, HĐH.

Đặc điểm chính:
- Đổi mới giáo dục theo năng lực
- Kết hợp lý thuyết với thực hành
- Trọng dụng, thu hút nhân tài`
  };

  return content[concept] || 'Không tìm thấy nội dung cho khái niệm này.';
};

// Hàm tạo ví dụ sử dụng Gemini API
async function generateExample(concept: string, apiKey: string): Promise<string> {
  const content = getConceptContent(concept);
  
  const prompt = `Dựa vào nội dung sau đây, hãy tạo một ví dụ thực tế ngắn gọn (khoảng 2-3 câu) về khái niệm "${concept}".

Nội dung tham khảo:
${content}

Yêu cầu:
- Tạo ví dụ cụ thể, dễ hiểu
- Phản ánh rõ nét đặc điểm của khái niệm
- Có tính ứng dụng thực tế
- Viết bằng tiếng Việt, ngắn gọn, súc tích`;

  return await callGeminiAPI(apiKey, prompt);
}

export default function ConceptExample() {
  const [selectedConcept, setSelectedConcept] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const concepts = [
    { value: 'cnh hđh', label: 'CNH, HĐH' },
    { value: 'đứt gãy công nghệ', label: 'Đứt Gãy Công Nghệ' },
    { value: 'đổi mới sáng tạo', label: 'Đổi Mới Sáng Tạo' },
    { value: 'chuyển đổi số', label: 'Chuyển Đổi Số' },
    { value: 'nguồn nhân lực chất lượng cao', label: 'Nguồn Nhân Lực Chất Lượng Cao' }
  ];

  const handleGenerate = async () => {
    // Validate selections
    if (!selectedConcept) {
      setError('Vui lòng chọn khái niệm');
      toast.error('Vui lòng chọn khái niệm');
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
      const example = await generateExample(selectedConcept, apiKey);
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
    setShowResult(false);
    setResult('');
    setError(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Tạo Ví Dụ Khái Niệm</h1>
        <p className="text-muted-foreground text-center mb-8">
          Chọn một khái niệm trong chủ đề CNH, HĐH và đứt gãy công nghệ để tạo ví dụ minh họa
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tạo ví dụ minh họa</CardTitle>
            <CardDescription>
              Chọn khái niệm để tạo ví dụ thực tế
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
                    <SelectItem key={concept.value} value={concept.value}>
                      {concept.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedConcept && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Nội dung tham khảo:</h4>
                  <div className="text-sm text-muted-foreground whitespace-pre-line">
                    {getConceptContent(selectedConcept)}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button 
                onClick={handleGenerate} 
                disabled={!selectedConcept || isGenerating}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    AI đang tạo ví dụ...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Tạo ví dụ với AI
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
                Ví dụ về {concepts.find(c => c.value === selectedConcept)?.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none">
                <p className="whitespace-pre-line text-green-900 dark:text-green-100">{result}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300">
                  💡 <strong>Mẹo:</strong> Bạn có thể thử các khái niệm khác nhau để khám phá thêm nhiều ví dụ thú vị!
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
