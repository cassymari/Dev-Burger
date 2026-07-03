import { navLinks } from "./navLinks";
import { useLocation } from 'react-router-dom'
import { Container, NavLinkContainer, NavLink, Footer } from "./styles";
import Logo from "../../assets/Logo.svg";
import { SignOut } from "@phosphor-icons/react";
import { useUser } from '../../hooks/UserContext';

export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useLocation();

    
    return (
        <Container>
            <img src={Logo} alt="Hamburger Logo DevBurger" />

            <NavLinkContainer>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        $isActive={pathname === link.path}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}

                <Footer>
                    <NavLink to='/login' onClick='logout'>
                        <SignOut />
                        <p>Sair</p>
                    </NavLink>
                </Footer>
            </NavLinkContainer>
        </Container>
    );
}