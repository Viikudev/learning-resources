import axios from "axios"

const baseUrl = "http://localhost:3001/resources"

const getAll = async () => {
  return await axios.get(baseUrl)
}

const getOne = async (id: number) => {
  return await axios.get(`${baseUrl}/${id}`)
}

export const resourceService = {
  getAll,
  getOne,
}
