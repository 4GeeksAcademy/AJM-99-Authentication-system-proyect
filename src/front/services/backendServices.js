export const login = async (user, navigate) => {
    const response = await fetch (`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    const data = await response.json()
    if (!response.ok) {
        alert(data.error)
    }else {
        localStorage.setItem('token', data.token)
        navigate('/thexfiles');
    }

}

export const privateCheck = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
        return false
    }
    const response = await fetch (`${import.meta.env.VITE_BACKEND_URL}/api/profile`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
    const data = await response.json()
    if (!response.ok) {
        localStorage.removeItem('token')
        return false
    }
    return true 
}