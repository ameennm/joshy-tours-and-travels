import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Transport from './pages/Transport';
import TourPackages from './pages/TourPackages';
import HoneymoonPackages from './pages/HoneymoonPackages';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/transport" element={<Transport />} />
                        <Route path="/tour-packages" element={<TourPackages />} />
                        <Route path="/honeymoon-packages" element={<HoneymoonPackages />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Fo