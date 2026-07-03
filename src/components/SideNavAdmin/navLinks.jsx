import { ListIcon, ListPlusIcon, Receipt } from '@phosphor-icons/react'
import { AdminLayouts } from '../../layouts/AdminLayouts'

export const navLinks = [
    {
        id: 1,
        label: "Pedidos",
        path: '/admin/pedidos',
        icon: <Receipt />
    },
      {
        id: 2,
        label: "Produtos",
        path: '/admin/produtos',
        icon: <ListIcon />
    },
      {
        id: 3,
        label: "Adcionar Produto",
        path: '/admin/novo-produto',
        icon: <ListPlusIcon />
    },
]