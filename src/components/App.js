import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Accomodations from './pages/Accomodations/Accomodations';
// import About from './pages/About/About';
import NoPage from './pages/NoPage/NoPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                {/* <Route path="/accomodations" element={<Accomodations/>} /> */}
                {/* <Route path="/about" element={<About/>} /> */}
                <Route path="/error" element={<NoPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App