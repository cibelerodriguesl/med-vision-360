import { Container } from "./styled";

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
