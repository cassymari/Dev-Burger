import {
    Container,
    Navigation,
    HeaderLink,
    Options,
    Profile,
    Logout,
    LinkContainer,
    Content,
    CartBadge,
} from './styles'

import { useCart } from '../../hooks/CartContext';
import { UserCircleIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext'


export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser()

    const { cartProducts } = useCart();

    const cartQuantity = cartProducts.reduce(
        (total, product) => total + product.quantity,
        0,
    );

    const { pathname } = useLocation();

    function logoutUser() {
        logout();
        navigate('/login');
    }


    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to='/home' $isActive={pathname === '/home'}>
                            Home
                        </HeaderLink>
                        <hr></hr>
                        <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircleIcon color='#fff' size={24} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span>
                            </p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <HeaderLink
                            to="/carrinho"
                            $isActive={pathname === '/carrinho'}
                        >
                            <ShoppingCartIcon color="#fff" size={24} />

                            {cartQuantity > 0 && (
                                <CartBadge>{cartQuantity}</CartBadge>
                            )}

                            Carrinho
                        </HeaderLink>
                    </LinkContainer>
                </Options>

            </Content>
        </Container>
    )
}