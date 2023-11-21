import { ContainerLabel } from "./styled";

// eslint-disable-next-line react/prop-types
export function Input({ name, prefix }) {
    return (
        <ContainerLabel>
            {name}
            <input type="text" placeholder={prefix} />
        </ContainerLabel>
    )
}