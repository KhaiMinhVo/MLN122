import { useTheme } from "../../contexts/ThemeContext";

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
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">II. Khái niệm "đứt gãy công nghệ"</h3>
                        <p className={`${theme === "dark" ? "text-slate-300" : "text-slate-700"} leading-relaxed mb-4`}>
                            Đứt gãy công nghệ là sự chênh lệch lớn về khả năng tiếp cận, làm chủ và ứng dụng công nghệ giữa các chủ thể phát triển.
                        </p>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <p className="font-semibold text-cyan-400 mb-2">Bao gồm các khoảng cách:</p>
                                <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                    <li>Giữa quốc gia phát triển và đang phát triển.</li>
                                    <li>Giữa doanh nghiệp lớn và doanh nghiệp nhỏ (SMEs).</li>
                                    <li>Giữa thành thị và nông thôn.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-cyan-400 mb-2">Biểu hiện tại Việt Nam:</p>
                                <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                                    <li>Doanh nghiệp FDI thường có công nghệ cao hơn doanh nghiệp trong nước.</li>
                                    <li>Nông nghiệp nhiều nơi còn thủ công.</li>
                                    <li>Chuyển đổi số chưa đồng đều giữa ngành và địa phương.</li>
                                </ul>
                            </div>
                        </div>
                    </article>

                    <img src="/bg-modernization-digital.svg" alt="Đứt gãy công nghệ" className="rounded-xl w-full h-full object-cover" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <article className={`rounded-xl border p-6 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">III.1 Mặt tích cực</h3>
                        <ul className={`space-y-3 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            <li>Tự động hóa và trí tuệ nhân tạo giúp tăng năng suất, giảm chi phí, mở rộng sản lượng.</li>
                            <li>Xuất hiện ngành nghề mới như kinh tế số, fintech, logistics thông minh.</li>
                            <li>Việt Nam có cơ hội rút ngắn quá trình công nghiệp hóa theo hướng đi tắt đón đầu.</li>
                        </ul>
                    </article>

                    <article className={`rounded-xl border p-6 ${theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">III.2 Mặt tiêu cực</h3>
                        <ul className={`space-y-3 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                            <li>Gia tăng bất bình đẳng giữa doanh nghiệp lớn và nhỏ, giữa lao động trình độ cao và phổ thông.</li>
                            <li>Lệ thuộc công nghệ nước ngoài, nguy cơ rơi vào bẫy giá trị thấp.</li>
                            <li>Đứt gãy chuỗi giá trị khi Việt Nam còn chủ yếu gia công, lắp ráp, ít tham gia khâu R&D.</li>
                            <li>Case FPT cho thấy hướng đi dựa trên tri thức là đúng, nhưng cần vượt qua giới hạn gia công.</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
