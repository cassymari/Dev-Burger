import styled from "styled-components";

export const ProductImage = styled.img`
height: 80px;
width: 80px;
border-radius: 16px;
`

export const ButtonGroup = styled.div`
display: flex;
align-items: center;
gap: 12px;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: ${props => props.theme.white};
    border-radius: 4px;
    background-color: ${props => props.theme.purple};
    transition: all 0.4s;
    border: none;

    &:hover{
        background-color: #7a3e8c;
    }
}
`

export const EmptyCart = styled.p`
font-size: 20px;
text-align: center;
font-weight: bold;
`

export const TotalPrice = styled.p`
font-weight: bold;
`

export const TrashImagem = styled.img`
width: 20px;
height: 20px;
cursor: pointer;

`