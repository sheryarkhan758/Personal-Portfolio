import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import HireMe from './pages/HireMe';
import Certificates from './pages/Certificates';
import Events from './pages/Events';
import PerformanceMonitor from './components/PerformanceMonitor';

// Add this line right after the import to test
console.log("Certificates component imported:", Certificates);

import "./App.css";

// Animation wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();

  // Add debugging for route changes
  console.log("Current route:", location.pathname);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/events" element={<Events />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    // Enable custom cursor on non-touch devices
    if (!('ontouchstart' in window)) {
      document.documentElement.classList.add('has-custom-cursor');
    }
    
    // Add animated background pattern
    document.body.classList.add('animated-bg');
    
    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      document.body.classList.remove('animated-bg');
    };
  }, []);

  return (
    <Router>
      <PerformanceMonitor />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
