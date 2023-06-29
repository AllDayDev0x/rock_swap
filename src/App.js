import { Routes, Route, BrowserRouter } from "react-router-dom"
import {useState, useEffect} from 'react'
import Home from "./pages/Home";
import Faq from './pages/Faq'
import Loading from './pages/Loading'
import './App.css'

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
        {loading
            ? <Loading/>
            :
            <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/faq" exact element={<Faq />} />
            </Routes>
            </BrowserRouter>
        }
        </>
    );
}

export default App;
