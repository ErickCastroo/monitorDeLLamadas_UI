import { z } from 'zod'

export const EmpleadoSchema = z.object({
  id: z.number(),
  nombre: z.string(),
  contrasena: z.string(), // ⚠️ puedes omitir en respuesta
  rol: z.string(),
})

export const EmpleadoPublicSchema = EmpleadoSchema.omit({ contrasena: true })

export type Empleado = z.infer<typeof EmpleadoSchema>
export type EmpleadoPublic = z.infer<typeof EmpleadoPublicSchema>
