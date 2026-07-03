import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import CarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousel = CarouselModule.default;

import { CategoryButton, Container, ContainerItems, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';





function CategoryCarousel() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const categoryId = searchParams.get('categoria');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('/categories')

            console.log(response.data)
            setCategories(response.data)
        }

        loadCategories()
    }, [])

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');

            if (categoryId) {
                const filtered = data.filter(
                    product => product.category_id === Number(categoryId)
                );

                setProducts(filtered);
            } else {
                setProducts(data);
            }
        }

        loadProducts();
    }, [categoryId]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },

        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        }
    }
    return (
        <Container>
            <Title>Categorias</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass={'carousel-item'}>

                {categories.map(category => (
                    <ContainerItems
                        key={category.id}
                        $imageUrl={category.URL}
                    >
                       <ContainerItems
    key={category.id}
    $imageUrl={category.URL}
    onClick={() => {
        
        navigate(`/cardapio?categoria=${category.id}`);
    }}
>
    <CategoryButton>
        {category.name}
    </CategoryButton>
</ContainerItems>

                    </ContainerItems>

                ))}

            </Carousel>
        </Container>
    )



}


export default CategoryCarousel;