import axios from "axios";
import { useEffect, useState } from "react"


function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then((response) => {
                console.log(response)
                const inputUsers = response.data;
                setUsers(inputUsers);
            })
            .catch((reason) => {
                console.error('Hai sbagliato, pippa', reason)
            })

    }, [])


    return (
        <div className="Users-box">
            <h1>User list</h1>
            <ul>
                {users.map(user =>
                    <li>{user.name} </li>
                )}
            </ul>
        </div>
    )
}
export { Users }