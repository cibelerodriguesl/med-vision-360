import styled from 'styled-components'
export const ContainerFooter = styled.footer`
display: flex;
align-items: center;
justify-content: space-between;
  padding-bottom: 1rem;
  padding-left: 10%;
  padding-right: 10%;
  flex-wrap: wrap;
p {
    color: ${(props) => props.theme.white};
    display: flex;
    gap: 15px;
    align-items: center;
}
div {
    display: flex;
    align-items: center;
    gap: 16px;
}
`