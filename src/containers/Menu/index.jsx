import { useState } from "react";
import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton, BackButton } from "../../containers/Menu/styles";
import { useEffect } from "react";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from '../../components/CardProduct';
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredproducts, setFilteredproducts] = useState([]);

    const navigate = useNavigate();

    const { search } = useLocation();

    const queryParams = new URLSearchParams(search)


    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get('categoria');

        if (categoryId) {
            return categoryId
        }
        return 0;
    })


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];


            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data } = await api.get('/products')

            const newProducts = data.map(product => ({ currencyValue: formatPrice(product.price), ...product }))

            setProducts(newProducts)


        }
        loadCategories()
        loadProducts()


    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredproducts(products);
        } else {
            const newFilteredproducts = products.filter(
                product => product.category_id === activeCategory,
            );

            setFilteredproducts(newFilteredproducts);
        }

    }, [products, activeCategory])

    return (

        <Container>

            <Banner>
                <h1>O MELHOR
                    <br />
                    HAMBURGER
                    <br />
                    ESTÁ AQUI!

                    <span>Esse Cardápio está irresistível!</span>
                </h1>

               <BackButton onClick={() => navigate(-1)}>
  <FaArrowLeft size={20} />
</BackButton>


            </Banner>
            <CategoryMenu>
                 
                {categories.map((category) => (
                    < CategoryButton key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true,
                                },

                            );
                            setActiveCategory(category.id);
                        }}
                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredproducts.map(product => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>


        </Container>


    )
}