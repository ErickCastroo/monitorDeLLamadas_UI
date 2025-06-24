type Payment = {
  cuenta: string
  nombre: string
  domicilio: string
  saldo: number
  telefono: string
  seguimiento: string
}

export const payments: Payment[] = [
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
]