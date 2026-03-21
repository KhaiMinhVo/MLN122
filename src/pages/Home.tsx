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

const HOME_SECTION_IDS = ["mo-dau", "about", "revolutions", "models", "models-part5", "vietnam", "cta", "footer"];

export default function Home() {
  const isScrollingRef = useRef(false);
  const currentSectionIndexRef = useRef(0);

  useEffect(() => {
    const sections = HOME_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const updateCurrentIndex = () => {
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const distance = Math.abs(section.getBoundingClientRect().top);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      currentSectionIndexRef.current = closestIndex;
    };

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth <= 1024) {
        return;
      }

      if (Math.abs(event.deltaY) < 16) {
        return;
      }

      if (isScrollingRef.current) {
        event.preventDefault();
        return;
      }

      updateCurrentIndex();

      const direction = event.deltaY > 0 ? 1 : -1;
      const currentIndex = currentSectionIndexRef.current;
      const isAtFirst = currentIndex === 0;
      const isAtLast = currentIndex === sections.length - 1;

      if ((direction < 0 && isAtFirst) || (direction > 0 && isAtLast)) {
        return;
      }

      const nextIndex = Math.max(
        0,
        Math.min(sections.length - 1, currentIndex + direction),
      );

      if (nextIndex === currentIndex) {
        return;
      }

      event.preventDefault();
      isScrollingRef.current = true;
      currentSectionIndexRef.current = nextIndex;
      sections[nextIndex].scrollIntoView({ behavior: "smooth", block: "start" });

      window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 750);
    };

    updateCurrentIndex();
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", updateCurrentIndex, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", updateCurrentIndex);
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
          scroll-behavior: smooth;
        }

        section {
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
