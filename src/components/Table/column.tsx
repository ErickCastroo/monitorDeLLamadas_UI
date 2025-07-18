import type { ColumnDef } from '@tanstack/react-table'

export type Cliente = {
  cuenta: string
  nombre: string
  domicilio: string
  saldo: number
  telefono: string
  seguimiento?: string
}

export const columns: ColumnDef<Cliente>[] = [
  {
    accessorKey: 'cuenta',
    header: 'Cuenta',
    size: 150,
  },
  {
    accessorKey: 'nombre',
    header: 'Nombre',
    size: 200,
  },
  {
    accessorKey: 'domicilio',
    header: 'Domicilio',
    size: 250,
  },
  {
    accessorKey: 'saldo',
    header: 'Saldo',
    size: 100,
  },
  {
    accessorKey: 'telefono',
    header: 'Teléfono',
    size: 150,
  },
]