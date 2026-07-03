import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage, ContainerCheckbox } from './styles';
import { Image } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'


const schema = yup
    .object({
        name: yup.string().required('Digite o nome do Produto'),
        price: yup.number().positive().required('Digite o preço do Produto').typeError('Digite o preço do Produto'),
        category: yup.object().required('Selecione a categoria'),
        offer: yup.boolean(),
        file: yup.mixed().test('required', 'Escolha um arquivo para continuar', (value) => {
            return value && value.length > 0;
        }).test('fileSize', 'Carregue arquivos até 3MB', (value) => {
            return value && value.length > 0 && value[0].size <= 3000000;
        }).test('fileType', 'Carregue arquivos PNG ou JPEG', (value) => {
            return value && value.length > 0 && ['image/jpeg', 'image/png'].includes(value[0].type);
        })
    });


 export function NewProduct() {
        const [fileName, setFileName] = useState(null);
        const [categorias, setCategorias] = useState([]);
        const navigate =  useNavigate();


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
            api.post('/products', productFormData),
            {
                pending: 'Adicionando produto...',
                success: 'Produto adicionado com sucesso!',
                error: 'Erro ao adicionar produto!',
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
                <Input type='text' {...register('name')} />
                <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            </InputGroup>

            <InputGroup>
                <Label>Preço</Label>
                <Input type="number"
                    step="0.01"
                    {...register("price", {
                        valueAsNumber: true,
                    })} />
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
                    render={({field}) => (
                        <Select
                            {...field}
                            options={categorias}
                            getOptionLabel={(category) => category.name}
                            getOptionValue={(category) => category.id}
                            placeholder="Selecione a categoria"
                            menuPortalTarget={document.body}


                        />

                    )} />
                <ErrorMessage>{errors?.category?.message}</ErrorMessage>
            </InputGroup>

             <InputGroup>
                        <ContainerCheckbox>
                            <input type="checkbox" {...register('offer')}  />
                            <label>Produto em oferta?</label>
                        </ContainerCheckbox>
                        </InputGroup>

            <SubmitButton>Adcionar Produto</SubmitButton>
        </Form>
    </Container>
)
};