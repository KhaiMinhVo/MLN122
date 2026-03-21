import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { QAProvider } from "./contexts/QAContext";
import Home from "./pages/Home";
import CaseGenerator from "./pages/CaseGenerator";
import ConceptExample from "./pages/ConceptExample";
import MindMap from "./pages/MindMap";
import FinalMindMap from "./pages/FinalMindMap";
import Chatbot from "./pages/Chatbot";
import Practice from "./pages/Practice";
import Login from "./pages/Login";
import Support from "./pages/Support";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <Switch location={location}>
          <Route path={"/"} component={Home} />
          <Route path={"/login"} component={Login} />
          <Route path={"/support"} component={Support} />
          <Route path={"/case-generator"} component={CaseGenerator} />
          <Route path={"/concept-example"} component={ConceptExample} />
          <Route path={"/mindmap"} component={MindMap} />
          <Route path={"/giai-cap-mindmap"} component={FinalMindMap} />
          <Route path={"/chat"} component={Chatbot} />
          <Route path={"/practice"} component={Practice} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        switchable
      >
        <AuthProvider>
          <QAProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </QAProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
