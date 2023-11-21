
import { Container } from "./styled";

// eslint-disable-next-line react/prop-types
export function Button({ primary, secondary, children, onClick }) {
    return (
        <Container primary={primary} secondary={secondary} onClick={onClick}>
            {children}
        </Container>
    )
}
