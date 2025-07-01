"use client"

import React, { useEffect, useState } from "react"

import { ResourceProps } from "../types"
import { resourceService } from "../services/resource"
import { favoriteService } from "../services/favorite"
import { notFound, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

function ResourcePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const [resource, setResource] = useState<ResourceProps | null>(null)

  const params = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const resourceResponse = await resourceService.getOne(Number(params.id))
        setResource(resourceResponse.data)
        const favoriteResponse = await favoriteService.getIsFavorite(
          resourceResponse.data.id
        )
        setIsFavorite(favoriteResponse.data.isFavorite)
      } catch (error) {
        console.error("Failed to fetch resources:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!resource) {
    notFound()
  }

  const handleFavorite = async () => {
    if (isFavorite) {
      await favoriteService.deleteFavorite(resource.id)
      setIsFavorite(!isFavorite)
    } else {
      await favoriteService.addFavorite(resource.id)
      setIsFavorite(!isFavorite)
    }
  }

  const formattedDate = new Date(resource.created_at).toLocaleDateString()
  console.log(resource.image_url)

  return (
    <main>
      <nav className='py-6'>
        <Link href='/' className='font-bold flex items-center gap-2'>
          <Image src='/arrow.svg' alt='' width={25} height={25} />
          <p>Volver a Recursos</p>
        </Link>
      </nav>
      <section className='lg:w-180 md:w-180 flex flex-col p-4 rounded-md shadow-lg bg-gray-200'>
        <div className='flex justify-between items-start gap-2'>
          <h1 className='font-bold text-2xl'>{resource.name}</h1>
          <div className='flex gap-2 pt-1 items-center'>
            <button onClick={handleFavorite}>
              {isFavorite ? (
                <Image
                  src='/red-heart.svg'
                  alt=''
                  width={30}
                  height={30}
                  className='cursor-pointer'
                />
              ) : (
                <Image
                  src='/heart.svg'
                  alt=''
                  width={30}
                  height={30}
                  className='cursor-pointer'
                />
              )}
            </button>

            <div
              className={`text-sm rounded-2xl px-4 flex justify-center gap-1 ${
                resource.type === "video" && "bg-red-300"
              } ${resource.type === "articulo" && "bg-cyan-300"} ${
                resource.type === "libro" && "bg-amber-300"
              }`}
            >
              <Image
                src={`/${resource.type}.svg`}
                alt=''
                width={15}
                height={15}
              />
              <p className='text-center'>{resource.type}</p>
            </div>
          </div>
        </div>
        <p>Publicado el {formattedDate}</p>
        <div className='relative w-full h-64 md:h-96'>
          <Image
            src={resource.image_url}
            alt=''
            fill
            className='rounded-md object-cover'
            priority
          />
        </div>
        <div className='flex flex-col pt-2 pb-6'>
          <h2 className='font-bold '>Descripcion</h2>
          <p className='text-sm'>{resource.description}</p>
        </div>

        <Link
          href={resource.url}
          target='_blank'
          className='flex gap-4 text-sm rounded-lg px-4 py-2 self-start bg-cyan-500 text-white hover:bg-cyan-400 transition-colors duration-300'
        >
          Ver Recurso
          <Image src='/link.svg' alt='' width={20} height={20} />
        </Link>
      </section>
    </main>
  )
}
export default ResourcePage
