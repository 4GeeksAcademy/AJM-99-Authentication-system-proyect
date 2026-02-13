import { useEffect, useState } from "react"

export const TheXfiles = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            setTimeout(() => {
                alert("You must be logged in to access this page.")
                navigate('/login')
            }, 1000)
        } else {
            setLoading(false)
        }
    }, [])
    return (
        <>
        {loading? (<div className="container mt-5">
            <h1>Loading...</h1>
        </div>) : (
        <div className="container mt-5">
            <h1>The X-Files</h1>
            <p>Welcome to the world of The X-Files, where the truth is out there. Join agents Mulder and Scully as they investigate paranormal phenomena and uncover government conspiracies. From alien abductions to supernatural occurrences, The X-Files will keep you on the edge of your seat. Are you ready to explore the unknown?</p>
        </div>
        )}
        </>
    )
}
