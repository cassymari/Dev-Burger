import styled from 'styled-components';
import Texture from '../../assets/texture.svg';
import Background from '../../assets/background.png';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  background:
    linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
`;

export const Banner = styled.div`
  position: relative;

  height: 180px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url('${Texture}');
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.mainBlack};

  img {
    width: auto;
    height: 130px;
    max-width: 80%;
  }

  @media (max-width: 768px) {
    height: 140px;

    img {
      height: 100px;
    }
  }

  @media (max-width: 480px) {
    height: 115px;

    img {
      height: 82px;
    }
  }
`;

export const Title = styled.h1`
  position: relative;

  margin: 0;
  padding: 24px 16px 12px;

  color: ${({ theme }) => theme.gren};
  font-size: 32px;
  font-weight: 800;
  text-align: center;

  &::after {
    position: absolute;
    left: 50%;
    bottom: 0;

    width: 56px;
    height: 4px;

    content: '';
    transform: translateX(-50%);

    background-color: ${({ theme }) => theme.gren};
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 30%);
  gap: 40px;

  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 28px 20px 40px;
  }

  @media (max-width: 480px) {
    padding: 22px 12px 32px;
  }
`;