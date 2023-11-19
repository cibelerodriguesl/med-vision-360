import { Container } from "./styled";

export function CardMvv({ title, description, icon }) {
    return (
        <Container>
            <div>
                <h1> {icon} {title}</h1>
                <p> {description} </p>
            </div>
        </Container>
    )
}