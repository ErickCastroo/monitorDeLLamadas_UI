import { isAxiosError } from 'axios'

import { Api } from '@/libs/axios'

import type { Cliente } from '@/types/ClienteSchema'

export async function GetCliente(): Promise<Cliente[]> {
  try {
    const { data } = await Api.get<Cliente[]>('/clientes')
    console.log('Datos de clientes obtenidos:', data)
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message)
      } else {
        throw new Error('No se pudo conectar al servidor. Verifica tu conexión.')
      }
    }
    throw new Error('Ocurrió un error inesperado.')
  }
}
