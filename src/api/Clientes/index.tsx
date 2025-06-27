import { isAxiosError } from 'axios'

import { Api } from '@/libs/axios'

import type { Cliente } from '@/types/ClienteSchema'


export async function RegisterC(formData: Cliente): Promise<string> {
  try {
    const { data } = await Api.post<string>('/clientes', formData)
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

export async function GetCliente() {
  try {
    const { data } = await Api.get<string>('/clientes')
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