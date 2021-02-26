import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';

const User = () => {
    let history = useHistory()
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website:"",
    });

    const {name, username, email, phone, website} = user;

    useEffect(() => {
        loadUser();
    }, [])//empty array because not work for finite

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3003/users/" + id ); //other way `http://localhost:3003/users/${id}`
        setUser(result.data)
    };

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
            </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">user name: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">website: {user.website}</li>
             </ul>
        </div>
    )
}

export default User
