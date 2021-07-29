import axios from 'axios'

const updateUser = (username, name, lastname, email) => {
  return axios.put('/api/profile/user', { username, name, lastname, email })
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error
    })
}

const updateSpecialist = (username, name, lastname, email, phone, bio, serviceType, servicePrice) => {
  return axios.put('/api/profile/specialist', { username, name, lastname, email, phone, bio, serviceType, servicePrice })
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error
    })
}

export { updateUser, updateSpecialist }