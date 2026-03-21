import { useTheme } from "../../contexts/ThemeContext";

export default function Vietnam() {
    const { theme } = useTheme();

    return (
        <section id="vietnam" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="py-3 text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Mục lục tóm tắt bài thuyết trình
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <img src="/giaicap5.jpg" alt="Vietnam Industry" className="rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-blue-400 mb-6">Tóm tắt nội dung</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-1 bg-gradient-to-b from-blue-400 to-cyan-400 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-blue-400 mb-1">1. Cơ sở lý luận CNH, HĐH</h4>
                                    <p className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                                        Làm rõ khái niệm, bản chất và tính tất yếu khách quan của công nghiệp hóa, hiện đại hóa ở Việt Nam.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1 bg-gradient-to-b from-cyan-400 to-blue-400 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-cyan-400 mb-1">2. Tác động hai mặt của công nghệ</h4>
                                    <p className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                                        Chỉ ra thời cơ do công nghệ 4.0 mang lại và các rủi ro đứt gãy công nghệ trong phát triển.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1 bg-gradient-to-b from-blue-400 to-cyan-400 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-blue-400 mb-1">3. Yêu cầu khách quan của giai đoạn mới</h4>
                                    <p className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                                        Gắn CNH, HĐH với đổi mới sáng tạo, chuyển đổi số và phát triển nguồn nhân lực chất lượng cao.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1 bg-gradient-to-b from-cyan-400 to-blue-400 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-cyan-400 mb-1">4. Kết luận</h4>
                                    <p className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                                        Đổi mới sáng tạo là chìa khóa để Việt Nam phát triển nhanh, bền vững và vượt bẫy thu nhập trung bình.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`p-12 rounded-xl border transition-all duration-300 ${theme === "dark" ? "bg-gradient-to-br from-slate-700 to-slate-800 border-slate-600" : "bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300"}`}>
                    <h3 className="text-3xl font-bold text-cyan-400 mb-8">Thông điệp trọng tâm</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold text-blue-400 mb-4">1. Trọng tâm</h4>
                            <p className={`leading-relaxed transition-colors duration-300 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                CNH, HĐH vẫn là nhiệm vụ tất yếu, nhưng phải dựa trên nền tảng tri thức, công nghệ và năng lực đổi mới.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-cyan-400 mb-4">2. Thực hiện</h4>
                            <p className={`leading-relaxed transition-colors duration-300 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                Cần đồng thời phát triển thể chế, hạ tầng số và nguồn nhân lực để giảm đứt gãy công nghệ và nâng sức cạnh tranh quốc gia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
