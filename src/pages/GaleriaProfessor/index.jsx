import {
  Container,
  ContainerSection,
} from "./styled";
import { Footer } from "../../components/Footer";
import GalleryCards from "../../components/GalleryCard";
import HeaderUser from "../../components/HeaderUser";

export function GaleriaProfessor() {
  const navLinks = [
    { label: 'Gravações', href: '#about' },
    { label: 'Galeria', href: '#product' },
    { label: 'Perfil', href: '#product' },
  ];

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
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                   videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                   videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                   videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                   videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
                  <GalleryCards
                      title="Aula1"
                      videoUrl="https://www.youtube.com/embed/yALusa-mosc?si=8USDxwCSyCvPga2O"
                      professorName="Nome do Professor X"
                      videoDate="Dia 02 de janeiro de 2023"
                  />
              </ContainerSection>
          <Footer />
      </Container>
  );
}