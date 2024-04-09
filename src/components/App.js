import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Accomodations from './pages/Accomodations/Accomodations';
import About from './pages/About/About';
import Page404 from './pages/Page404/Page404';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/accomodations" element={<Accomodations/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<Page404/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App