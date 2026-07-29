import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { Table } from '../index';

import {
  ProductImage,
  ButtonGroup,
  EmptyCart,
  TotalPrice,
  TrashImagem,
} from './styles';

import TrashIcon from '../../assets/trash.svg';

export function CartItems() {
  const {
    cartProducts,
    decreaseProduct,
    increaseProduct,
    deleteProduct,
  } = useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>

      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map(product => (
            <Table.Tr key={product.id}>
              <Table.Td data-label="Imagem">
                <ProductImage
                  src={product.URL}
                  alt={product.name}
                />
              </Table.Td>

              <Table.Td data-label="Item">
                {product.name}
              </Table.Td>

              <Table.Td data-label="Preço">
                {product.currencyValue}
              </Table.Td>

              <Table.Td data-label="Quantidade">
                <ButtonGroup>
                  <button
                    type="button"
                    onClick={() => decreaseProduct(product.id)}
                  >
                    -
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    type="button"
                    onClick={() => increaseProduct(product.id)}
                  >
                    +
                  </button>
                </ButtonGroup>
              </Table.Td>

              <Table.Td data-label="Total">
                <TotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </TotalPrice>
              </Table.Td>

              <Table.Td data-label="Remover">
                <TrashImagem
                  src={TrashIcon}
                  alt={`Remover ${product.name}`}
                  onClick={() => deleteProduct(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan={6}>
              <EmptyCart>Carrinho vazio</EmptyCart>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}