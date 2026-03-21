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

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1 animate-fade-in-right">
                        <img
                            src="/bg-modernization-factory.svg"
                            alt="Công nghiệp hóa và hiện đại hóa"
                            className={`rounded-xl shadow-2xl transition-all duration-300 ${theme === "dark" ? "hover:shadow-blue-500/50" : "hover:shadow-blue-300/50"}`}
                        />
                    </div>

                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h3 className="text-lg font-bold text-blue-400 mb-3">1. Khái niệm công nghiệp hóa - hiện đại hóa</h3>
                            <ul className={`space-y-2 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Công nghiệp hóa: chuyển từ sản xuất thủ công sang cơ khí và công nghiệp.</li>
                                <li>Hiện đại hóa: ứng dụng công nghệ tiên tiến để nâng năng suất, chất lượng.</li>
                                <li>Bản chất: phát triển lực lượng sản xuất gắn với khoa học - công nghệ.</li>
                            </ul>
                        </article>

                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h3 className="text-lg font-bold text-cyan-400 mb-3">2. Vai trò công nghệ trong lý luận Mác</h3>
                            <ul className={`space-y-2 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Lực lượng sản xuất gồm: người lao động, tư liệu sản xuất, khoa học - công nghệ.</li>
                                <li>Khoa học - công nghệ ngày càng giữ vai trò quyết định.</li>
                                <li>Công nghệ là động lực trực tiếp của công nghiệp hóa, hiện đại hóa.</li>
                            </ul>
                        </article>

                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h3 className="text-lg font-bold text-blue-400 mb-3">3. Định hướng ở Việt Nam</h3>
                            <ul className={`space-y-2 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Gắn với kinh tế thị trường định hướng xã hội chủ nghĩa.</li>
                                <li>Kết hợp tăng trưởng kinh tế với công bằng xã hội và phát triển bền vững.</li>
                                <li>Điểm mới: công nghiệp hóa dựa trên tri thức, công nghệ, đổi mới sáng tạo.</li>
                            </ul>
                        </article>

                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h3 className="text-lg font-bold text-cyan-400 mb-3">4. Case study FPT</h3>
                            <ul className={`space-y-2 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>FPT phát triển mạnh trí tuệ nhân tạo, chuyển đổi số và xuất khẩu phần mềm.</li>
                                <li>Công nghiệp hóa thời đại mới không chỉ dựa vào "nhà máy nặng".</li>
                                <li>Trọng tâm chuyển sang tri thức và công nghệ số.</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
