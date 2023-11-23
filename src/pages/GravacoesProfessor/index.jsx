import {
    Container,
    ContainerSection,
    
} from "./styled";
import { Footer } from "../../components/Footer";
import VideoRecorder from "../../components/VideoRecorder";
import HeaderUser from "../../components/HeaderUser";
import GalleryCards from "../../components/GalleryCard";
import { ContainerSectionCard } from "../GaleriaProfessor/styled";

export function GravacoesProfessor() {
//   const navLinks = [
//     { label: 'Gravações', href: '#about' },
//     { label: 'Galeria', href: '#product' },
//     { label: 'Perfil', href: '#product' },
//   ];

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
      <ContainerSection>
        <VideoRecorder />
      </ContainerSection>
      <ContainerSectionCard>
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/-SKYspW7ZzU?si=JcyUkiZ_5gW_Yf-i"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/-SKYspW7ZzU?si=JcyUkiZ_5gW_Yf-i"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/-SKYspW7ZzU?si=JcyUkiZ_5gW_Yf-i"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/-SKYspW7ZzU?si=JcyUkiZ_5gW_Yf-i"
                      professorName="Nome do Professor X"
                   videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/-SKYspW7ZzU?si=JcyUkiZ_5gW_Yf-i"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/-SKYspW7ZzU?si=JcyUkiZ_5gW_Yf-i"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/-SKYspW7ZzU?si=JcyUkiZ_5gW_Yf-i"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/-SKYspW7ZzU?si=JcyUkiZ_5gW_Yf-i"
                      professorName="Nome do Professor X"
                   videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/-SKYspW7ZzU?si=JcyUkiZ_5gW_Yf-i"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/-SKYspW7ZzU?si=JcyUkiZ_5gW_Yf-i"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
              </ContainerSectionCard>
      <Footer />
    </Container>
  );
}