import axios from 'axios'

const apiInstance = axios.create({
    baseURL: 'http://api.github.com'
})

export const searchUsers = async(text) => {
    const params = new URLSearchParams({ q: text })
    const response = await apiInstance.get(`/search/users?${params}`)
    return response.data.items
}

export const getUserAndRepos = async(login) => {
    const [user, repos] = await Promise.all([
        apiInstance.get(`/users/${login}`),
        apiInstance.get(`/users/${login}/repos`),
    ])

    return { user: user.data, repos: repos.data }
}