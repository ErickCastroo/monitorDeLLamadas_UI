import axios from 'axios'
import { useState } from 'react'

function ExcelFile() {
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const peticion = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return alert('Selecciona un archivo')

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await axios.post('http://localhost:3000/api/clientes/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('Respuesta del servidor:', response.data)
    } catch (error) {
      console.error('Error al subir el archivo:', error)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <form onSubmit={peticion}>
        <input
          type='file'
          name='file'
          id='file'
          onChange={handleChange}
          className='file-input file-input-bordered file-input-primary w-full max-w-xs'
        />
        <button type='submit' className='btn btn-primary mt-4'>
          Enviar
        </button>
      </form>
    </div>
  )
}

export { ExcelFile }
