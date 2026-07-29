import styled from 'styled-components';

export {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Link,
} from '../Login/styles';

export const ResultContainer = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 20px;
  margin-top: 8px;

  border: 1px solid ${({ theme }) => theme.purple};
  border-radius: 12px;

  background: rgba(0, 0, 0, 0.35);
  box-sizing: border-box;

  p {
    margin: 0;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const ResultTitle = styled.h3`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.purple};
  font-size: 20px;
`;

export const ResetLink = styled.div`
  width: 100%;
  max-height: 110px;

  padding: 12px;

  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);

  color: #ffffff;
  font-size: 13px;
  line-height: 1.4;

  word-break: break-all;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const ResultButtons = styled.div`
  display: flex;
  gap: 10px;

  button {
    flex: 1;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;