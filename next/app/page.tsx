"use client";

import React from "react";
import { useState, useEffect } from "react";
import { resourceService } from "./services/resource";
import ResourceCard from "./components/ResourceCard";
import Link from "next/link";
import { ResourceProps } from "./types";

export default function Home() {
  const [resources, setResources] = useState<ResourceProps[]>([]);
  const [newSearch, setNewSearch] = useState<string>("");

  useEffect(() => {
    async function fetchResources() {
      const response = await resourceService.getAll();
      console.log(response.data);
      setResources(response.data);
    }
    fetchResources();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewSearch(e.target.value.toLowerCase());
  };

  return (
    <>
      <header className="flex flex-col gap-1 text-center">
        <h1 className="text-2xl">Recursos de Aprendizaje</h1>
        <p className="text-sm text-pretty">
          Encuentra videos, libros, articulos y otros recursos para expandir tus
          conocimientos.
        </p>
        <input
          className="bg-slate-200 focus:outline-blue-400 rounded-lg py-2 px-4 mt-4 text-sm w-100 self-center"
          type="text"
          value={newSearch}
          placeholder="Escribe aqui lo que buscas..."
          onChange={handleChange}
        />
      </header>
      <main className="w-4/5">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-6 justify-center">
          {resources
            .filter((resource) =>
              resource.name.toLowerCase().includes(newSearch)
            )
            .map((resource) => (
              <Link href={`/${resource.id}`} key={resource.id}>
                <li className="bg-gray-100 flex flex-col p-2 rounded-md gap-2 cursor-pointer shadow-md justify-between h-50">
                  <ResourceCard
                    title={resource.name}
                    description={resource.description}
                    type={resource.type}
                    date={resource.created_at}
                  />
                </li>
              </Link>
            ))}
        </ul>
      </main>
    </>
  );
}
