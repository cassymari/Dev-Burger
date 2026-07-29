import { toast } from 'react-toastify';

import { CartButton } from '../CardButton';
import { CardImage, Container } from './styles';
import { useCart } from '../../hooks/CartContext';

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  function handleAddToCart() {
    putProductInCart(product);

    toast.success(
      `${product.name} foi adicionado ao carrinho!`,
    );
  }

  return (
    <Container>
      <CardImage
        src={product.URL}
        alt={product.name}
      />

      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>

      <CartButton onClick={handleAddToCart} />
    </Container>
  );
}