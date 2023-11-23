import React from 'react';
import { Input } from '../../components/Input';
import { Footer } from "../../components/Footer";
import HeaderUser from "../../components/HeaderUser";

import { Container, FormContainer, InputContainer, UpdateButton } from './styled'; 

export function PerfilAluno() {
  // const navLinks = [
  //   { label: 'Ao Vivo', href: '#about' },
  //   { label: 'Galeria', href: '#product' },
  //   { label: 'Perfil', href: '#product' },
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <HeaderUser
             rota1={'/AulaAluno'} 
             descriptionRoute1={'Ao vivo'}
             rota2={'/GaleriaAluno'}
             descriptionRoute2={'Galeria'}
             rota3={'/PerfilAluno'}
             descriptionRoute3={'Perfil'}
            />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Input name="Nome completo" prefix="Bárbara Alvares Sanchez" />
            <Input name="Turma" prefix="1TINOA" />
            <Input name="N° de Telefone" prefix="12 3456-7890" />
            <Input name="Alterar senha" prefix="DIgite sua nova senha" />
          </InputContainer>
          <InputContainer>
            {/* Adicione mais campos conforme necessário */}
            <Input name="RM" prefix="123456" />
            <Input name="E-mail" prefix="barbaraAlves@domínio.com" />
            <Input name="CPF" prefix="123.456.789/01" />
            <Input name="Confirmar Senha" prefix="Confirme sua senha" />
          </InputContainer>
        </form>
        <UpdateButton type="submit">Atualizar</UpdateButton>
      </FormContainer>
      <Footer />
    </Container>
  );
}
