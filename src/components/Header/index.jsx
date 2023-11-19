import { Container, MenuMobile, ContainerMobile, ContainerDesktop } from "./styled"
// importa a imagem
import logo from '../../assets/logo1.svg'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from "react"
import { Link } from "react-router-dom"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
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
                                <li>Sobre nos</li>
                                <li>nosso produto</li>
                                <li>servico</li>
                                <li>desenvolvedores</li>
                            </ul>

                            <div>
                                <button>
                                    <Link to='/Home'>
                                    entrar
                                    </Link>
                                </button>
                              
                                <button>
                                    cadastrar
                                </button>
                            </div>
                        </ContainerDesktop> : 
                        <ContainerMobile>
                            <img src={logo} alt='logo' />
                            <ul>
                                <li>Sobre nos</li>
                                <li>nosso produto</li>
                                <li>servico</li>
                                <li>desenvolvedores</li>
                            </ul>
                            <div>
                                <button>entrar</button>
                                <button>cadastrar</button>
                            </div>
                        </ContainerMobile>
            }
            </nav>
        </Container>
    )
}