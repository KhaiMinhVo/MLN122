import { useTheme } from "../../contexts/ThemeContext";

export default function Nav() {
    const { theme } = useTheme();

    return (
        <nav
            className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${theme === "dark"
                ? "bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95 border-b border-slate-700/40"
                : "bg-gradient-to-r from-white/90 via-white/85 to-white/90 border-b border-slate-200/70"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[84px] flex justify-between items-center gap-4">
                <div className="flex items-center gap-3 min-w-0">
                    <div className="relative h-11 w-11 shrink-0">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-300/70 to-blue-500/80 blur-[1px]" />
                        <div className="absolute inset-[1.5px] rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white font-black text-[11px] tracking-wide flex items-center justify-center shadow-[0_6px_20px_rgba(34,211,238,0.35)]">
                            MLN
                        </div>
                    </div>
                    <div className="leading-tight min-w-0">
                        <p className="text-base md:text-lg font-extrabold tracking-tight bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
                            Kinh tế chính trị Mác - Lênin
                        </p>
                        <p className={`hidden sm:block text-xs ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                            Công nghiệp hóa, hiện đại hóa và đổi mới sáng tạo
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div
                        className={`hidden md:flex items-center gap-1 rounded-full px-3 py-2 ${theme === "dark"
                            ? "bg-slate-800/60 ring-1 ring-slate-600/50"
                            : "bg-white/80 ring-1 ring-slate-200"
                            }`}
                    >
                        <a
                            href="#mo-dau"
                            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                                }`}
                        >
                            Mở Đầu
                        </a>
                        <a
                            href="#about"
                            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                                }`}
                        >
                            Phần I
                        </a>
                        <a
                            href="#revolutions"
                            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                                }`}
                        >
                            Phần II - III
                        </a>
                        <a
                            href="#models"
                            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                                }`}
                        >
                            Phần IV - V
                        </a>
                        <a
                            href="#vietnam"
                            className={`px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1 transition-colors ${theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600"
                                }`}
                        >
                            Tổng Kết
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}
