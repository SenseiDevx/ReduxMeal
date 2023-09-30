import React from 'react'
import {useSelector} from "react-redux"
import {useActions} from "../../hooks/useActions";
import {getUserById} from "../../store/user/userActions";
import {actions} from "../../store/favorites/favorites.slice";

const User = () => {
    const {isLoading, error, user} = useSelector(state => state.users)

    const {getUserById} = useActions()
    console.log(actions)

    return (
        <div>
            <button onClick={() => getUserById(1)}>Get user</button>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : user?.name ? (
                <h1>User: {user.name}</h1>
            ) : (
                <h1>USER NOT FOUND</h1>
            )}
        </div>
    )
}

export default User