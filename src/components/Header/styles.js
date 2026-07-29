import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-height: 72px;
  padding: 0 56px;

  background-color: ${({ theme }) => theme.mainBlack};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 72px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    min-height: auto;
    flex-direction: column;
    gap: 14px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 72px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    hr {
      height: 24px;
      margin: 0;
      border: 1px solid ${({ theme }) => theme.darkGray};
    }
  }

  @media (max-width: 768px) {
    min-height: auto;
    width: 100%;

    div {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    div {
      gap: 12px;
    }
  }
`;

export const HeaderLink = styled(Link)`
  position: relative;

  display: flex;
  align-items: center;
  gap: 8px;

  padding-bottom: 5px;

  color: ${({ $isActive, theme }) =>
    $isActive ? theme.purple : theme.white};

  border-bottom: ${({ $isActive, theme }) =>
    $isActive ? `1px solid ${theme.purple}` : '1px solid transparent'};

  text-decoration: none;
  font-size: 14px;
  white-space: nowrap;

  transition:
    color 200ms,
    border-color 200ms;

  &:hover {
    color: ${({ theme }) => theme.purple};
  }

  @media (max-width: 480px) {
    font-size: 13px;
    gap: 5px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 480px) {
    align-items: stretch;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 14px;

  p {
    margin: 0;

    color: ${({ theme }) => theme.white};
    line-height: 1.2;
    font-weight: 300;

    span {
      font-weight: 700;
      color: ${({ theme }) => theme.purple};
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Logout = styled.button`
  padding: 0;

  color: ${({ theme }) => theme.red};
  font-weight: 700;

  background-color: transparent;
  border: none;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -10px;
  left: 14px;

  min-width: 18px;
  height: 18px;
  padding: 0 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  background: ${({ theme }) => theme.purple};
  color: #ffffff;

  font-size: 11px;
  font-weight: 700;
  line-height: 1;

  box-sizing: border-box;
`;