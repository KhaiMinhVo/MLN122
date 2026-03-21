import { PersonStanding , TrendingUp, Globe } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

export default function Models() {
    const { theme } = useTheme();

    return (
        <section id="models" className={`py-20 px-4 transition-colors duration-300 ${theme === "dark" ? "bg-slate-800/50" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                        Phần IV - V
                    </p>
                    <h2 className="py-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Tác động đến Việt Nam và yêu cầu khách quan
                    </h2>
                </div>

                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-blue-400 mb-5">IV. Tác động đến công nghiệp hóa, hiện đại hóa ở Việt Nam</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"}`}>
                            <TrendingUp className="w-10 h-10 text-cyan-400 mb-3" />
                            <h4 className="text-lg font-bold mb-2">Làm chậm tiến trình</h4>
                            <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                Không làm chủ công nghệ dẫn đến phụ thuộc và năng suất thấp, làm suy giảm khả năng cạnh tranh.
                            </p>
                        </article>
                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"}`}>
                            <Globe className="w-10 h-10 text-cyan-400 mb-3" />
                            <h4 className="text-lg font-bold mb-2">Méo mó cấu trúc phát triển</h4>
                            <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                Thành thị phát triển nhanh hơn nông thôn, gây mất cân đối kinh tế - xã hội giữa các vùng.
                            </p>
                        </article>
                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"}`}>
                            <PersonStanding className="w-10 h-10 text-cyan-400 mb-3" />
                            <h4 className="text-lg font-bold mb-2">Cản trở mục tiêu xã hội chủ nghĩa</h4>
                            <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                Đứt gãy công nghệ làm gia tăng khoảng cách giàu nghèo, gây bất ổn và giảm tính bao trùm của phát triển.
                            </p>
                        </article>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-5">V. Yêu cầu khách quan (kết luận trọng tâm)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h4 className="font-bold text-blue-400 mb-2">1. Gắn công nghiệp hóa với đổi mới sáng tạo</h4>
                            <ul className={`space-y-1 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Phát triển hệ sinh thái startup.</li>
                                <li>Tăng đầu tư cho R&D.</li>
                                <li>Làm chủ công nghệ lõi.</li>
                            </ul>
                        </article>
                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h4 className="font-bold text-blue-400 mb-2">2. Thu hẹp khoảng cách công nghệ</h4>
                            <ul className={`space-y-1 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Hỗ trợ doanh nghiệp nhỏ và vừa.</li>
                                <li>Phát triển hạ tầng số nông thôn.</li>
                                <li>Phổ cập kỹ năng số.</li>
                            </ul>
                        </article>
                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h4 className="font-bold text-cyan-400 mb-2">3. Phát triển nguồn nhân lực</h4>
                            <ul className={`space-y-1 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Đẩy mạnh giáo dục STEM.</li>
                                <li>Đào tạo lại lực lượng lao động.</li>
                                <li>Con người là trung tâm của lực lượng sản xuất.</li>
                            </ul>
                        </article>
                        <article className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                            <h4 className="font-bold text-cyan-400 mb-2">4. Gắn với phát triển bền vững</h4>
                            <ul className={`space-y-1 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>Ưu tiên công nghệ xanh.</li>
                                <li>Thúc đẩy kinh tế tuần hoàn.</li>
                                <li>Giảm phụ thuộc tài nguyên.</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
