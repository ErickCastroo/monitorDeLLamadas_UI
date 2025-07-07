import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

import type { Cliente } from '../Table/column'
import { User } from 'lucide-react'
import { Respuesta } from '../Respuesta'

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  cliente: Cliente | null
}

function ModalResponse({ open, onOpenChange, cliente }: ModalProps) {
  if (!cliente) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-6 rounded-2xl shadow-xl border bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Información del Cliente
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2">
          <div className='text-xs text-gray-500 mb-4'>
            <strong>Nombre:</strong> {cliente.nombre}
          </div>
          <div className='text-xs text-gray-500 mb-4'>
            <strong>Teléfono:</strong> {cliente.telefono}
          </div>
          <div className='text-xs text-gray-500 mb-4'>
            <strong>Saldo a pagar:</strong> {cliente.saldo}
          </div>
          <div className='text-xs text-gray-500'>
            <strong>Domicilio</strong> {cliente.domicilio}
          </div>
        </div>
        <Separator />
        <Respuesta />
      </DialogContent>
    </Dialog >
  )
}
export { ModalResponse }