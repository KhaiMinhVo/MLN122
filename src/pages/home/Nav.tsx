import { useTheme } from "../../contexts/ThemeContext";

export default function Nav() {
    const { theme } = useTheme();

    return (
        <nav
            className={`fixed top-0 w-full z-50 backdrop-blur-sm transition-colors duration-300 ${theme === "dark"
                ? "bg-gradient-to-b from-slate-900 to-transparent"
                : "bg-gradient-to-b from-white/80 to-transparent border-b border-slate-200/30"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-extrabold text-sm flex items-center justify-center shadow-lg">
                        KT
                    </div>
                    <div className="leading-tight">
                        <p className="text-base md:text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Kinh tế chính trị
                        </p>
                        <p className={`hidden sm:block text-xs ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                            Công nghiệp hóa, hiện đại hóa và đổi mới sáng tạo
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden md:flex gap-6">
                        <a
                            href="#mo-dau"
                            className={`transition-colors ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                                }`}
                        >
                            Mở Đầu
                        </a>
                        <a
                            href="#about"
                            className={`transition-colors ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                                }`}
                        >
                            Chương 1
                        </a>
                        <a
                            href="#revolutions"
                            className={`transition-colors ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                                }`}
                        >
                            Chương 2
                        </a>
                        <a
                            href="#models"
                            className={`transition-colors ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                                }`}
                        >
                            Chương 3
                        </a>
                        <a
                            href="#vietnam"
                            className={`flex items-center gap-1 transition-colors ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                                }`}
                        >
                            Kết Luận
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}
