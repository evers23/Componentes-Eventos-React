import { useState } from "react";

export default function Login({ setMessage, setAlertColor }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Corrección: Cambiar e.target.Value a e.target.value
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value); // Corrección: Cambiar e.target.Value a e.target.value
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            setMessage('Por favor, complete todos los campos');
            alert('complete los campos');
            setAlertColor('danger');
        } else {
            setMessage('Inicio de sesión exitosa');
            setAlertColor('success');
        }

        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2>Login :</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
}

