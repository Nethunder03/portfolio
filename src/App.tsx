import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importez vos composants/pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import AllArticles from './pages/blog/AllArticles';
import ArticleDetail from './pages/blog/ArticleDetail';
import './styles/styles.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<AllArticles />} />
        <Route path="/blog/:slug" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
