import { z } from 'zod'

export const SeguimientoSchema = z.object({
  id: z.number(),
  clienteId: z.number(),
  respuesta: z.boolean(),
  observacion: z.string().optional(),
  fecha: z.string(), // DateTime → string ISO
})

export const SeguimientoCreateSchema = SeguimientoSchema.omit({ id: true, fecha: true })

export type Seguimiento = z.infer<typeof SeguimientoSchema>
export type SeguimientoCreateInput = z.infer<typeof SeguimientoCreateSchema>
