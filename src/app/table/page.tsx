import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            idPropiedad: 100,
            nomProp: "Jorge",
            emailProp: "jorge@gmail.com",
            celularProp: "3017589362",
            coeficiente: "17%",
            properties: [
                { type: "Cuarto Útil", description: "En el sótano" },
                { type: "Parqueadero", description: "Cubierto #12" },
            ],
        },
        {
            id: "728ed52f",
            idPropiedad: 100,
            nomProp: "Jorge",
            emailProp: "jorge@gmail.com",
            celularProp: "3017589362",
            coeficiente: "17%",
            properties: [{ type: "Parqueadero", description: "Descubierto #4" }],
        },
        {
            id: "728ed52f",
            idPropiedad: 100,
            nomProp: "Jorge",
            emailProp: "jorge@gmail.com",
            celularProp: "3017589362",
            coeficiente: "17%",
            properties: [{ type: "Cuarto Útil", description: "10%" }],
        },
        {
            id: "728ed52f",
            idPropiedad: 100,
            nomProp: "Jorge",
            emailProp: "jorge@gmail.com",
            celularProp: "3017589362",
            coeficiente: "17%",
            properties: [], // Sin propiedades
        },
        {
            id: "728ed52f",
            idPropiedad: 100,
            nomProp: "Jorge",
            emailProp: "jorge@gmail.com",
            celularProp: "3017589362",
            coeficiente: "17%",
            properties: [], // Sin propiedades
        }
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}