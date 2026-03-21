import { useTheme } from "../../contexts/ThemeContext";

export default function Vietnam() {
    const { theme } = useTheme();

    return (
        <section id="vietnam" className="pt-20 pb-32 px-4 scroll-mt-[84px]">
            <div className="max-w-6xl mx-auto">
                <h2 className="py-3 text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Kết luận và thông điệp trọng tâm
                </h2>

                <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-start lg:items-center mb-16">
                    <div className="w-full max-w-[560px] mx-auto">
                        <div className={`overflow-hidden rounded-xl border shadow-2xl transition-all duration-300 ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}>
                            <img src="/tải xuống (4).jpg" alt="Việt Nam trong tiến trình công nghiệp hóa, hiện đại hóa" className="w-full aspect-[16/10] object-cover object-center hover:scale-[1.02] transition-transform duration-500" />
                        </div>
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

            </div>
        </section>
    );
}
