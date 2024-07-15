import { useState } from "react";

function LoginForm () {
    const [ formData, setFormData ] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formData;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
            id="username"
            type="text"
            placeholder="username"
            value="{formData.username"
            onChange={handleChange}
            />
        </form>
    )
}

export default LoginForm;