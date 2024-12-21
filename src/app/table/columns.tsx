"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    idPropiedad: number,
    nomProp: string,
    emailProp: string,
    celularProp: string,
    coeficiente: string,
    properties: { type: string; description: string }[]
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "idPropiedad",
        header: "# Apto",
    },
    {
        accessorKey: "nomProp",
        header: "Nombre Propietario",
    },
    {
        accessorKey: "emailProp",
        header: "Correo",
    },
    {
        accessorKey: "celularProp",
        header: "Celular",
    },
    {
        accessorKey: "coeficiente",
        header: "Coeficiente",
    }
];