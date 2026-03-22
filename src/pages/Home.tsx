import Nav from "./home/Nav";
import Hero from "./home/Hero";
import About from "./home/About";
import Revolutions from "./home/Revolutions";
import Models from "./home/Models";
import ModelsPart5 from "./home/ModelsPart5";
import Vietnam from "./home/Vietnam";
import CTA from "./home/CTA";
import Footer from "./home/Footer";
import { useEffect, useRef } from "react";

const HOME_SECTION_IDS = [
  "mo-dau",
  "about",
  "case-fpt",
  "chapter-2",
  "chapter-3",
  "models",
  "models-part5",
  "vietnam",
  "cta",
  "footer",
];

const SNAP_LOCK_MS = 850;

export default function Home() {
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const sections = HOME_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const getCurrentIndex = () => {
      const scrollTop = window.scrollY;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const distance = Math.abs(section.offsetTop - scrollTop);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      return nearestIndex;
    };

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth <= 1024) {
        return;
      }

      if (Math.abs(event.deltaY) < 10) {
        return;
      }

      if (isScrollingRef.current) {
        event.preventDefault();
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const currentIndex = getCurrentIndex();
      const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));

      if (nextIndex === currentIndex) {
        return;
      }

      event.preventDefault();
      isScrollingRef.current = true;
      sections[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });

      window.setTimeout(() => {
        isScrollingRef.current = false;
      }, SNAP_LOCK_MS);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Revolutions />
      <Models />
      <ModelsPart5 />
      <Vietnam />
      <CTA />
      <Footer />
      <style>{`
        html {
          /* Chế độ cuộn mượt tự nhiên khi click vào menu */
          scroll-behavior: smooth;
        }

        section {
          /* Trừ hao khoảng trống bằng đúng chiều cao của Navbar (84px) */
          scroll-margin-top: 84px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out;
        }
      `}</style>
    </div>
  );
}
