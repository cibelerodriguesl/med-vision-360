import { ContainerSignIn, ContainerSignInAluno } from "./styled";
import logo from '../../assets/logo1.svg'
import logo3 from '../../assets/logo3.png'
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SignIn() {
    const [professor, setProfessor] = useState(false)

    function handleProfessor(e) {
        e.preventDefault()
        setProfessor(false)
    }
    function handleAluno(e) {
        e.preventDefault()
        setProfessor(true)
    }

    return (
        <>
            {
                professor === true ?
                    <ContainerSignIn>
                        <div>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>

                        <section>
                            <img src={logo3} alt="" />
                            <form>
                                <p>Professor! É ótimo tê-lo de volta ao Med Vision 360</p>

                                <fieldset>
                                    <legend>Formulario</legend>
                                    <Input
                                        name={"E-mail"}
                                        prefix={"Seuemail@domínio.com.br"}
                                    />
                                    <Input
                                        name={"Senha"}
                                        prefix={"Digite sua senha"}
                                    />



                                    <Button secondary={true} onClick={() => { }}>
                                        Entrar
                                    </Button>
                                    <p>Deseja acessar o Portal do Aluno?
                                        <button onClick={handleProfessor}>
                                            Clique aqui
                                        </button>
                                    </p>
                                </fieldset>
                            </form>
                        </section>
                        <Footer />
                    </ContainerSignIn>
                    :
                    <ContainerSignInAluno>
                        <div>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>

                        <section>
                            <img src={logo3} alt="" />
                            <form>
                                <p>Olá, aluno! Bem-vindo de volta ao Med Vision 360 </p>

                                <fieldset>
                                    <legend>Aluno</legend>
                                    <Input
                                        name={"E-mail"}
                                        prefix={"Seuemail@domínio.com.br"}
                                    />
                                    <Input
                                        name={"Senha"}
                                        prefix={"Digite sua senha"}
                                    />

                                    <Button secondary={true} >
                                        Entrar
                                    </Button>
                                    <p>Deseja acessar como Professor?
                                        <button onClick={handleAluno}>
                                            Clique aqui
                                        </button>
                                    </p>
                                </fieldset>
                            </form>
                        </section>
                        <Footer />
                    </ContainerSignInAluno>
            }
        </>
    )
}