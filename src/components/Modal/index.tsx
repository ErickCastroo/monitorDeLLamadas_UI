import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
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

        <div className="grid gap-4 pt-2 text-md">
          <div className="flex items-center gap-3">
            <CreditCard className="text-muted-foreground w-4 h-4" />
            <span><strong>Cuenta:</strong> {cliente.cuenta}</span>
          </div>

          <div className="flex items-center gap-3">
            <User className="text-muted-foreground w-4 h-4" />
            <span><strong>Nombre:</strong> {cliente.nombre}</span>
          </div>

          <div className="flex items-start gap-3">
            <Home className="text-muted-foreground w-4 h-4 mt-1" />
            <span><strong>Domicilio:</strong> {cliente.domicilio}</span>
          </div>

          <div className="flex items-center gap-3">
            <DollarSign className="text-muted-foreground w-4 h-4" />
            <span><strong>Saldo:</strong> ${cliente.saldo.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-muted-foreground w-4 h-4" />
            <span><strong>Teléfono:</strong> {cliente.telefono}</span>
          </div>

          <Separator />

          <div className="flex items-start gap-3">
            <FileText className="text-muted-foreground w-4 h-4 mt-1" />
            <div className="flex flex-col">
              <strong>Seguimiento:</strong>
              <p className="text-muted-foreground">
                {
                  !cliente.seguimiento ? 'No hay seguimiento Aun' : <p className='text-green-700'>{cliente.seguimiento}</p>
                }
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            onClick={() => onOpenChange(false)}
            className='cursor-pointer '>
            <Badge className='hover:text-Primary' variant="outline">Dar Seguimiento</Badge>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export { Modal }