import { useTheme } from "../../contexts/ThemeContext";
import { AlertTriangle, CircleSlash, Sparkles } from "lucide-react";
import { motion, easeInOut } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            delay: index * 0.15,
            ease: easeInOut,
        },
    }),
};

export default function Revolutions() {
    const { theme } = useTheme();

    return (
        <section id="revolutions" className={`relative pt-4 pb-24 lg:pb-28 px-4 scroll-mt-[84px] overflow-x-clip transition-colors duration-300 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}>
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/tải xuống (5).jpg"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ opacity: theme === "dark" ? 0.2 : 0.12 }}
                />
                <div className={`absolute inset-0 ${theme === "dark" ? "bg-slate-900/70" : "bg-white/70"}`} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-10">
                    <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                        Phần II - III
                    </p>
                    <h2 className="py-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Đứt gãy công nghệ và tác động hai mặt
                    </h2>
                </div>

                <section
                    id="chapter-2"
                    className={`scroll-mt-[96px] mb-20 relative isolate overflow-hidden rounded-2xl border p-4 md:p-5 lg:min-h-[calc(100vh-104px)] lg:flex lg:flex-col lg:justify-center ${theme === "dark" ? "bg-slate-900/70 border-slate-700/70" : "bg-slate-50 border-slate-200"}`}
                >
                    <div className="mb-6 md:mb-7 text-left">
                        <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${theme === "dark" ? "text-blue-300" : "text-blue-700"}`}>
                            Phần II
                        </p>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-blue-400">Đứt gãy công nghệ</h3>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-6 md:gap-7 lg:items-center">
                        <article className={`lg:col-span-7 rounded-xl border p-6 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"}`}>
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-5 h-5 text-blue-400" />
                                <h4 className="text-2xl font-bold text-blue-400">II. Đứt gãy công nghệ</h4>
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

                        <div className="lg:col-span-5 rounded-xl overflow-hidden">
                            <img
                                src="/Gemini_Generated_Image_8vx0rz8vx0rz8vx0.png"
                                alt="Minh họa đứt gãy công nghệ"
                                className="w-full aspect-[16/10] lg:aspect-[4/3] max-h-[420px] object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section
                    id="chapter-3"
                    className={`scroll-mt-[96px] relative isolate overflow-hidden rounded-2xl border p-4 md:p-5 ${theme === "dark" ? "bg-slate-900/70 border-slate-700/70" : "bg-slate-50 border-slate-200"}`}
                >
                    <div className="mb-6 md:mb-7 text-left">
                        <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                            Phần III
                        </p>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Tác động hai mặt
                        </h3>
                    </div>

                    <motion.div
                        className="grid lg:grid-cols-12 gap-6 w-full max-w-6xl mx-auto items-stretch"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0,
                                },
                            },
                        }}
                    >
                        <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-700/60">
                            <img
                                src="/Gemini_Generated_Image_s9pbkus9pbkus9pb.png"
                                alt="Minh họa tác động hai mặt của công nghệ"
                                className="w-full h-full min-h-[240px] lg:min-h-[420px] object-cover"
                            />
                        </div>

                        <div className="lg:col-span-7 grid grid-rows-2 gap-6">
                        <motion.article
                            custom={0}
                            variants={cardVariants}
                            className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-5 h-5 text-blue-400" />
                                <h4 className="text-2xl font-bold text-blue-400">Mặt tích cực</h4>
                            </div>
                            <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>• Tăng năng suất: tự động hóa, trí tuệ nhân tạo.</li>
                                <li>• Tạo ngành mới: kinh tế số, fintech, logistics thông minh.</li>
                                <li>• Rút ngắn CNH theo hướng đi tắt đón đầu.</li>
                            </ul>
                        </motion.article>

                        <motion.article
                            custom={1}
                            variants={cardVariants}
                            className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <CircleSlash className="w-5 h-5 text-cyan-400" />
                                <h4 className="text-2xl font-bold text-cyan-400">Mặt tiêu cực</h4>
                            </div>
                            <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li>• Tăng bất bình đẳng doanh nghiệp và lao động.</li>
                                <li>• Lệ thuộc công nghệ nhập khẩu, nguy cơ bẫy giá trị thấp.</li>
                                <li>• Đứt gãy chuỗi giá trị: chủ yếu gia công, lắp ráp, ít R&D.</li>
                                <li>• Case FPT: đúng hướng tri thức số nhưng còn áp lực tăng giá trị gia tăng.</li>
                            </ul>
                        </motion.article>
                        </div>
                    </motion.div>
                </section>
            </div>
        </section>
    );
}
