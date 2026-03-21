import { useState, useCallback } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Textarea } from '../components/ui/textarea';
import { AlertCircle, Brain, RefreshCw, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import MindMapDisplay from '../components/MindMapDisplay';
import { useGeminiMindmap } from '../hooks/useGeminiMindmap';

// Lấy nội dung liên quan từ NoiDung.md
const getRelevantContent = (topic: string): string => {
  const content: Record<string, string> = {
    'cnh hđh': `Công nghiệp hóa là quá trình chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang nền sản xuất dựa chủ yếu trên lao động bằng máy móc.

  Ở Việt Nam, công nghiệp hóa, hiện đại hóa là quá trình chuyển đổi căn bản, toàn diện các hoạt động kinh tế - xã hội trên nền tảng công nghệ và phương tiện hiện đại.

  Tính tất yếu: là quy luật phát triển lực lượng sản xuất và là con đường xây dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội.`,

    'công nghiệp hóa, hiện đại hóa': `Công nghiệp hóa là quá trình chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang nền sản xuất dựa chủ yếu trên lao động bằng máy móc.
    
Ở Việt Nam, công nghiệp hóa, hiện đại hóa là quá trình chuyển đổi căn bản, toàn diện các hoạt động kinh tế - xã hội trên nền tảng công nghệ và phương tiện hiện đại.

Tính tất yếu: là quy luật phát triển lực lượng sản xuất và là con đường xây dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội.`,
    
    'đứt gãy công nghệ': `Đứt gãy công nghệ là khoảng cách ngày càng lớn về khả năng tiếp cận và ứng dụng công nghệ giữa quốc gia, doanh nghiệp, vùng miền.
    
Hệ quả tiêu cực:
1. Mất dần lợi thế nhân công rẻ và tài nguyên
2. Ngành cũ chậm thích ứng bị tụt hậu
3. Tăng nguy cơ thất nghiệp, phân hóa thu nhập, bất bình đẳng`,
    
    'tác động tích cực công nghệ': `Tiến bộ công nghệ, đặc biệt CMCN 4.0, mở ra thời cơ lớn:
  - Cho phép đi tắt đón đầu
  - Thúc đẩy chuyển dịch cơ cấu kinh tế hiện đại
  - Ứng dụng trí tuệ nhân tạo, Big Data, IoT để tối ưu sản xuất và quản trị`,
    
    'đổi mới sáng tạo': `Yêu cầu khách quan hiện nay là gắn công nghiệp hóa, hiện đại hóa với đổi mới sáng tạo.
  - Hoàn thiện thể chế đổi mới sáng tạo quốc gia
  - Kết nối đại học, viện nghiên cứu với mạng tri thức toàn cầu
  - Nâng năng suất, chất lượng và hiệu quả tăng trưởng`,
    
    'chuyển đổi số': `Đẩy mạnh ứng dụng khoa học - công nghệ phải gắn với kinh tế tri thức.
  - Kết hợp phát triển tuần tự với đi tắt đón đầu
  - Xây dựng hạ tầng công nghệ thông tin và truyền thông
  - Chuẩn bị nền tảng kinh tế số và quản trị xã hội số`,
    
    'nguồn nhân lực chất lượng cao': `Phát triển nhân lực là điều kiện tiên quyết trong thời đại mới.
  - Đổi mới giáo dục và đào tạo theo hướng phát triển năng lực
  - Coi trọng chất lượng và hiệu quả
  - Trọng dụng và thu hút nhân tài`
  };
  
  return content[topic] || 'Nội dung về công nghiệp hóa, hiện đại hóa, đứt gãy công nghệ và đổi mới sáng tạo ở Việt Nam.';
};

export default function FinalMindMap() {
  const [prompt, setPrompt] = useState('');
  const { loading, error, mindmapData, generateMindmap, clearMindmap } = useGeminiMindmap();

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) return;
    
    const relevantContent = getRelevantContent(prompt.toLowerCase());
    const enhancedPrompt = `Tạo JSON mindmap về: "${prompt}"

Nội dung: ${relevantContent}

Format BẮT BUỘC:
{"topic":"chủ đề","nodes":[{"id":"root","name":"chủ đề","children":[{"id":"n1","name":"khái niệm 1","children":[]},{"id":"n2","name":"khái niệm 2","children":[]}]}]}

Yêu cầu:
- JSON ngắn gọn, hợp lệ
- Tối đa 2 children chính
- KHÔNG có markdown
- KHÔNG có text ngoài JSON
- Đảm bảo đóng ngoặc đúng`;
    
    console.log('=== FinalMindMap Prompt ===');
    console.log('Topic:', prompt);
    console.log('Prompt length:', enhancedPrompt.length);
    console.log('==========================');

    try {
      await generateMindmap(enhancedPrompt);
    } catch {
      // Error state is handled inside useGeminiMindmap
    }
  }, [prompt, generateMindmap]);

  const handleClear = useCallback(() => {
    clearMindmap();
    setPrompt('');
  }, [clearMindmap]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                MindMap Công nghiệp hóa, hiện đại hóa và đứt gãy công nghệ
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Trang chủ
                </Button>
              </Link>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Tạo sơ đồ tư duy cho các nội dung: cơ sở lý luận công nghiệp hóa, hiện đại hóa, tác động công nghệ 4.0 và yêu cầu đổi mới sáng tạo
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Tạo MindMap
                </CardTitle>
                <CardDescription>
                  Nhập chủ đề bạn muốn tạo mindmap
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Chủ đề cần tạo mindmap
                  </label>
                  <Textarea
                    placeholder="Ví dụ: công nghiệp hóa, hiện đại hóa, đứt gãy công nghệ, tác động công nghệ 4.0, đổi mới sáng tạo, chuyển đổi số..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Gợi ý chủ đề:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "công nghiệp hóa, hiện đại hóa",
                      "đứt gãy công nghệ",
                      "tác động tích cực công nghệ",
                      "đổi mới sáng tạo",
                      "chuyển đổi số",
                      "nguồn nhân lực chất lượng cao"
                    ].map((topic) => (
                      <Button
                        key={topic}
                        variant="outline"
                        size="sm"
                        onClick={() => setPrompt(topic)}
                        className="text-xs"
                      >
                        {topic}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || loading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Đang tạo...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Tạo MindMap
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleClear}
                    disabled={loading}
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>

                {error && (
                  <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700 dark:text-red-300">
                      {error}
                    </p>
                  </div>
                )}

                {/* API Key Warning */}
                {!import.meta.env.VITE_GEMINI_API_KEY && (
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      ⚠️ Cần cấu hình VITE_GEMINI_API_KEY trong file .env
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">ℹ️ Hướng dẫn sử dụng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">1. Nhập chủ đề:</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Gõ chủ đề bạn muốn tạo sơ đồ tư duy
                  </p>
                </div>
                <div>
                  <p className="font-medium">2. Tạo MindMap:</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Trí tuệ nhân tạo sẽ phân tích và tạo sơ đồ tư duy
                  </p>
                </div>
                <div>
                  <p className="font-medium">3. Tương tác:</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Kéo thả, zoom, điều hướng trong sơ đồ
                  </p>
                </div>
                <div className="pt-2 border-t">
                  <p className="font-medium text-blue-600 dark:text-blue-400">
                    💡 Dựa trên nội dung mới trong file NoiDung.md
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* MindMap Display */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle>Sơ đồ tư duy</CardTitle>
                <CardDescription>
                  {mindmapData ? `Mindmap về: ${mindmapData.topic}` : 'Chờ tạo mindmap...'}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 h-[520px]">
                <MindMapDisplay data={mindmapData} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
