import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { App } from "../App";

export function Router() {
    return (
        <Routes>
            <Route path="/Home" element={ <App /> } />
            <Route path="/" element={ <Home /> } />
        </Routes>
    )
}