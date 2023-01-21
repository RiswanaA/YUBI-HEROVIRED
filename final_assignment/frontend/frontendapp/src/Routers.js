import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchbook from "./components/Searchbook.js";
import Updatebook from "./components/Updatebook";
import Addbook from "./components/Addbook";
import Delete from "./components/Delete";
import Viewbooks from "./components/Viewbooks";
import App from "./App.js";

const Routers = () => {
        return (
                <BrowserRouter>
                        <Routes>
                                <Route path="/" element={<App />} />
                                <Route path="/home" element={<App />} />
                                <Route path="/addbook" element={<Addbook />} />
                                <Route path="/delete" element={<Delete />} />
                                <Route path="/update" element={<Updatebook />} />
                                <Route path="/search" element={<Searchbook />} />
                                <Route path="/listallbooks" element={<Viewbooks />} />
                        </Routes>
                </BrowserRouter>
        )
}

export default Routers;