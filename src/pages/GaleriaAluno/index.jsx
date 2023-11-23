import {
    Container,
    ContainerSection,
} from "./styled";
import { Footer } from "../../components/Footer";
import GalleryCards from "../../components/GalleryCard";
import HeaderUser from "../../components/HeaderUser";

export function GaleriaAluno() {
    // const navLinks = [
    //     { label: 'Ao Vivo', href: '#about' },
    //     { label: 'Galeria', href: '#product' },
    //     { label: 'Perfil', href: '#product' },
    //   ];

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
                <ContainerSection>
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
                </ContainerSection>
            <Footer />
        </Container>
    );
}