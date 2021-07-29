import axios from 'axios'

const fetch = (id, role) => {
  return axios.get('/api/profile', { id, role }
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error
    })
  )
}

const update = (user) => {
  return axios.put('/api/profile', { user }
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error
    })
  )
}

export { fetch, update }