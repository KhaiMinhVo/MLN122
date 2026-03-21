import { useTheme } from "../../contexts/ThemeContext";

export default function CTA() {
    const { theme } = useTheme();

    return (
        <section className={`py-20 px-4 border-t border-b transition-all duration-300 ${theme === "dark" ? "bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-400/30" : "bg-gradient-to-r from-blue-100/40 to-cyan-100/40 border-blue-300/30"}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className=" py-3 text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Công nghiệp hóa gắn với đổi mới sáng tạo
                </h2>
                <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                    Nội dung mới nhấn mạnh tác động hai mặt của tiến bộ công nghệ và yêu cầu chuyển đổi mô hình công nghiệp hóa, hiện đại hóa theo hướng số hóa, tri thức và phát triển bền vững.
                </p>
            </div>
        </section>
    );
}
