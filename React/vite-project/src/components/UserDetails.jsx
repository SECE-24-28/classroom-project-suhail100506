import { useEffect, useState, useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

const UserDetails = () => {
    const { currentPage } = useContext(GlobalContext)
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState({})
    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentPage}`)
            const data = await response.json()
            console.log(data)
            setUserData(data)
            setLoading(false)
        }
        fetchData()
    }, [currentPage])
    return (
        <div className="w-[500px] mt-5 mx-auto bg-orange-100 flex flex-col justify-center items-center p-10 border-2">
            <h1 className="text-3xl mb-2 underline">User Details</h1>
            {loading ? (
                <p className="text-xl mb-2">Loading...</p>
            ) : (
                <h1 className="text-2xl">{userData.name}</h1>
            )}

        </div>
    )
}

export default UserDetails