import React from 'react';
import { Input } from '../../components/Input';
import { Footer } from "../../components/Footer";
import HeaderUser from "../../components/HeaderUser";

import { Container, FormContainer, InputContainer, UpdateButton } from './styled'; 

export function PerfilProfessor() {
  // const navLinks = [
  //   { label: 'Gravações', href: '#about' },
  //   { label: 'Galeria', href: '#product' },
  //   { label: 'Perfil', href: '#product' },
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <HeaderUser
             rota1={'/GravacoesProfessor'} 
             descriptionRoute1={'Gravações'}
             rota2={'/GaleriaProfessor'}
             descriptionRoute2={'Galeria'}
             rota3={'/PerfilProfessor'}
             descriptionRoute3={'Perfil'}
            />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Input name="Nome completo" prefix="Isabela Moraes Dantas" />
            <Input name="E-mail" prefix="isamoraes@empresa.com" />
            <Input name="Alterar senha" prefix="DIgite sua nova senha" />
          </InputContainer>
          <InputContainer>
            {/* Adicione mais campos conforme necessário */}
            <Input name="Credencial" prefix="123456789/SP" />
            <Input name="N° de telefone" prefix="12 3456-7890" />
            <Input name="Confirmar senha" prefix="Confirme sua senha" />
          </InputContainer>
        </form>
        <UpdateButton type="submit">Atualizar</UpdateButton>
      </FormContainer>
      <Footer />
    </Container>
  );
}