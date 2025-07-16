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
      <DialogContent className='max-w-md p-6 rounded-2xl shadow-xl border border-blue-100 bg-white'>
        <DialogHeader>
          <DialogTitle className='text-xl font-semibold flex items-center gap-2 text-blue-700'>
            <User className='h-5 w-5 text-blue-500' />
            Información del Cliente
          </DialogTitle>
        </DialogHeader>

        <div className='grid grid-cols-2 gap-y-2 text-sm text-blue-900 mt-2'>
          <div>
            <span className='font-medium'>Nombre:</span> {cliente.nombre}
          </div>
          <div>
            <span className='font-medium'>Teléfono:</span> {cliente.telefono}
          </div>
          <div>
            <span className='font-medium'>Saldo a pagar:</span> {cliente.saldo}
          </div>
          <div className='col-span-2'>
            <span className='font-medium'>Domicilio:</span> {cliente.domicilio}
          </div>
        </div>

        <Separator className='my-2 bg-blue-200' />

        <Respuesta />
      </DialogContent>
    </Dialog>
  )
}

export { ModalResponse }
