import { Container } from "./styled";

// eslint-disable-next-line react/prop-types
export function CardService({ title, description }) {
  return (
    <Container>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Container>
  );
}
