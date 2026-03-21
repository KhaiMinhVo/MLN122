import Nav from "./home/Nav";
import Hero from "./home/Hero";
import About from "./home/About";
import Revolutions from "./home/Revolutions";
import Models from "./home/Models";
import Vietnam from "./home/Vietnam";
import CTA from "./home/CTA";
import Footer from "./home/Footer";
import { motion } from "framer-motion";

const sectionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      delay: index * 0.08,
      ease: sectionEase,
    },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <motion.div
        custom={1}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <About />
      </motion.div>
      <motion.div
        custom={2}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Revolutions />
      </motion.div>
      <motion.div
        custom={3}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Models />
      </motion.div>
      <motion.div
        custom={4}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Vietnam />
      </motion.div>
      <motion.div
        custom={5}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CTA />
      </motion.div>
      <motion.div
        custom={6}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Footer />
      </motion.div>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        section {
          scroll-margin-top: 92px;
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
