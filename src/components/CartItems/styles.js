import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 16px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 64px;
    height: 64px;
    border-radius: 12px;
  }

  @media (max-width: 400px) {
    width: 54px;
    height: 54px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.white};
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.purple};

    cursor: pointer;
    transition: background-color 0.4s;

    &:hover {
      background-color: #7a3e8c;
    }
  }

  @media (max-width: 600px) {
    gap: 8px;

    button {
      width: 28px;
      height: 28px;
    }
  }
`;

export const EmptyCart = styled.p`
  width: 100%;
  padding: 32px 16px;

  font-size: 20px;
  text-align: center;
  font-weight: bold;

  box-sizing: border-box;

  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

export const TotalPrice = styled.p`
  margin: 0;
  font-weight: bold;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TrashImagem = styled.img`
  width: 20px;
  height: 20px;

  cursor: pointer;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;