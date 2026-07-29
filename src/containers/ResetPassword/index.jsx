import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { api } from '../../services/api';
import { Button } from '../../components/Button';

import Logo from '../../assets/Logo2.svg';

import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Link,
} from '../Login/styles';

export function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!token) {
      toast.error('Token de recuperação não encontrado.');
      return;
    }

    if (password.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (password !== passwordConfirmation) {
      toast.error('As senhas precisam ser iguais.');
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post('/reset-password', {
        token,
        password,
        passwordConfirmation,
      });

      toast.success(data.message);

      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.response?.data?.errors?.[0] ||
          'Não foi possível redefinir a senha.',
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo Dev Burger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Crie uma nova <span>senha</span>
        </Title>

        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <label htmlFor="password">Nova senha</label>

            <div className="password-container">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={event => setPassword(event.target.value)}
                autoComplete="new-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(previous => !previous)
                }
                aria-label={
                  showPassword ? 'Ocultar senha' : 'Mostrar senha'
                }
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </InputContainer>

          <InputContainer>
            <label htmlFor="passwordConfirmation">
              Confirmar nova senha
            </label>

            <div className="password-container">
              <input
                id="passwordConfirmation"
                type={showConfirmation ? 'text' : 'password'}
                value={passwordConfirmation}
                onChange={event =>
                  setPasswordConfirmation(event.target.value)
                }
                autoComplete="new-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmation(previous => !previous)
                }
                aria-label={
                  showConfirmation
                    ? 'Ocultar senha'
                    : 'Mostrar senha'
                }
              >
                {showConfirmation ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </InputContainer>

          <Button type="submit" disabled={loading}>
            {loading ? 'Redefinindo...' : 'Redefinir senha'}
          </Button>
        </Form>

        <p>
          <Link to="/login">Voltar para o login</Link>
        </p>
      </RightContainer>
    </Container>
  );
}