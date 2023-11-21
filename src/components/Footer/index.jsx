import { ContainerFooter } from "./styled";
import { Copyright, BehanceLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
export function Footer() {
    return (
        <ContainerFooter>
            <p>
                <Copyright size={18} color="#fcfcfc" />
                2023 MedVision360 | Todos os direitos reservados
            </p>
            <div>
                <a
                    href="https://www.behance.net/cibelerodriguesl"
                    target="_blank"
                    alt="" rel="noreferrer"
                >
                    <BehanceLogo size={32} color="#FFF" weight="bold" />
                </a>
               
                <a
                    href="https://www.linkedin.com/in/cibelerodriguesl/"
                    target="_blank"
                    alt="" rel="noreferrer"
                >
                    <LinkedinLogo size={32} color="#FFF" weight="fill" />
                </a>
                <a
                    href="https://github.com/cibelerodriguesl/med-vision-360"
                    target="_blank"
                    alt="" rel="noreferrer"
                >
                <GithubLogo size={32} color="#FFF" weight="fill" />
                </a>
            </div>
        </ContainerFooter>
    )
}