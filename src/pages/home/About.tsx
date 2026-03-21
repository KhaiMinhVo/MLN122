import { useTheme } from "../../contexts/ThemeContext";

export default function About() {
    const { theme } = useTheme();

    return (
        <section id="about" className={`py-20 px-4 transition-colors duration-300 ${theme === "dark" ? "bg-slate-800/50" : "bg-slate-100/50"}`}>
            <div className="max-w-6xl mx-auto">
                <div className="animate-fade-in-left mb-10">
                    <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                        Phần I
                    </p>
                    <h2 className="py-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Cơ sở lý luận (trọng tâm Mác - Lênin)
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h3 className="text-lg font-bold text-blue-400 mb-3">1. Khái niệm công nghiệp hóa - hiện đại hóa</h3>
                            <p className={`text-sm mb-2 font-semibold ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                                Theo Kinh tế chính trị Mác - Lênin
                            </p>
                            <ul className={`space-y-2 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Công nghiệp hóa: chuyển từ nền sản xuất thủ công sang sản xuất cơ khí, công nghiệp.</li>
                                <li>Hiện đại hóa: ứng dụng công nghệ tiên tiến để nâng cao năng suất và chất lượng.</li>
                            </ul>
                            <p className={`mt-3 text-sm rounded-lg px-3 py-2 ${theme === "dark" ? "bg-slate-900 text-slate-200" : "bg-slate-100 text-slate-700"}`}>
                                Bản chất: phát triển lực lượng sản xuất, gắn với tiến bộ khoa học - công nghệ.
                            </p>
                        </article>

                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h3 className="text-lg font-bold text-cyan-400 mb-3">2. Vai trò của công nghệ trong lý luận Mác</h3>
                            <p className={`text-sm mb-2 font-semibold ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                                Theo C.Mác, lực lượng sản xuất gồm:
                            </p>
                            <ul className={`space-y-2 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Người lao động.</li>
                                <li>Tư liệu sản xuất.</li>
                                <li>Khoa học - công nghệ (ngày càng giữ vai trò quyết định).</li>
                            </ul>
                            <p className={`mt-3 text-sm rounded-lg px-3 py-2 ${theme === "dark" ? "bg-slate-900 text-slate-200" : "bg-slate-100 text-slate-700"}`}>
                                Kết luận: công nghệ là động lực trực tiếp của công nghiệp hóa - hiện đại hóa; ai nắm công nghệ sẽ chi phối sản xuất và phát triển.
                            </p>
                        </article>

                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h3 className="text-lg font-bold text-blue-400 mb-3">3. Định hướng công nghiệp hóa - hiện đại hóa ở Việt Nam</h3>
                            <ul className={`space-y-2 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Gắn với kinh tế thị trường định hướng xã hội chủ nghĩa.</li>
                                <li>Kết hợp tăng trưởng kinh tế với công bằng xã hội và phát triển bền vững.</li>
                            </ul>
                            <p className={`mt-3 text-sm rounded-lg px-3 py-2 ${theme === "dark" ? "bg-slate-900 text-slate-200" : "bg-slate-100 text-slate-700"}`}>
                                Điểm mới: công nghiệp hóa không chỉ là "công nghiệp nặng", mà là công nghiệp hóa dựa trên tri thức, công nghệ và đổi mới sáng tạo.
                            </p>
                        </article>

                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h3 className="text-lg font-bold text-cyan-400 mb-3">4. FPT - công nghiệp hóa dựa trên kinh tế tri thức</h3>
                            <p className={`text-sm mb-2 font-semibold ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                                Case study tiêu biểu:
                            </p>
                            <ul className={`space-y-2 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Phát triển trí tuệ nhân tạo.</li>
                                <li>Đẩy mạnh chuyển đổi số.</li>
                                <li>Xuất khẩu phần mềm.</li>
                            </ul>
                            <p className={`mt-3 text-sm rounded-lg px-3 py-2 ${theme === "dark" ? "bg-slate-900 text-slate-200" : "bg-slate-100 text-slate-700"}`}>
                                Phân tích: công nghiệp hóa trong thời đại mới không cần chỉ dựa vào "nhà máy nặng" mà dựa trên tri thức và công nghệ số.
                            </p>
                        </article>
                </div>
            </div>
        </section>
    );
}
