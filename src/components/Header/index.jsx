import { Container, MenuMobile, ContainerMobile, ContainerDesktop } from "./styled"
// importa a imagem
import logo from '../../assets/logo1.svg'
import { Divide as Hamburger } from 'hamburger-react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../Button"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    function handleNextPage() {
        navigate('/SignUp');
    }
    function handleNextPageSignIn() {
        navigate('/SignIn');
    }


    useEffect(() => {
       
    }, [isOpen])

    return (
        <Container>
            <nav>
                {/* usando imagens no react */}
                <MenuMobile>
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </MenuMobile>
                {
                    isOpen === false ?
                        <ContainerDesktop>
                            <img src={logo} alt='logo' />

                            <ul>
                                <li>
                                    <a href="#about">
                                        Sobre Nós
                                    </a>
                                </li>
                                <li>
                                    <a href="#product">
                                        Nosso Produto
                                    </a>
                                </li>
                                <li>
                                    <a href="#service">

                                        Serviços
                                    </a>
                                </li>
                                <li>
                                    <a href="#devs">
                                        Desenvolvedoras
                                    </a>
                                </li>
                            </ul>

                            <div>
                                <Button onClick={handleNextPageSignIn}>
                                    Entrar
                                </Button>
                                <Button primary onClick={handleNextPage} >
                                    Cadastrar
                                </Button>

                            </div>
                        </ContainerDesktop> :
                        <ContainerMobile>
                            <img src={logo} alt='logo' />
                            <ul>
                                <li>
                                    <a href="#about">
                                        <button onClick={() => {
                                            setIsOpen(false)
                                        }}>
                                        Sobre Nós
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#product">
                                        <button onClick={() => {
                                            setIsOpen(false)
                                        }}>
                                            Nosso Produto
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a href="#service">
                                        <button onClick={() => {
                                            setIsOpen(false)
                                        }}>
                                            Serviços
                                        </button>
                                        
                                    </a>
                                </li>
                                <li>
                                    <a href="#devs">
                                        <button onClick={() => {
                                            setIsOpen(false)
                                        }}>
                                            Desenvolvedoras
                                        </button>
                                        
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <Button onClick={handleNextPageSignIn}>
                                    Entrar
                                </Button>
                                <Button primary onClick={handleNextPage}>
                                    Cadastrar
                                </Button>

                            </div>
                        </ContainerMobile>
                }
            </nav>
        </Container>
    )
}