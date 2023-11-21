
import { Container } from "./styled";

export function Button({ primary, secondary, children, onClick }) {
    return (
        <Container primary={primary} secondary={secondary} onClick={onClick}>
            {children}
        </Container>
    )
}
