import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import { Container, MenuMobile, ContainerMobile, ContainerDesktop, NavLinkContainer } from './styled';
import logo from '../../assets/logo1.svg';
import { Button } from '../Button';

const HeaderUser = ({ navLinks, rota1, descriptionRoute1, rota2, descriptionRoute2, rota3, descriptionRoute3 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate('/');
  };


  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <nav>
        <MenuMobile>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </MenuMobile>
        {isOpen === false ? (
          <ContainerDesktop>
            <img src={logo} alt="logo" />
            {/* <NavLinkContainer>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </NavLinkContainer> */}
            <Link to={`${rota1}`}>
              {descriptionRoute1}
            </Link>
            <Link to={`${rota2}`}>
              {descriptionRoute2}
            </Link>
            <Link to={`${rota3}`}>
              {descriptionRoute3}
            </Link>
            <div>
              <Button onClick={handleNextPage}>Sair</Button>
            </div>
          </ContainerDesktop>
        ) : (
          <ContainerMobile>
            <img src={logo} alt="logo" />
            <NavLinkContainer>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={closeMenu}>
                    <button>{link.label}</button>
                  </a>
                </li>
              ))}
            </NavLinkContainer>
            <div>
              <Button onClick={handleNextPage}>Sair</Button>
            </div>
          </ContainerMobile>
        )}
      </nav>
    </Container>
  );
};

export default HeaderUser;