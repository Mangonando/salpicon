import axios from 'axios'

//This is the Client
const signup = (email, username, password) => {
    return axios.post('/api/auth/signup', { email, username, password })
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
}

const login = (username, password) => {
    return axios.post('/api/auth/login', { username, password })
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
}
//This is the end of the Client

//This is the Specialist
const specialistSignup = (email, username, name, lastname, password) => {
    return axios.post('/api/auth/specialist-signup', { email, username, name, lastname, password })
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
}

const specialistLogin = (username, password) => {
    return axios.post('/api/auth/specialist-login', { username, password })
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
}
//This is the end of the Specialist

const logout = () => {
    return axios.delete('/api/auth/logout')
    .then(response => {
        return response.data
    })
    .catch(err => {
        return err
    })
}

export { signup, login, logout, specialistSignup, specialistLogin }