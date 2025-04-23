import axios from "axios"

const baseUrl = "http://localhost:3001/favorites"

const getAll = async () => {
  return await axios.get(baseUrl)
}

const getIsFavorite = async (id: number) => {
  return await axios.get(`${baseUrl}/${id}/status`)
}

const addFavorite = async (id: number) => {
  return await axios.post(`${baseUrl}/${id}`)
}

const deleteFavorite = async (id: number) => {
  return await axios.delete(`${baseUrl}/${id}`)
}

export const favoriteService = {
  getAll,
  getIsFavorite,
  addFavorite,
  deleteFavorite,
}
