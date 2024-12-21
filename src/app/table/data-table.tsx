"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import React from "react";
import { Payment } from "./columns"; // Importa el tipo correcto

import { ChevronDown, ChevronUp } from "lucide-react"; // Importa los iconos

interface DataTableProps {
    columns: ColumnDef<Payment, unknown>[];
    data: Payment[];
}

export function DataTable({ columns, data }: DataTableProps) {
    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const toggleRow = (rowId: string) => {
        setExpandedRows((prev) =>
            prev.includes(rowId)
                ? prev.filter((id) => id !== rowId) // Si ya está expandida, quítala
                : [...prev, rowId] // Si no está expandida, agrégala
        );
    };

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => {
                            // Verificar si la fila tiene propiedades de tipo "Cuarto Útil" o "Parqueadero"
                            const hasRelevantProperty = row.original.properties.some(
                                (property) =>
                                    property.type === "Cuarto Útil" || property.type === "Parqueadero"
                            );

                            return (
                                <React.Fragment key={row.id}>
                                    {/* Main Row */}
                                    <TableRow>
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                        {/* Mostrar botón solo si tiene propiedades relevantes */}
                                        {hasRelevantProperty && (
                                            <TableCell>
                                                <button
                                                    onClick={() => toggleRow(row.id)}
                                                    className="flex items-center justify-center"
                                                >
                                                    {/* Mostrar ChevronDown o ChevronUp según el estado */}
                                                    {expandedRows.includes(row.id) ? (
                                                        <ChevronUp />
                                                    ) : (
                                                        <ChevronDown />
                                                    )}
                                                </button>
                                            </TableCell>
                                        )}
                                    </TableRow>

                                    {/* Expanded Rows */}
                                    {expandedRows.includes(row.id) &&
                                        row.original.properties.map((property, index) => (
                                            <TableRow key={`${row.id}-property-${index}`}>
                                                <TableCell colSpan={columns.length + 1}>
                                                    <Collapsible open={true}>
                                                        <CollapsibleContent className="text-sm text-gray-500 bg-gray-50">
                                                            <strong>{property.type}:</strong>{" "}
                                                            {property.description}
                                                        </CollapsibleContent>
                                                    </Collapsible>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </React.Fragment>
                            );
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length + 1} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}