import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 600px) {
    display: block;
    width: 100%;
    background: transparent;
  }
`;

export const Header = styled.thead`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Body = styled.tbody`
  @media (max-width: 600px) {
    display: block;
    width: 100%;
  }
`;

export const Tr = styled.tr`
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 70px minmax(0, 1fr);
    gap: 8px 14px;

    width: 100%;
    margin-bottom: 16px;
    padding: 16px;

    border-radius: 14px;
    background-color: ${({ theme }) => theme.white};

    box-sizing: border-box;
  }
`;

export const Th = styled.th`
  padding: 16px;
  text-align: left;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.secondBlack};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  &:last-child {
    border-top-right-radius: 20px;
  }

  &:first-child {
    border-top-left-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;

  color: ${({ theme }) => theme.secondBlack};
  font-weight: 500;
  line-height: 1.15;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    width: 100%;
    min-width: 0;
    padding: 5px 0;

    box-sizing: border-box;

    &::before {
      content: attr(data-label);
      flex-shrink: 0;

      font-weight: 700;
      color: ${({ theme }) => theme.secondBlack};
    }

    &:first-child {
      grid-column: 1;
      grid-row: 1 / span 5;

      align-items: flex-start;
      justify-content: center;

      &::before {
        display: none;
      }
    }

    &:not(:first-child) {
      grid-column: 2;
    }

    &:last-child {
      justify-content: flex-end;

      &::before {
        display: none;
      }
    }
  }
`;