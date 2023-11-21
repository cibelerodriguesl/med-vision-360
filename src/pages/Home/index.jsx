import { Header } from "../../components/Header";
import {
    Container,
    ContainerSection,
    ChildContainerSection,
    ContainerServices,
    ContainerDeveloper,
} from "./styled";
import logo2 from "../../assets/logo2.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import { Card } from "../../components/Card";
import { CardService } from "../../components/CardService";
import {
    BehanceLogo,
    GithubLogo,
    LinkedinLogo,
    Target,
    Eye,
    FirstAid,
} from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";

export function Home() {
    //exemplo de um get do banco de dados
    // const banco_de_dados = [
    //     {
    //         id: 0,
    //         title: 'titulo 0',
    //         description: 'description title 0'
    //     },
    //     {
    //         id: 1,
    //         title: 'titulo 1',
    //         description: 'description title 1'
    //     },
    //     {
    //         id: 2,
    //         title: 'titulo 2',
    //         description: 'description title 2'
    //     },
    //     {
    //         id: 3,
    //         title: 'titulo 3',
    //         description: 'description title 3'
    //     },
    //     {
    //         id: 4,
    //         title: 'titulo 4',
    //         description: 'description title 4'
    //     },
    //     {
    //         id: 5,
    //         title: 'Reunião sabado',
    //         description: 'preciso conversar sobre um projeto que sera realizado dia'
    //     },
    // ]

    return (
        <Container>
            <Header />

            {/* SECTION PAI */}
            <ContainerSection id="about">
                <img src={logo2} alt="img" />
                <article>
                    <h1>MedVison 360</h1>
                    <p>
                        Descubra o MedVision 360, onde oferecemos não apenas uma visão, mas
                        uma experiência completa, transcendendo fronteiras para remodelar a
                        educação cirúrgica. Explore conosco um universo de aprendizado
                        imersivo e tecnologicamente avançado, onde a visão, a prática e a
                        tecnologia convergem para criar uma experiência educacional
                        incomparável.
                    </p>
                    <img src={img1} alt="zói" />
                </article>
            </ContainerSection>

            <ContainerSection>
                <img src={img2} alt="imagem" />

                <article>
                    <Card
                        icon={<Target size={32} color="#F25C05" weight="bold" />}
                        title="Missão"
                        description="Ser uma plataforma educacional que capacita cirurgiões e estudantes de medicina a atingirem a excelência, por meio de uma experiência de aprendizado inovadora e, visualização cirúrgica de alta qualidade."
                    />
                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <Card
                            icon={<Eye size={32} color="#F25C05" weight="bold" />}
                            title="Visão"
                            description="Ser reconhecido globalmente como líder em educação cirúrgica e pesquisa, impulsionando a inovação no campo da medicina por meio de soluções avançadas de aprendizado, impulsionando descobertas e práticas revolucionárias."
                        />
                    </div>
                    <Card
                        icon={<FirstAid size={32} color="#F25C05" weight="bold" />}
                        title="Valores"
                        description="Cultivamos uma paixão inabalável pelo conhecimento, incentivando a busca constante por aprendizado e aprimoramento profissional. Proporcionando experiências únicas aos usuários."
                    />
                </article>
            </ContainerSection>

            {/* SECTION FILHA, ESTENDENDO ESTILOS */}
            <h2 id="product">Nosso Produto</h2>
            <ChildContainerSection>
                <img src={img3} alt="img" />
                <article>
                    <Card
                        title="Descubra uma revolução no Ensino e Pesquisa"
                        description="Transformando a maneira como você aprende e leciona. Oferecemos uma experiência única que combina tecnologia com métodos de ensino dinâmicos, capacitando a explorar e aprimorar suas habilidades."
                    />
                    <Card
                        title="Visualize, Aprenda, e Avance"
                        description="Nosso produto vai além do tradicional, proporcionando uma visão detalhada do procedimento cirúrgico, permitindo que você mergulhe de forma interativa. Elevando o aprendizado médico a novos patamares."
                    />
                </article>
            </ChildContainerSection>

            <h2 id="service">Serviços</h2>
            <ContainerServices>
                <CardService
                    title="Live e Gravações"
                    description="Disponibilize uma plataforma de transmissão ao vivo integrada, permitindo que os professores usem óculos inteligentes para transmitir aulas em tempo ou gravá-las."
                />
                <CardService
                    title="Galeria de Aulas"
                    description="Explore sua própria galeria de vídeos, para enriquecer seu conhecimento cirúrgico. Faça anotações  para aprimorar sua compreensão sobre cada procedimento."
                />
                <CardService
                    title="Mentorias"
                    description="Participe de aulas ao vivo com seus  professor e cirurgiões, que oferecerão orientação personalizada em sua jornada educacional e profissional."
                />
            </ContainerServices>

            {/* EXEMPLO COMO MOSTRAR OS ITEMS RETORNADOS DO BANCO DE DADOS DENTRO DE UM COMPONENTE*/}
            {/* <div>

            {
                banco_de_dados && banco_de_dados?.map(item => {
                    return (
                        <>
                            <Card
                                title={item.title}
                                description={item.description}
                            />
                        </>
                    )
                })
            }

        </div> */}
            <h2 id="devs">Nossas Desenvolvedoras</h2>
            <ContainerDeveloper>
                <Card
                    redes
                    iconPrimary={
                        <a
                            href="https://www.linkedin.com/in/perezbeatriz/"
                            target="_blank"
                            alt="linkedin" rel="noreferrer"
                        >
                            <LinkedinLogo size={32} color="#FFF" weight="fill" />
                        </a>
                    }
                    iconSecondary={
                        <a href="https://github.com/Bee-Pirez" target="_blank" alt="" rel="noreferrer">
                            <GithubLogo size={32} color="#FFF" weight="fill" />
                        </a>
                    }
                    image={img4}
                    title="Beatriz Perez"
                    description="Estudante de desenvolvimento full stack, entusiasta apaixonada por tecnologia, e cursando Superior em Sistemas para Internet na FIAP. Sempre em busca do aprendizado e evolução constante."
                />
                <Card
                    redes
                    image={img5}
                    iconPrimary={
                        <a
                            href="https://www.linkedin.com/in/cibelerodriguesl/"
                            target="_blank"
                            alt="" rel="noreferrer"
                        >
                            <LinkedinLogo size={32} color="#FFF" weight="fill" />
                        </a>
                    }
                    iconSecondary={
                        <a
                            href="https://www.behance.net/cibelerodriguesl"
                            target="_blank"
                            alt="" rel="noreferrer"
                        >
                            <BehanceLogo size={32} color="#FFF" weight="bold" />
                        </a>
                    }
                    title="Cibele Rodrigues"
                    description="Técnico em Comunicação Visual pela Etec Albert Einsten, cursando Superior em Tecnologia de Sistemas para Internet na FIAP, e estagiando como Designer. Aprofundando conhecimentos na área de UX/UI Design."
                />
            </ContainerDeveloper>
            <Footer />
        </Container>
    );
}
