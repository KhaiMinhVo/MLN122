import { BookOpenCheck, Leaf, PersonStanding, Wrench } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { motion, easeInOut } from "framer-motion";

const cardVariants = {
    hidden: (index: number) => ({
        opacity: 0,
        x: index % 2 === 0 ? -72 : 72,
        filter: "blur(8px)",
    }),
    visible: (index: number) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            delay: index * 0.15,
            ease: easeInOut,
        },
    }),
};

export default function ModelsPart5() {
    const { theme } = useTheme();

    return (
        <section id="models-part5" className={`pt-20 pb-20 md:pb-24 px-4 scroll-mt-[104px] min-h-[calc(100vh-84px)] transition-colors duration-300 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                    <p className={`text-sm font-semibold uppercase tracking-[0.16em] mb-2 ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                        Phần V
                    </p>
                    <h2 className="py-2 text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Yêu cầu khách quan (kết luận trọng tâm)
                    </h2>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0,
                            },
                        },
                    }}
                >
                    <motion.article custom={0} variants={cardVariants} className={`rounded-xl border-l-4 border-l-blue-400 border border-l-blue-400 p-4 md:p-5 flex gap-3 h-full ${theme === "dark" ? "bg-slate-800/70 border-slate-700" : "bg-blue-50/40 border-blue-200/50"}`}>
                        <div className="flex-shrink-0">
                            <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${theme === "dark" ? "bg-blue-500/20" : "bg-blue-100"}`}>
                                <BookOpenCheck className="w-4 h-4 text-blue-400" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-lg text-blue-400 mb-2">1. Gắn CNH với đổi mới sáng tạo</h4>
                            <ul className={`space-y-1.5 text-sm md:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Phát triển hệ sinh thái startup</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Tăng đầu tư cho R&D</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Làm chủ công nghệ lõi</span>
                                </li>
                            </ul>
                        </div>
                    </motion.article>

                    <motion.article custom={1} variants={cardVariants} className={`rounded-xl border-l-4 border-l-blue-400 border p-4 md:p-5 flex gap-3 h-full ${theme === "dark" ? "bg-slate-800/70 border-slate-700" : "bg-blue-50/40 border-blue-200/50"}`}>
                        <div className="flex-shrink-0">
                            <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${theme === "dark" ? "bg-blue-500/20" : "bg-blue-100"}`}>
                                <Wrench className="w-4 h-4 text-blue-400" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-lg text-blue-400 mb-2">2. Thu hẹp khoảng cách công nghệ</h4>
                            <ul className={`space-y-1.5 text-sm md:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Hỗ trợ doanh nghiệp nhỏ và vừa</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Phát triển hạ tầng số nông thôn</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Phổ cập kỹ năng số</span>
                                </li>
                            </ul>
                        </div>
                    </motion.article>

                    <motion.article custom={2} variants={cardVariants} className={`rounded-xl border-l-4 border-l-cyan-400 border p-4 md:p-5 flex gap-3 h-full ${theme === "dark" ? "bg-slate-800/70 border-slate-700" : "bg-cyan-50/40 border-cyan-200/50"}`}>
                        <div className="flex-shrink-0">
                            <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${theme === "dark" ? "bg-cyan-500/20" : "bg-cyan-100"}`}>
                                <PersonStanding className="w-4 h-4 text-cyan-400" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-lg text-cyan-400 mb-2">3. Phát triển nguồn nhân lực</h4>
                            <ul className={`space-y-1.5 text-sm md:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Đẩy mạnh giáo dục STEM</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Đào tạo lại lực lượng lao động</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Con người là trung tâm của lực lượng sản xuất</span>
                                </li>
                            </ul>
                        </div>
                    </motion.article>

                    <motion.article custom={3} variants={cardVariants} className={`rounded-xl border-l-4 border-l-cyan-400 border p-4 md:p-5 flex gap-3 h-full ${theme === "dark" ? "bg-slate-800/70 border-slate-700" : "bg-cyan-50/40 border-cyan-200/50"}`}>
                        <div className="flex-shrink-0">
                            <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${theme === "dark" ? "bg-cyan-500/20" : "bg-cyan-100"}`}>
                                <Leaf className="w-4 h-4 text-cyan-400" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-lg text-cyan-400 mb-2">4. Gắn với phát triển bền vững</h4>
                            <ul className={`space-y-1.5 text-sm md:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Ưu tiên công nghệ xanh</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Thúc đẩy kinh tế tuần hoàn</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                                    <span>Giảm phụ thuộc tài nguyên</span>
                                </li>
                            </ul>
                        </div>
                    </motion.article>
                </motion.div>
            </div>
        </section>
    );
}
