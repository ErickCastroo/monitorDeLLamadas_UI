// src/components/Table/Table.tsx
import * as React from 'react'
import { Modal } from '@/components/Modal'
import { ModalResponse } from '@/components/modalResponse'
import { useQuery } from '@tanstack/react-query'
import { GetCliente } from '@/api/Clientes'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, flexRender, type ColumnFiltersState } from '@tanstack/react-table'

import { Input } from '@/components/ui/input'
import { DropletLoader } from '@/components/loading'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { columns as rawColumns, type Cliente } from '@/components/Table/column'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

export function Llamadas() {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [filterValue, setFilterValue] = React.useState('')
  const [modalOpen, setModalOpen] = React.useState(false)
  const [modalROpen, setModalROpen] = React.useState(false)
  const [selectedCliente, setSelectedCliente] = React.useState<Cliente | null>(null)
  const [mostrarSoloSinSeguimiento, setMostrarSoloSinSeguimiento] = React.useState(true)

  const columns = React.useMemo(() => {
    const base = [...rawColumns]
    base.push({
      id: 'acciones',
      header: 'Acciones',
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon'>
              <span className='sr-only'>Opciones</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Llamar</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                setSelectedCliente(row.original)
                setModalROpen(true)
              }}
            >Respuesta</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setSelectedCliente(row.original)
                setModalOpen(true)
              }}
            >Ver Cliente</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    })
    return base
  }, [])

  const { data: clientes, isLoading, isError, error } = useQuery<Cliente[]>({
    queryKey: ['clientes'],
    queryFn: GetCliente,
  })

  const data = React.useMemo(() => {
    if (!clientes) return []
    return mostrarSoloSinSeguimiento
      ? clientes.filter(cliente => !cliente.seguimiento)
      : clientes
  }, [clientes, mostrarSoloSinSeguimiento])


  React.useEffect(() => {
    const timeout = setTimeout(() => table.getColumn('cuenta')?.setFilterValue(filterValue), 300)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue])

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / 10),
    state: { columnFilters },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const rows = table.getRowModel().rows


  if (isLoading) return <DropletLoader />
  if (isError) return <div>Error: {error instanceof Error ? error.message : 'Ocurrió un error'}</div>
  if (!clientes || clientes.length === 0) return <div>No hay clientes registrados.</div>
  return (
    <div className='w-full space-y-6 p-4'>
      <div className='flex justify-between items-center gap-4 flex-wrap'>
        <Input
          placeholder='Filtrar por numero de Cuenta...'
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className='max-w-xs'
        />

        <Modal
          open={modalOpen}
          onOpenChange={setModalOpen}
          cliente={selectedCliente}
        />

        <ModalResponse
          open={modalROpen}
          onOpenChange={setModalROpen}
          cliente={selectedCliente}
        />
        <div className="flex items-center gap-2">
          <Switch
            id="sin-seguimiento"
            checked={mostrarSoloSinSeguimiento}
            onCheckedChange={setMostrarSoloSinSeguimiento}
          />
          <Label htmlFor="sin-seguimiento">{mostrarSoloSinSeguimiento ? 'Sin seguimiento' : 'Todos'}</Label>
        </div>
      </div>

      <div className='rounded-lg border shadow-sm overflow-auto'>
        <Table className='min-w-full divide-y divide-gray-200'>
          <TableHeader>
            {table.getHeaderGroups().map(hg => (
              <TableRow key={hg.id}>
                {hg.headers.map(header => (
                  <TableHead key={header.id} className='bg-gray-50 text-left px-4 py-2'>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {rows.length ? rows.map(row => (
              <TableRow key={row.id} className='hover:bg-gray-50'>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id} className='px-4 py-2'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='text-center px-4 py-8'>
                  No hay resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

      </div>
      <div className='space-x-2 flex items-center'>
        <Button variant='outline' size='sm' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          <ChevronLeft className='mr-1 h-4 w-4' /> Anterior
        </Button>
        <Button variant='outline' size='sm' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Siguiente <ChevronRight className='ml-1 h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}
