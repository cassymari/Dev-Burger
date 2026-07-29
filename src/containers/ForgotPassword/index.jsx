import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
  ResultContainer,
  ResultTitle,
  ResetLink,
  ResultButtons,
} from './styles';

export function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [resetLink, setResetLink] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      toast.error('Digite seu e-mail.');
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post('/forgot-password', {
        email: email.trim().toLowerCase(),
      });

      toast.success(data.message);

      if (data.resetLink) {
        setResetLink(data.resetLink);
      }
    } catch (error) {
      console.log('Erro ao gerar link:', error.response?.data);

      toast.error(
        error.response?.data?.message ||
          error.response?.data?.errors?.[0] ||
          'Não foi possível gerar o link.',
      );
    } finally {
      setLoading(false);
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(resetLink);
      toast.success('Link copiado!');
    } catch {
      toast.error('Não foi possível copiar o link.');
    }
  }

  function openResetPage() {
    const url = new URL(resetLink);

    navigate(`${url.pathname}${url.search}`);
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo Dev Burger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Recupere sua <span>senha</span>
        </Title>

        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <label htmlFor="email">E-mail</label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="seuemail@email.com"
              autoComplete="email"
            />
          </InputContainer>

          <Button type="submit" disabled={loading}>
            {loading ? 'Gerando...' : 'Gerar link'}
          </Button>
        </Form>

        {resetLink && (
          <ResultContainer>
            <ResultTitle>
              ✅ Link de recuperação gerado!
            </ResultTitle>

            <p>
              O e-mail foi localizado e um link de redefinição foi criado.
            </p>

            <ResetLink>{resetLink}</ResetLink>

            <ResultButtons>
              <Button type="button" onClick={copyLink}>
                📋 Copiar link
              </Button>

              <Button type="button" onClick={openResetPage}>
                🚀 Abrir página
              </Button>
            </ResultButtons>
          </ResultContainer>
        )}

        <p>
          <Link to="/login">Voltar para o login</Link>
        </p>
      </RightContainer>
    </Container>
  );
}