"use client"

import React from "react"
import { useState, useEffect } from "react"
import { resourceService } from "./services/resource"
import ResourceCard from "./components/ResourceCard"
import Link from "next/link"
import { ResourceProps } from "./types"

export default function Home() {
  const [resources, setResources] = useState<ResourceProps[]>([])

  useEffect(() => {
    async function fetchResources() {
      const response = await resourceService.getAll()
      setResources(response.data.data)
    }
    fetchResources()
  }, [])

  return (
    <>
      <header className='flex flex-col gap-1 text-center'>
        <h1 className='text-2xl'>Recursos de Aprendizaje</h1>
        <p className='text-sm text-pretty'>
          Encuentra videos, libros, articulos y otros recursos para expandir tus
          conocimientos.
        </p>
      </header>
      <main className='lg:w-150 md:w-150 sm:w-150 '>
        <ul className='flex flex-col gap-4'>
          {resources.map((resource) => (
            <Link href={`/${resource.id}`} key={resource.id}>
              <li className='bg-gray-100 flex flex-col p-2 rounded-md gap-2 cursor-pointer shadow-md'>
                <ResourceCard
                  title={resource.attributes.titulo}
                  description={resource.attributes.descripcion}
                  type={resource.attributes.tipo}
                  date={resource.attributes.fecha}
                />
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  )
}
