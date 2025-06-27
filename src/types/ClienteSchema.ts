import { z } from 'zod'

export const ClienteSchema = z.object({
  id: z.number().int(),
  cuenta: z.string(),
  nombre: z.string(),
  domicilio: z.string(),
  saldo: z.number(),
  telefono: z.string(),
  empleadoId: z.number().int(),
})

// ✅ Entrada para crear cliente (sin `id`)
export const ClienteCreateSchema = ClienteSchema.omit({ id: true })

// ✅ Tipo para respuesta con seguimiento opcional
export const ClienteConSeguimientoSchema = ClienteSchema.extend({
  seguimiento: z
    .object({
      id: z.number(),
      respuesta: z.boolean(),
      observacion: z.string().optional(),
      fecha: z.string(), // Prisma DateTime → string
    })
    .nullable(),
})

// Inferencia de tipos TS:
export type Cliente = z.infer<typeof ClienteSchema>
export type ClienteCreateInput = z.infer<typeof ClienteCreateSchema>
export type ClienteConSeguimiento = z.infer<typeof ClienteConSeguimientoSchema>
