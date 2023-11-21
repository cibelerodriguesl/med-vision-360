import { Container } from "./styled";

export function Card({ title, description, icon, redes, iconSecondary, iconPrimary, image }) {
    return (
        <Container>
            <div>
                {
                    redes ?
                        <>
                            <h3>
                                <div>
                                    <img src={image} alt="profile" />
                                    {title}
                                </div>

                                <div>
                                    {iconPrimary} {iconSecondary}
                                </div>
                            </h3>
                            <p> {description} </p>
                        </>
                        :
                        <>
                            <h3> {icon} {title}</h3>
                            <p> {description} </p>
                        </>
                }
            </div>
        </Container>
    )
}