import { CartButton } from "../CardButton";
import { CardImage, Container } from "./styles";
import { useCart } from "../../hooks/CartContext";

export function CardProduct({ product }) {
    const { putProductInCart } = useCart();

    return (
        <Container>
            <CardImage src={product.URL} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>

            <CartButton onClick={() => putProductInCart(product)} />
        </Container>
    );
}