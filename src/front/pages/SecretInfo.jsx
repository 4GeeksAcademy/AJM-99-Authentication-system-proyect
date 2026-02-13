import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { privateCheck } from "../services/backendServices"

export const SecretInfo = () => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const checkAuth = async () =>{
        const response = await privateCheck()
        console.log(response)
        if (response) {
            setUser(response)
            setLoading(false)
        } else {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            setTimeout(() => {
                alert("You must be logged in to access this page.")
                navigate('/login')
            }, 1000)
        } else {
            checkAuth()
        }
    }, [])
    return (
        <>
        {loading? (<div className="container mt-5">
            <h1>Loading...</h1>
        </div>) : (
        <div className="container mt-5 bg-dark text-light p-5 rounded">
            <h1><strong>THE SECRET CONSPIRACYS OF THE WORLD</strong></h1>
            <p>Here you can find information about secret conspiracies that are hidden from the public. This information is only accessible to authorized users of our secret order.</p>
            <h1><strong>The birds aren't what they seem</strong></h1>
            <p>For centuries, birds have been a common sight in our skies, often seen as symbols of freedom and beauty. However, recent investigations have revealed a shocking truth: many birds are not what they seem. In fact, a significant portion of the bird population is believed to be part of a vast surveillance network operated by an unknown entity.</p>
            <p>Experts have long been puzzled by the behavior of certain bird species, which exhibit unusual patterns of movement and communication. It is now believed that these birds are equipped with advanced technology, allowing them to gather information and transmit it back to their operators. This revelation has raised concerns about privacy and security, as well as the implications for our understanding of the natural world.</p>
            <h1><strong>The center of the universe</strong></h1>
            <p>For centuries, humanity has pondered the nature of the universe and our place within it. While scientific discoveries have expanded our understanding of the cosmos, there remains a persistent belief that Earth is the center of the universe. This belief, often referred to as geocentrism, has been perpetuated by various cultural and religious traditions throughout history.</p>
            <p>Despite overwhelming evidence supporting the heliocentric model, which places the Sun at the center of our solar system, some individuals continue to advocate for geocentrism. This belief is often fueled by a desire to maintain a sense of importance and significance in the universe, as well as a resistance to scientific progress. The debate over the center of the universe continues to be a topic of discussion and controversy among scientists, philosophers, and the general public alike.</p>
            <h1><strong>Secret societies and their influence</strong></h1>
            <p>Throughout history, secret societies have been shrouded in mystery and intrigue. These clandestine organizations are often believed to wield significant influence over political, economic, and social affairs. From the Freemasons to the Illuminati, secret societies have been the subject of countless conspiracy theories and speculation.</p>
            <p>While some secret societies may indeed exist and operate in the shadows, it is important to approach these claims with a critical eye. Many conspiracy theories surrounding secret societies are based on unfounded assumptions and lack credible evidence. It is crucial to distinguish between fact and fiction when examining the influence of secret societies on our world.</p>
            <h1><strong>Conclusion</strong></h1>
            <p>In conclusion, the world is filled with mysteries and secrets that continue to captivate our imagination. From the true nature of birds to the center of the universe and the influence of secret societies, there are countless topics that invite exploration and discussion. It is essential to approach these subjects with an open mind and a critical perspective, seeking out credible sources and evidence to separate fact from fiction. As we continue to uncover the secrets of our world, we must remain vigilant in our pursuit of truth and understanding.</p>
            <button className="btn btn-danger w-100" onClick={logout}>Logout</button>
        </div>
        )}
        </>
    )
}
