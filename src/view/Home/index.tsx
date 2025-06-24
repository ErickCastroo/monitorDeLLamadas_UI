import { useEffect, useState } from "react"
import { columns, type Payment } from "@/components/Table/column"
import { DataTable } from '@/components/Table'

function Home() {
  const [data, setData] = useState<Payment[]>([])

  useEffect(() => {
    // Aquí puedes llamar getData si lo mantienes separado
    const fetchData = async () => {
      const result: Payment[] = await getData()
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export { Home }

function getData(): Promise<Payment[]> {
  return Promise.resolve([
    {
      cuenta: "1234567890",
      nombre: "Juan Pérez",
      domicilio: "Calle Falsa 123",
      saldo: 1500.75,
      telefono: "555-1234",
      seguimiento: "Pendiente",
    },
    {
      cuenta: "0987654321",
      nombre: "María López",
      domicilio: "Avenida Siempre Viva 456",
      saldo: 2500.00,
      telefono: "555-5678",
      seguimiento: "Completado",
    },
    {
      cuenta: "1122334455",
      nombre: "Carlos García",
      domicilio: "Boulevard de los Sueños Rotos 789",
      saldo: 3200.50,
      telefono: "555-8765",
      seguimiento: "En Proceso",
    },
  ])
}
