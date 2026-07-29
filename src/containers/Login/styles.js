import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.png';
import Background from '../../assets/background2.svg';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  min-height: 100vh;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    max-width: 450px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 220px;
    padding: 24px;

    img {
      width: 55%;
      max-width: 220px;
    }
  }

  @media (max-width: 480px) {
    min-height: 180px;

    img {
      width: 65%;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;
  width: 50%;

  padding: 40px 24px;
  box-sizing: border-box;

  background: url('${Background}');
  background-color: #1e1e1e;

  p {
    color: ${({ theme }) => theme.white};
    font-size: 18px;
    font-weight: 800;
    text-align: center;

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    padding: 32px 20px 48px;
  }
`;

export const Title = styled.h2`
  font-family: roadRageFont;
  text-align: center;
  font-size: 40px;
  color: #ffffff;
  margin: 0;

  span {
    display: block;
    color: ${({ theme }) => theme.purple};
    font-family: roadRageFont;
  }

  @media (max-width: 768px) {
    font-size: 34px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px 0;
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    gap: 14px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 8px;
    padding: 0 16px;
    font-size: 16px;
    box-sizing: border-box;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }

  p {
    margin: 0;
    min-height: 16px;
    font-size: 14px;
    line-height: 1.2;
    color: ${({ theme }) => theme.darkRed};
    font-weight: 600;
  }

  .password-container {
    position: relative;
    width: 100%;
  }

  .password-toggle {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);

    border: none;
    background: transparent;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 22px;
    color: #666;
  }
`;

export const Link = styled(ReactLink)`
  color: ${({ theme }) => theme.white};
  text-decoration: underline;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.purple};
  }
`;