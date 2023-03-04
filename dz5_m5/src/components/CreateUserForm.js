import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createUserAction} from "../redux/actions";

const CreateUserForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUserAction({ name, username, email, website }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Website:
                <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </label>
            <button type="submit">Create User</button>
        </form>
    );
};

export default CreateUserForm;