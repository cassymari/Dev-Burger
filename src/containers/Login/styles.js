import styled from "styled-components"
import BackgroundLogin from '../../assets/background-login.png'
import Background from '../../assets/background2.svg'
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div `
display: flex;
height: 100vh;
width: 100vw;

`;

export const LeftContainer = styled.div `
background: url('${BackgroundLogin}');
background-size: cover;
background-position: center;

height: 100%;
width: 100%;
max-width: 50%;

display: flex;
align-items: center;
justify-content: center;

img{
    width: 80%;
}
`;

export const RightContainer = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

height: 100%;
width: 100%;
max-width: 50%;
background: url('${Background}');
background-color: #1e1e1e;

p{
    color: ${props => props.theme.white};
    font-size: 18px;
    font-weight: 800;

    a{
        text-decoration: underline;

    }
}
`;

export const Title = styled.h2`
  font-family: roadRageFont;
  text-align: center;
  font-size: 40px;
  color: #FFFFFF;
  margin: 0;
 

  span{
    display: block;
    color: ${props => props.theme.purple};
    font-family: roadRageFont;
   
  }
`;

export const Form = styled.form `
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;
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

  .password-container {
    position: relative;
    width: 100%;

    input {
      padding-right: 50px;
    }
  }

  .password-toggle {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
    border: none;
    background: transparent;

    color: #666;
    font-size: 22px;
    cursor: pointer;
  }

  .password-toggle:hover {
    color: ${props => props.theme.purple};
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: ${props => props.theme.darkRed};
    font-weight: 600;
    height: 10%;
  }
`;

export const Link = styled(ReactLink)`
  color: ${props => props.theme.white};
  text-decoration: underline;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.purple};
  }
`;






