import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Accomodation from './pages/Accomodation/Accomodation';
//import Card from '../components/Main/Card/Card';
// import About from './pages/About/About';
import NoPage from './pages/NoPage/NoPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/accomodation/:id" element={<Accomodation/>} />
                {/* <Route path="/about" element={<About/>} /> */}
                <Route path="*" element={<NoPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App