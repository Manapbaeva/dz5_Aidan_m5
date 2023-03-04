import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateUserForm from "./components/CreateUserForm";


const App = () => {
    const dispatch = useDispatch();
    const { user, error } = useSelector((state) => state.user);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        if (user) {
            setSuccessMessage("User created successfully!");
            setTimeout(() => {
                setSuccessMessage(null);
            }, 5000);
        }
    }, [user]);

    return (
        <div>
            <h1>Create User</h1>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <CreateUserForm/>
        </div>
    );
};

export default App;