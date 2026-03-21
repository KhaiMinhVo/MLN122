import { useTheme } from "../../contexts/ThemeContext";

export default function Revolutions() {
    const { theme } = useTheme();

    const card = (idx: string | number, title: string, desc: string, img: string, colorClass: string) => (
        <div
            className={`group p-8 rounded-xl transition-all duration-300 border flex flex-col h-full ${theme === "dark"
                ? "bg-gradient-to-br from-slate-700 to-slate-800 border-slate-600 hover:from-blue-600/20 hover:to-cyan-600/20 hover:border-blue-400"
                : "bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300 hover:from-blue-50/50 hover:to-cyan-50/50 hover:border-blue-400"
                }`}
            key={idx}
        >
            <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center font-bold text-lg shrink-0 text-white`}>
                    {idx}
                </div>
                <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
            </div>
            <p className={`mb-3 leading-relaxed transition-colors duration-300 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                {desc}
            </p>
            <img src={img} alt={title} className="rounded-lg w-full h-40 object-cover mt-auto" />
        </div>
    );

    return (
        <section id="revolutions" className={`py-20 px-4 transition-colors duration-300 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto">
                <h2 className="py-3 text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Tác động hai mặt của tiến bộ công nghệ
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {card(
                        "1",
                        "Cơ hội đi tắt đón đầu",
"Công nghệ 4.0 mở cơ hội để các nước đi sau tiếp cận nhanh thành tựu mới, rút ngắn khoảng cách phát triển nếu có chiến lược phù hợp.",
                        "/thitoc2.jpg",
                        "bg-gradient-to-br from-blue-500 to-cyan-500"
                    )}

                    {card(
                        "2",
                        "Tối ưu hóa sản xuất",
                        "AI, Big Data và IoT giúp tối ưu hóa sản xuất, phân phối, quản trị; thúc đẩy chuyển dịch cơ cấu kinh tế theo hướng hiện đại và hiệu quả.",
                        "/bo-lac.jpg",
                        "bg-gradient-to-br from-cyan-500 to-blue-500"
                    )}

                    {card(
                        "3",
                        "Đứt gãy lợi thế truyền thống",
                        "Nhân công rẻ và khai thác tài nguyên không còn là lợi thế bền vững. Nhiều ngành cũ tụt hậu nếu không kịp chuyển đổi công nghệ.",
                        "/bo-toc.jpg",
                        "bg-gradient-to-br from-blue-500 to-cyan-500"
                    )}

                    {card(
                        "4",
                        "Rủi ro bất bình đẳng",
                        "Tự động hóa có thể gây mất việc, giảm thu nhập ở một số nhóm lao động và làm gia tăng phân hóa xã hội nếu thiếu chính sách chuyển đổi phù hợp.",
                        "/dantoc2.jpg",
                        "bg-gradient-to-br from-cyan-500 to-blue-500"
                    )}
                </div>
            </div>
        </section>
    );
}
