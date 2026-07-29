import { Navigate, Routes, Route } from 'react-router-dom';

import {
  Cart,
  Menu,
  Home,
  Register,
  Login,
  Checkout,
  CompletePayment,
  Orders,
  NewProduct,
  EditProduct,
  Products,
  ForgotPassword,
  ResetPassword,
} from '../containers';

import { DefaultLayout } from '../layouts/UserLayouts/DefaultLayout';
import { AdminLayouts } from '../layouts/AdminLayouts';

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<CompletePayment />} />
      </Route>

      <Route path="/admin" element={<AdminLayouts />}>
        <Route path="pedidos" element={<Orders />} />
        <Route path="novo-produto" element={<NewProduct />} />
        <Route path="editar-produto" element={<EditProduct />} />
        <Route path="produtos" element={<Products />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />

      <Route
        path="/esqueci-senha"
        element={<ForgotPassword />}
      />

      <Route
        path="/redefinir-senha"
        element={<ResetPassword />}
      />
    </Routes>
  );
}