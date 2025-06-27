// Modal.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import type { Cliente } from '../Table/column'

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  cliente: Cliente | null
}

function Modal({ open, onOpenChange, cliente }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='mb-1'>Información del Cliente</DialogTitle>
          <DialogDescription className=''>
            Cuenta: {cliente?.cuenta}
            Nombre: {cliente?.nombre}
            Direccion: {cliente?.domicilio}
            Saldo: {cliente?.saldo}
          </DialogDescription>
        </DialogHeader>
        <hr />
      </DialogContent>
    </Dialog>
  )
}

export { Modal }
