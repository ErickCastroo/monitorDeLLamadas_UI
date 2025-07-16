import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ModalResponse } from '@/components/modalResponse'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Home,
  User,
  CreditCard,
  Phone,
  FileText,
  DollarSign,
} from 'lucide-react'
import type { Cliente } from '../Table/column'

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  cliente: Cliente | null
}

function Modal({ open, onOpenChange, cliente }: ModalProps) {
  const [modalROpen, setModalROpen] = React.useState(false)

  const handleModalChange = (isOpen: boolean) => {
    onOpenChange(isOpen) // cierra el actual
    if (!isOpen) {
      // solo si se está cerrando, abrir el siguiente
      setTimeout(() => setModalROpen(true), 100) // pequeño delay para transición
    }
  }

  if (!cliente) return null

  return (
    <>
      <Dialog open={open} onOpenChange={handleModalChange}>
        <DialogContent className='max-w-md p-6 rounded-2xl shadow-xl border border-blue-100 bg-white'>
          <DialogHeader>
            <DialogTitle className='text-xl font-semibold flex items-center gap-2 text-blue-700'>
              <User className='h-5 w-5 text-blue-500' />
              Información del Cliente
            </DialogTitle>
          </DialogHeader>

          <div className='grid gap-4 pt-2 text-sm text-blue-900'>
            <div className='flex items-center gap-3'>
              <CreditCard className='text-blue-400 w-4 h-4' />
              <span><strong>Cuenta:</strong> {cliente.cuenta}</span>
            </div>

            <div className='flex items-center gap-3'>
              <User className='text-blue-400 w-4 h-4' />
              <span><strong>Nombre:</strong> {cliente.nombre}</span>
            </div>

            <div className='flex items-start gap-3'>
              <Home className='text-blue-400 w-4 h-4 mt-1' />
              <span><strong>Domicilio:</strong> {cliente.domicilio}</span>
            </div>

            <div className='flex items-center gap-3'>
              <DollarSign className='text-blue-400 w-4 h-4' />
              <span><strong>Saldo:</strong> ${cliente.saldo.toFixed(2)}</span>
            </div>

            <div className='flex items-center gap-3'>
              <Phone className='text-blue-400 w-4 h-4' />
              <span><strong>Teléfono:</strong> {cliente.telefono}</span>
            </div>

            <Separator className='my-2 bg-blue-200' />

            <div className='flex items-start gap-3'>
              <FileText className='text-blue-400 w-4 h-4 mt-1' />
              <div className='flex flex-col'>
                <strong className='text-blue-700'>Seguimiento:</strong>
                {!cliente.seguimiento ? (
                  <p className='text-orange-500'>No hay seguimiento aún</p>
                ) : (
                  <p className='text-green-700'>{cliente.seguimiento}</p>
                )}
              </div>
            </div>
          </div>

          <div className='flex justify-end pt-4'>
            <button onClick={() => handleModalChange(false)} className='cursor-pointer'>
              <Badge
                className='border-blue-500 text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-colors'
                variant='outline'
              >
                Dar Seguimiento
              </Badge>
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <ModalResponse
        open={modalROpen}
        onOpenChange={setModalROpen}
        cliente={cliente}
      />
    </>
  )
}

export { Modal }
