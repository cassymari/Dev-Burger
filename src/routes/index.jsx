import { Routes, Route } from "react-router-dom";



import {Cart, Menu, Home, Register, Login, Checkout, CompletePayment, Orders, NewProduct, EditProduct, Products } from '../containers';
import { DefaultLayout } from "../layouts/UserLayouts/DefaultLayout";
import { AdminLayouts } from "../layouts/AdminLayouts";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Menu />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/complete" element={<CompletePayment />} />
      </Route>

      <Route path="/admin" element={<AdminLayouts />}>
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path='/admin/novo-produto' element={<NewProduct />} />
              <Route path="/admin/editar-produto" element={<EditProduct />} />
                    <Route path="/admin/produtos" element={<Products />} />
      </Route>
      
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  )
};


