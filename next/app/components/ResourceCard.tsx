"use client"

import React from "react"
import Image from "next/image"

export type ResourceCardProps = {
  title: string
  description: string
  type: string
  date: string
}

function ResourceCard({ title, description, type, date }: ResourceCardProps) {
  return (
    <>
      <div className='flex items-center'>
        <div className='flex flex-col gap-1'>
          <h2 className='font-bold'>{title}</h2>
          <p className='text-sm'>{description}</p>
        </div>
        <div className='self-start'>
          <p
            className={`text-sm rounded-2xl px-4 flex justify-center gap-1 ${
              type === "video" && "bg-red-300"
            } ${type === "articulo" && "bg-cyan-300"} ${
              type === "libro" && "bg-amber-300"
            }`}
          >
            <Image src={`/${type}.svg`} alt='' width={15} height={15} />
            {type}
          </p>
        </div>
      </div>
      <p className='text-sm font-bold'>Publicado el {date}</p>
    </>
  )
}

export default ResourceCard
