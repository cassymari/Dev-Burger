
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage, ContainerCheckbox } from './styles';
import { Image } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const schema = yup
    .object({
        name: yup.string().required('Digite o nome do Produto'),
        price: yup.number().positive().required('Digite o preço do Produto').typeError('Digite o preço do Produto'),
        category: yup.object().required('Selecione a categoria'),
        offer: yup.boolean(),
      
    });


 export function EditProduct() {
        const [fileName, setFileName] = useState(null);
        const [categorias, setCategorias] = useState([])
const navigate = useNavigate();
        const {state: {product}} = useLocation();


    useEffect(() => {
    async function loadCategories() {
        const { data } = await api.get('/categories')


        setCategorias(data)
    }

    loadCategories()
}, [])
const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
} = useForm({
    resolver: yupResolver(schema),
})

const onSubmit = async (data) => {
    try {
        const productFormData = new FormData();

        productFormData.append('name', data.name);
        productFormData.append('price', data.price * 100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);
                productFormData.append('offer', data.offer);


        await toast.promise(
            api.put(`/products/${product.id}`, productFormData),
            {
                pending: 'Atualizando produto...',
                success: 'Produto atualizado com sucesso!',
                error: 'Erro ao atualizar produto, tente novamente!',
            }
        );

        setTimeout(() => {
            navigate('/admin/produtos');
        }, 2000);

    } catch (error) {
        console.error(error);
    }
};

return (
    <Container>
        <Form onSubmit={handleSubmit(onSubmit)} >
            <InputGroup>
                <Label>Nome</Label>
                <Input type='text' 
                    {...register('name')}
                    defaultValue={product.name}
                    />
                <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            </InputGroup>

            <InputGroup>
                <Label>Preço</Label>
                <Input type="number"
                    step="0.01"
                    {...register("price", {
                        valueAsNumber: true,
                    })}
                     defaultValue={product.price / 100} />
                <ErrorMessage>{errors?.price?.message}</ErrorMessage>
            </InputGroup>

            <InputGroup>
                <LabelUpload>
                    <Image />
                    <input type='file' {...register('file')} accept="image/png, image/jpeg"

                        onChange={(value) => {

                            setFileName(value.target.files[0]?.name);
                            register('file').onChange(value);
                        }}
                    />

                    {fileName || 'Uploud do produto'}
                </LabelUpload>
                <ErrorMessage>{errors?.file?.message}</ErrorMessage>

            </InputGroup>

            <InputGroup>
                <label>Categoria</label>

                <Controller
                    name='category'
                    control={control}
                     defaultValue={product.category}
                    render={({field}) => (
                        <Select
                            {...field}
                            options={categorias}
                            getOptionLabel={(category) => category.name}
                            getOptionValue={(category) => category.id}
                            placeholder="Selecione a categoria"
                            menuPortalTarget={document.body}
                             defaultValue={product.category}


                        />

                    )} />
                <ErrorMessage>{errors?.category?.message}</ErrorMessage>
            </InputGroup>

            <InputGroup>
            <ContainerCheckbox>
                <input type="checkbox" {...register('offer')} defaultChecked={product.offer} />
                <label>Produto em oferta?</label>
            </ContainerCheckbox>
            </InputGroup>

            <SubmitButton>Editar Produto</SubmitButton>
        </Form>
    </Container>
)
};