import { ContainerLabel } from "./styled";

export function Input({ name, prefix }) {
    return (
        <ContainerLabel>
            {name}
            <input type="text" placeholder={prefix} />
        </ContainerLabel>
    )
}