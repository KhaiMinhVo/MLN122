import { useTheme } from "../../contexts/ThemeContext";
import { CircleCheckBig, ShieldAlert, Target } from "lucide-react";

export default function Vietnam() {
    const { theme } = useTheme();

    return (
        <section id="vietnam" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="py-3 text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Kết luận và thông điệp trọng tâm
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <img src="/tải xuống (4).jpg" alt="Việt Nam trong tiến trình công nghiệp hóa, hiện đại hóa" className="rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-blue-400 mb-6">Thông điệp nhanh</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-1 bg-gradient-to-b from-blue-400 to-cyan-400 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-blue-400 mb-1">1. Đứt gãy công nghệ là thách thức lớn</h4>
                                    <p className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                                        Tác động trực tiếp đến năng suất, việc làm và công bằng xã hội.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1 bg-gradient-to-b from-cyan-400 to-blue-400 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-cyan-400 mb-1">2. Công nghệ là cơ hội và phép thử</h4>
                                    <p className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                                        Làm chủ công nghệ và nhân lực sẽ nắm lợi thế chuỗi giá trị.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1 bg-gradient-to-b from-blue-400 to-cyan-400 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-blue-400 mb-1">3. Trọng tâm chiến lược của Việt Nam</h4>
                                    <p className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                                        Gắn công nghiệp hóa với đổi mới sáng tạo, chuyển đổi số và công nghệ xanh.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`p-12 rounded-xl border transition-all duration-300 ${theme === "dark" ? "bg-gradient-to-br from-slate-700 to-slate-800 border-slate-600" : "bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300"}`}>
                    <h3 className="text-3xl font-bold text-cyan-400 mb-8">Kết luận ngắn gọn</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <ShieldAlert className="w-5 h-5 text-blue-400" />
                                <h4 className="text-xl font-semibold text-blue-400">1. Vấn đề</h4>
                            </div>
                            <p className={`leading-relaxed transition-colors duration-300 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                Đứt gãy công nghệ làm chậm công nghiệp hóa, hiện đại hóa.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Target className="w-5 h-5 text-cyan-400" />
                                <h4 className="text-xl font-semibold text-cyan-400">2. Mục tiêu</h4>
                            </div>
                            <p className={`leading-relaxed transition-colors duration-300 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                Thu hẹp khoảng cách công nghệ để phát triển bao trùm, bền vững.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <CircleCheckBig className="w-5 h-5 text-cyan-400" />
                                <h4 className="text-xl font-semibold text-cyan-400">3. Hành động</h4>
                            </div>
                            <p className={`leading-relaxed transition-colors duration-300 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                Đầu tư R&D, nhân lực số, hạ tầng số và công nghệ xanh.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
