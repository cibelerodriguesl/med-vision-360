import { ContainerCadastro, CadastroProfessor } from "./styled";
import logo from '../../assets/logo1.svg'
import logo3 from '../../assets/logo3.png'
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
    const [professor, setProfessor] = useState(false)
    const navigate = useNavigate()
    function handleProfessor(e) {
        e.preventDefault()
        setProfessor(false)
    }
    function handleAluno(e) {
        e.preventDefault()
        setProfessor(true)
    }
    function signIn() {
        navigate('/SignIn')
    }
    return (
        <>
            {
                professor === true ?
                    <ContainerCadastro>
                        <div>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>

                        <section>
                            <img src={logo3} alt="" />
                            <form>
                                
                                <fieldset>
                                    <legend>Formulario</legend>
                                    <Input
                                        name={"Nome do Professor"}
                                        prefix={"Digite o nome completo do professor"}
                                    />
                                    <Input
                                        name={"E-mail"}
                                        prefix={"EmailDoProfessor@domínio.com.br"}
                                    />
                                    <Input
                                        name={"Senha"}
                                        prefix={"Digite uma senha"}
                                    />

                                    <label style={{ color: 'white' }}>
                                        <input style={{ marginRight: '8px' }} type="checkbox" />
                                        Eu li e concordo com os termos de uso
                                    </label>
                                    <Button secondary onClick={signIn}>
                                        Cadastrar
                                    </Button>
                                    <p>Deseja cadastrar um Aluno?
                                        <button onClick={handleProfessor}>
                                            Clique aqui
                                        </button>
                                    </p>
                                </fieldset>
                            </form>
                        </section>
                        <Footer />
                    </ContainerCadastro>
                    :
                    <CadastroProfessor>
                        <div>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>

                        <section>
                            <img src={logo3} alt="" />
                            <form>
                               
                                <fieldset>
                                    <legend>Formulario</legend>
                                    <Input
                                        name={"Nome do Aluno"}
                                        prefix={"Digite o nome completo do aluno"}
                                    />
                                    <Input
                                        name={"E-mail"}
                                        prefix={"EmailDoAluno@domínio.com.br"}
                                    />
                                    <Input
                                        name={"Senha"}
                                        prefix={"Digite uma senha"}
                                    />

                                    <label style={{ color: 'white' }}>
                                        <input style={{ marginRight: '8px' }} type="checkbox" />
                                        Eu li e concordo com os termos de uso
                                    </label>
                                    <Button secondary onClick={signIn}>
                                        Cadastrar
                                    </Button>
                                    <p>Deseja cadastrar um Professor?
                                        <button onClick={handleAluno}>
                                            Clique aqui
                                        </button>
                                    </p>
                                </fieldset>
                            </form>
                        </section>
                        <Footer />
                    </CadastroProfessor>
            }
        </>
    )
}