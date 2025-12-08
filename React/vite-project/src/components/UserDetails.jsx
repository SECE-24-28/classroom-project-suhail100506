import { useEffect, useState } from "react";

const UserDetails = (props) => {
    const { currentPage } = props;
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect((props) => {

        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentPage}`);
            const data = await response.json();
            console.log(data);
            setUserData(data);
            setLoading(false);
        }

        fetchData();
    }, [currentPage]);

    return (
        <div className="w-[300px] mx-auto bg-orange-100 flex flex-col justify-center items-center border p-4 m-4">
            <h2 className="text-2xl">User Details</h2>
            {loading ? (
                <p className="text-2xl mb-2">Loading ...</p>
            ) : (
                <>
                    <h2 className="text-xl font-semibold">{userData.name}</h2>
                    <p className="text-md">{userData.email}</p>
                </>

            )}
        </div>
    );
}
export default UserDetails;