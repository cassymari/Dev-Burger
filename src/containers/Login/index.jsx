import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api.js'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';


import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link } from "./styles";

import { Button } from '../../components/Button'
import Logo from "../../assets/Logo2.svg"



export function Login() {

    const navigate = useNavigate();
    const { putUserData } = useUser();
    const [showPassword, setShowPassword] = useState(false);

    const schema = yup.object({
        email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
        password: yup
            .string()
            .min(6, 'A senha deve ter pelo menos 6 caracteres')
            .required('Digite uma senha')
    })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });



    const onSubmit = async (data) => {
        const { data: userData } = await toast.promise(api.post('/sessions', {
            email: data.email,
            password: data.password,
        }),

            {
                pending: 'Verificando seus Dados',
                success: {
                    render() {
                        setTimeout(() => {
                            if (userData?.admin) {
                                navigate('/admin/pedidos')
                            } else {
                                navigate('/home')
                            }
                        }, 2000);
                        return 'Seja Bem-Vindo(a) 👌'
                    }
                },
                error: 'E-mail ou senha incorretos 🤯'
            }

        )

        putUserData(userData)


    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo-devburger" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span> Dev Burguer!</span><br />
                    Acesse com seu<span> Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>

                        <input
                            type="email"
                            {...register('email')}
                        />

                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>

                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                {...register('password')}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword(previousValue => !previousValue)
                                }
                                aria-label={
                                    showPassword ? 'Ocultar senha' : 'Mostrar senha'
                                }
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>

                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Link to="/esqueci-senha">
                        Esqueceu a senha?
                    </Link>

                    <Button type="submit">Entrar</Button>
                </Form>

                <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p>
            </RightContainer>
        </Container>
    );
}