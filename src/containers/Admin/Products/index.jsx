import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { formatPrice } from '../../../utils/formatPrice.js'
import { Container, ProductImage, EditButton } from "./styles.js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { PencilIcon, XCircleIcon, CheckCircleIcon, TrashIcon, ArrowCounterClockwiseIcon,  } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {MagnifyingGlassIcon} from '@phosphor-icons/react'


export function Products() {

    const [products, setProducts] = useState([])
    const navigate = useNavigate();
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState('');



    useEffect(() => {


        async function loadProducts() {
            let url = '/products';

            if (filter === "active") {
                url = "/products?active=true";
            }

            if (filter === "inactive") {
                url = "/products?active=false";
            }

            const { data } = await api.get(url);
            setProducts(data);

        }


        loadProducts();
    }, [filter]);

    function isOffer(offer) {
        if (offer) {
            return <CheckCircleIcon color='#61A120' size='28' />
        } else {
            return <XCircleIcon color='#FF3205' size='28' />
        }
    }

    function editProduct(product) {
        navigate('/admin/editar-produto', { state: { product } });
    }

    const deleteProduct = async (id) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este produto?');
        if (confirmDelete) {
            try {
                await api.delete(`/products/${id}`);
                setProducts(products.filter(product => product.id !== id));
            } catch (error) {
                console.error('Erro ao excluir o produto:', error);
            }
        }
    }
const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
);

    const restoreProduct = async (id) => {
        try {
            await api.put(`/products/${id}/restore`);

            const { data } = await api.get('/products?active=false');
            setProducts(data);

        } catch (error) {
            console.error('Erro ao restaurar o produto:', error);
        }
    };


    const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
);


    return (
        <Container>

        <div
    style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    }}
>
    <ButtonGroup variant="outlined">
        
                

                <Button
                    onClick={() => setFilter("active")}
                    variant={filter === "active" ? "contained" : "outlined"}
                    color="success"
                >
                    Ativos
                </Button>

                <Button
                    onClick={() => setFilter("inactive")}
                    variant={filter === "inactive" ? "contained" : "outlined"}
                    color="error"
                >
                    Inativos
                </Button>
            
    </ButtonGroup>

   <div
    style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    }}
>
    <MagnifyingGlassIcon size={22} />

    <TextField
        size="small"
        placeholder="Pesquisar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
</div>
</div>

            

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="center">Preço</TableCell>
                            <TableCell align="center">Produto em oferta</TableCell>
                            <TableCell align="center">Imagem do Produto</TableCell>
                            <TableCell align="center">Editar Produto</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredProducts.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell align="center">
                                    {formatPrice(product.price)}
                                </TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center">
                                    <ProductImage src={product.URL} width="80" height="80" />
                                </TableCell>
                               <TableCell align="center">
    {filter === "inactive" ? (
        <EditButton onClick={() => restoreProduct(product.id)}>
             <ArrowCounterClockwiseIcon size={18} />
        </EditButton>
    ) : (
        <>
            <EditButton onClick={() => editProduct(product)}>
                <PencilIcon />
            </EditButton>

            <EditButton onClick={() => deleteProduct(product.id)}>
                <TrashIcon size={18} />
            </EditButton>
        </>
    )}
</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
};