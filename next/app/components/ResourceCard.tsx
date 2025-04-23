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
      <div className='flex justify-between items-center'>
        <h2 className='font-bold'>{title}</h2>
        <div>
          <p
            className={`text-sm rounded-2xl px-2 flex justify-center gap-1 ${
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
      <p>{description}</p>
      <p>Publicado el {date}</p>
    </>
  )
}

export default ResourceCard
