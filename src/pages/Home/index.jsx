import { Header } from '../../components/Header'
import { Container, ContainerSection, ChildContainerSection } from './styled'
import logo2 from '../../assets/logo2.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import { CardMvv } from '../../components/CardMvv'
export function Home() {
    return (
        <Container>
            <Header />
            {/* SECTION PAI */}
            <ContainerSection>
                <img src={logo2} alt="img" />
                <article>
                    <h1>MedVison 360</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit. nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. . nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis
                    </p>
                    <img src={img1} alt="zói" />
                </article>
            </ContainerSection>


            <ContainerSection>
                <img src={img2} alt="imagem" />

                <article>
                    <CardMvv
                        icon="icone"
                        title="Missão"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit. nec "
                    />
                    <div style={{display: 'flex', justifyContent: 'end'}}>
                    <CardMvv
                        icon="icone"
                        title="Missão"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit. nec "
                        />
                        </div>
                    <CardMvv
                        icon="icone"
                        title="Missão"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit. nec "
                    />
                </article>
            </ContainerSection>


            {/* SECTION FILHA, ESTENDENDO ESTILOS */}
            <ChildContainerSection>
                <img src={logo2} alt="img" />
                <article>
                    <CardMvv
                        title="batata"
                        description="loremkajsdlk ajskhdajkh skjhsadkjhas kjs jk"
                    />
                    <CardMvv
                        title="pipoca"
                        description="asdlkjaslkdjaslkdj"
                    />
                </article>
            </ChildContainerSection>

        </Container>
    )
}
