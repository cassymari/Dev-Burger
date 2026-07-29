import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.png';
import Background from '../../assets/background.png';
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
  width: 50%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  img {
    width: 80%;
    max-width: 450px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 220px;
    padding: 24px;
    box-sizing: border-box;

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
  width: 50%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 40px 24px;
  box-sizing: border-box;

  background: url('${Background}');
  background-color: #1e1e1e;
  background-size: cover;
  background-position: center;

  > p {
    margin: 8px 0 0;

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

  @media (max-width: 480px) {
    padding: 28px 16px 40px;

    > p {
      font-size: 16px;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;

  font-family: roadRageFont;
  text-align: center;
  font-size: 40px;
  color: ${({ theme }) => theme.purple};

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
  gap: 16px;

  width: 100%;
  max-width: 400px;
  padding: 20px 0;

  box-sizing: border-box;

  @media (max-width: 480px) {
    gap: 12px;
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

    padding: 0 16px;

    border: none;
    border-radius: 8px;

    font-size: 16px;
    box-sizing: border-box;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }

  p {
    min-height: 16px;
    margin: 0;

    font-size: 14px;
    line-height: 1.2;
    color: ${({ theme }) => theme.darkRed};
    font-weight: 600;
  }

  @media (max-width: 480px) {
    input {
      height: 52px;
      font-size: 15px;
    }

    label {
      font-size: 16px;
    }
  }
`;

export const Link = styled(ReactLink)`
  color: ${({ theme }) => theme.white};
  text-decoration: underline;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.purple};
  }
`;