import { useTheme } from "../../contexts/ThemeContext";
import { AlertTriangle, CircleSlash, Sparkles } from "lucide-react";

export default function Revolutions() {
    const { theme } = useTheme();

    return (
        <section id="revolutions" className={`py-20 px-4 transition-colors duration-300 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                        Phần II - III
                    </p>
                    <h2 className="py-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Đứt gãy công nghệ và tác động hai mặt
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                    <article className={`lg:col-span-2 rounded-xl border p-6 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <AlertTriangle className="w-5 h-5 text-blue-400" />
                            <h3 className="text-2xl font-bold text-blue-400">II. Đứt gãy công nghệ</h3>
                        </div>
                        <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            <li>• Chênh lệch về tiếp cận, làm chủ, ứng dụng công nghệ.</li>
                            <li>• Khoảng cách: quốc gia, doanh nghiệp lớn - SMEs, thành thị - nông thôn.</li>
                            <li>• Việt Nam: FDI công nghệ cao, doanh nghiệp nội trung bình - thấp, chuyển đổi số không đồng đều.</li>
                        </ul>
                        <p className={`mt-3 text-sm font-semibold ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                            → Đây là khoảng cách công nghệ nội tại.
                        </p>
                    </article>

                    <img src="/bg-modernization-digital.svg" alt="Minh họa đứt gãy công nghệ" className="rounded-xl w-full h-full object-cover" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <article className={`rounded-xl border p-6 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-blue-400" />
                            <h3 className="text-2xl font-bold text-blue-400">III.1 Mặt tích cực</h3>
                        </div>
                        <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            <li>• Tăng năng suất: tự động hóa, trí tuệ nhân tạo.</li>
                            <li>• Tạo ngành mới: kinh tế số, fintech, logistics thông minh.</li>
                            <li>• Rút ngắn CNH theo hướng đi tắt đón đầu.</li>
                        </ul>
                    </article>

                    <article className={`rounded-xl border p-6 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <CircleSlash className="w-5 h-5 text-cyan-400" />
                            <h3 className="text-2xl font-bold text-cyan-400">III.2 Mặt tiêu cực</h3>
                        </div>
                        <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            <li>• Tăng bất bình đẳng doanh nghiệp và lao động.</li>
                            <li>• Lệ thuộc công nghệ nhập khẩu, nguy cơ bẫy giá trị thấp.</li>
                            <li>• Đứt gãy chuỗi giá trị: chủ yếu gia công, lắp ráp, ít R&D.</li>
                            <li>• Case FPT: đúng hướng tri thức số nhưng còn áp lực tăng giá trị gia tăng.</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
