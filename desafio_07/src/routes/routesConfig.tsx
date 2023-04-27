// Import Functions Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Pages
import Home from '../components/Home';
import HistoryUbuntu from '../components/historyUbuntu';
import FamousUbuntu from '../components/famousUbuntu';
import Contact from '../components/Contact'

//Import Navbar function and layouts
import Navbar from '../components/layouts/Navbar'

//Import Footer function and layouts
import Footer from '../components/layouts/Footer'

function RoutesConfig() {
    return (
        <Router>
            <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/HistoryUbuntu" element={<HistoryUbuntu />} />
                        <Route path="/FamousUbuntu" element={<FamousUbuntu />}/>
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                </div>
            <Footer />
        </Router>
    )
}

export default RoutesConfig
