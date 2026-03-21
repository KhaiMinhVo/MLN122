import { useTheme } from "../../contexts/ThemeContext";
import { Cpu, Factory, Lightbulb, Microscope } from "lucide-react";
import { motion, easeInOut } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.12,
            ease: easeInOut,
        },
    }),
};

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

                <motion.div
                    className="grid md:grid-cols-2 gap-5"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.12,
                            },
                        },
                    }}
                >
                    <motion.article custom={0} variants={cardVariants} className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                        <div className="flex items-center gap-2 mb-3">
                            <Factory className="w-5 h-5 text-blue-400" />
                            <h3 className="text-lg font-bold text-blue-400">1. Khái niệm CNH - HĐH</h3>
                        </div>
                        <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            <li>• Công nghiệp hóa: thủ công → cơ khí, công nghiệp.</li>
                            <li>• Hiện đại hóa: ứng dụng công nghệ để tăng năng suất, chất lượng.</li>
                            <li>• Bản chất: phát triển lực lượng sản xuất, gắn khoa học - công nghệ.</li>
                        </ul>
                    </motion.article>

                    <motion.article custom={1} variants={cardVariants} className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                        <div className="flex items-center gap-2 mb-3">
                            <Cpu className="w-5 h-5 text-cyan-400" />
                            <h3 className="text-lg font-bold text-cyan-400">2. Vai trò công nghệ theo Mác</h3>
                        </div>
                        <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            <li>• Lực lượng sản xuất gồm: lao động, tư liệu sản xuất, khoa học - công nghệ.</li>
                            <li>• Công nghệ giữ vai trò ngày càng quyết định.</li>
                            <li>• Ai nắm công nghệ → chi phối sản xuất và phát triển.</li>
                        </ul>
                    </motion.article>

                    <motion.article custom={2} variants={cardVariants} className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                        <div className="flex items-center gap-2 mb-3">
                            <Lightbulb className="w-5 h-5 text-blue-400" />
                            <h3 className="text-lg font-bold text-blue-400">3. Định hướng tại Việt Nam</h3>
                        </div>
                        <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            <li>• Gắn kinh tế thị trường định hướng xã hội chủ nghĩa.</li>
                            <li>• Kết hợp tăng trưởng, công bằng xã hội, bền vững.</li>
                            <li>• Điểm mới: CNH dựa trên tri thức, công nghệ, đổi mới sáng tạo.</li>
                        </ul>
                    </motion.article>

                    <motion.article custom={3} variants={cardVariants} className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                        <div className="flex items-center gap-2 mb-3">
                            <Microscope className="w-5 h-5 text-cyan-400" />
                            <h3 className="text-lg font-bold text-cyan-400">4. Case FPT</h3>
                        </div>
                        <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            <li>• Hướng phát triển: trí tuệ nhân tạo, chuyển đổi số, xuất khẩu phần mềm.</li>
                            <li>• Cho thấy CNH thời đại mới dựa vào tri thức số, không chỉ nhà máy nặng.</li>
                            <li>• Thách thức: cần vượt bẫy giá trị thấp từ gia công.</li>
                        </ul>
                    </motion.article>
                </motion.div>
            </div>
        </section>
    );
}
