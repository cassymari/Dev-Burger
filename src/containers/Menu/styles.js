import styled from 'styled-components';
import BannerHamburguer from '../../assets/background-menu.svg';
import Background from '../../assets/background.png';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
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

  width: 100%;
  height: 480px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url('${BannerHamburguer}') no-repeat;
  background-color: ${({ theme }) => theme.mainBlack};
  background-position: center;
  background-size: cover;

  h1 {
    position: absolute;
    top: 30%;
    right: 20%;

    margin: 0;

    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 0.82;
    color: ${({ theme }) => theme.white};

    span {
      display: block;
      margin-top: 12px;

      color: ${({ theme }) => theme.white};
      font-family: sans-serif;
      font-size: 20px;
      line-height: 1.2;
    }
  }

  @media (max-width: 1024px) {
    height: 390px;

    h1 {
      right: 10%;
      font-size: 64px;

      span {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 768px) {
    height: 320px;
    background-position: 35% center;

    h1 {
      top: auto;
      right: 24px;
      bottom: 34px;

      max-width: 260px;

      font-size: 48px;
      line-height: 0.9;
      text-align: right;

      span {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 480px) {
    height: 270px;

    h1 {
      right: 16px;
      bottom: 24px;
      max-width: 210px;
      font-size: 38px;

      span {
        font-size: 13px;
      }
    }
  }
`;

export const CategoryMenu = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 0 20px 10px;

  display: flex;
  justify-content: center;
  gap: 36px;

  box-sizing: border-box;

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 22px;

    overflow-x: auto;
    scrollbar-width: thin;
  }

  @media (max-width: 480px) {
    gap: 18px;
    padding: 0 16px 10px;
  }
`;

export const CategoryButton = styled(Link)`
  flex: 0 0 auto;

  padding-bottom: 5px;

  border: none;
  border-bottom: ${({ $isActiveCategory, theme }) =>
    $isActiveCategory
      ? `3px solid ${theme.purple}`
      : '3px solid transparent'};

  background: none;
  color: ${({ $isActiveCategory, theme }) =>
    $isActiveCategory ? theme.purple : theme.black};

  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 40px auto;
  padding: 24px 40px 50px;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 20px 16px 40px;
    gap: 22px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 2;

  width: 55px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid ${({ theme }) => theme.orange};
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.orange};

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.orange};
    color: #ffffff;
    transform: rotate(-15deg);
  }

  @media (max-width: 768px) {
    top: 18px;
    left: 18px;

    width: 44px;
    height: 44px;
  }
`;