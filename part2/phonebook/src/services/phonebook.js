import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newContact) => {
    const request = axios.post(baseUrl, newContact)
    return request.then(response => response.data)
}

const remove = (id) => axios.delete(`${baseUrl}/${id}`)

const update = (id, contact) => {
    const request = axios.put(`${baseUrl}/${id}`, contact)
    return request.then(response => response.data)
}

export default { getAll, create, remove, update }
