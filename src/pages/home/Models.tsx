import { TrendingUp, Globe, PersonStanding } from "lucide-react";
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

export default function Models() {
    const { theme } = useTheme();

    return (
        <section id="models" className={`pt-16 pb-96 px-4 scroll-mt-[84px] transition-colors duration-300 ${theme === "dark" ? "bg-slate-800/50" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <p className={`text-base font-semibold uppercase tracking-[0.16em] mb-2 ${theme === "dark" ? "text-cyan-300" : "text-cyan-700"}`}>
                        Phần IV
                    </p>
                    <h2 className="py-3 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Tác động đến công nghiệp hóa, hiện đại hóa ở Việt Nam
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 items-start">
                    <motion.div
                        className="space-y-4 lg:col-span-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
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
                        <motion.article custom={0} variants={cardVariants} className={`rounded-xl border-l-4 border-l-cyan-400 border p-4 flex gap-3 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-cyan-50/40 border-cyan-200/50"}`}>
                            <div className="flex-shrink-0">
                                <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${theme === "dark" ? "bg-cyan-500/20" : "bg-cyan-100"}`}>
                                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-lg md:text-xl text-cyan-400 mb-2">Làm chậm tiến trình</h4>
                                <p className={`text-sm md:text-base leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                    Không làm chủ công nghệ → phụ thuộc, năng suất thấp, giảm cạnh tranh.
                                </p>
                            </div>
                        </motion.article>

                        <motion.article custom={1} variants={cardVariants} className={`rounded-xl border-l-4 border-l-cyan-400 border p-4 flex gap-3 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-cyan-50/40 border-cyan-200/50"}`}>
                            <div className="flex-shrink-0">
                                <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${theme === "dark" ? "bg-cyan-500/20" : "bg-cyan-100"}`}>
                                    <Globe className="w-5 h-5 text-cyan-400" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-lg md:text-xl text-cyan-400 mb-2">Méo mó cấu trúc phát triển</h4>
                                <p className={`text-sm md:text-base leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                    Thành thị nhanh, nông thôn chậm → mất cân đối kinh tế - xã hội.
                                </p>
                            </div>
                        </motion.article>

                        <motion.article custom={2} variants={cardVariants} className={`rounded-xl border-l-4 border-l-cyan-400 border p-4 flex gap-3 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-cyan-50/40 border-cyan-200/50"}`}>
                            <div className="flex-shrink-0">
                                <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${theme === "dark" ? "bg-cyan-500/20" : "bg-cyan-100"}`}>
                                    <PersonStanding className="w-5 h-5 text-cyan-400" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-lg md:text-xl text-cyan-400 mb-2">Cản trở mục tiêu xã hội chủ nghĩa</h4>
                                <p className={`text-sm md:text-base leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                    Tăng khoảng cách giàu nghèo, giảm tính bao trùm, tiềm ẩn bất ổn xã hội.
                                </p>
                            </div>
                        </motion.article>
                    </motion.div>

                    <motion.aside
                        className="lg:col-span-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: easeInOut }}
                    >
                        <div className={`rounded-2xl border p-3 sticky top-28 ${theme === "dark" ? "bg-slate-900/80 border-slate-700" : "bg-cyan-50/70 border-cyan-200"}`}>
                            <img
                                src="/hien-dai-hoa-la-gi_2605173503.jpeg"
                                alt="Minh hoa chuong 6"
                                className="w-full h-56 md:h-64 rounded-xl object-cover object-center"
                                loading="lazy"
                            />
                            <p className={`mt-3 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                               
                            </p>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
