import { useEffect } from 'react';
import { useContext, createContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
    };
    useEffect(() => {
        const clientCartData =
            localStorage.getItem('devburger:cartInfo');

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);

    const putProductInCart = (product) => {
        const CartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart = []

        if (CartIndex >= 0) {
            newProductsInCart = [...cartProducts];

            newProductsInCart[CartIndex] = {
                ...newProductsInCart[CartIndex],
                quantity: newProductsInCart[CartIndex].quantity + 1
            };

            setCartProducts(newProductsInCart);
        } else {
            product.quantity = 1
            newProductsInCart = [...cartProducts, product]
            setCartProducts(newProductsInCart)

        }

        updateLocalStorage(newProductsInCart);
    };



    const clearCart = () => {
        setCartProducts([]);
        updateLocalStorage([]);
    };

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId)

        setCartProducts(newCart)

        updateLocalStorage(newCart)
    };

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId
                ? { ...prd, quantity: prd.quantity + 1 }
                : prd;
        });

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const decreaseProduct = (productId) => {
        const CartIndex = cartProducts.findIndex(
            (prd) => prd.id === productId
        );

        if (CartIndex < 0) return;

        if (cartProducts[CartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) =>
                prd.id === productId
                    ? { ...prd, quantity: prd.quantity - 1 }
                    : prd
            );

            setCartProducts(newCart);
            updateLocalStorage(newCart);

        } else {
            deleteProduct(productId);
        }
    };



    return (
        <CartContext.Provider
            value={{
                cartProducts,
                putProductInCart,
                clearCart,
                deleteProduct,
                increaseProduct,
                decreaseProduct
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used with a context');
    }

    return context;
};

export default CartProvider;

/*  
Regras de negócios 
- Produto chegou 

- SE SIM
- Aumenta a quantidade dele.

- SE NÃO
 -Adiciono ele ao carrinho
*/