import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar";
import VacancyScraper from "./pages/VacancyScraper";
import Enricher from "./pages/Enricher";
import DownloadableFiles from "./pages/DownloadableFiles";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/vacancy-scraper" element={<VacancyScraper />} />
        <Route path="/enricher" element={<Enricher />} />
        <Route path="/downloads" element={<DownloadableFiles />} />
      </Routes>
    </Router>
  );
}

export default App;
