import {
    Container,
    ContainerSection,
    ContainerVideo,
    ContainerCard
} from "./styled";
import { Footer } from "../../components/Footer";
import NoteList from "../../components/Notes";
import GalleryCards from "../../components/GalleryCard";
import HeaderUser from "../../components/HeaderUser";

export function AulaAluno() {
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

            {/* SECTION PAI */}
            <ContainerSection>
                <ContainerVideo>
                    <iframe
                        src="https://www.youtube.com/embed/fAmKjRlkFE0?si=ygbkHOTumJ8SpnU7"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </ContainerVideo>
                <NoteList />
                <ContainerCard>
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
                </ContainerCard>
            </ContainerSection>

    
            <Footer />
        </Container>
    );
}
