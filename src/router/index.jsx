import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { GaleriaAluno } from "../pages/GaleriaAluno";
import { AulaAluno } from "../pages/AulaAluno";
import { GravacoesProfessor } from "../pages/GravacoesProfessor";
import { GaleriaProfessor } from "../pages/GaleriaProfessor";
import { PerfilAluno } from "../pages/PerfilAluno";
import { PerfilProfessor } from "../pages/PerfilProfessor";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/SignIn" element={<SignIn /> } />
            <Route path="/SignUp" element={ <SignUp /> } />
            <Route path="/GaleriaAluno" element={ <GaleriaAluno /> } />
            <Route path="/AulaAluno" element={ <AulaAluno /> } />
            <Route path="/GravacoesProfessor" element={ <GravacoesProfessor /> } />
            <Route path="/GaleriaProfessor" element={ <GaleriaProfessor /> } />
            <Route path="/PerfilAluno" element={ <PerfilAluno /> } />
            <Route path="/PerfilProfessor" element={ <PerfilProfessor /> } />
        </Routes>
    )
}