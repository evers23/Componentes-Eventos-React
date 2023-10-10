import { useState } from 'react';
import Alert from './Alert';


export default function Formulario ({ onInputChange, onSubmit}) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmContrasena, setConfirmContrasena] = useState('');
    const [mensajeErrors, setMensajeErrors] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === '' || email === '' || contrasena === '' || confirmContrasena === '') {
            setMensajeErrors('Completa todos los campos!');
            setMensajeExito('');
            return;
        }

        if (contrasena !== confirmContrasena) {
            setMensajeErrors('Contraseña Incorrecta!');
            setMensajeExito('');
            return;
        }

        setMensajeErrors('');
        setMensajeExito('Completado correctamente.');

    
        onSubmit(e); // Llamada a la función onSubmit pasada como prop

        setNombre('');
        setEmail('');
        setContrasena('');
        setConfirmContrasena('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ Width:'360px', height:'200px' }}>
            <div>
                <label htmlFor="nombre"></label>
                <input style={{ width: '230px', height: '28px', borderRadius: '7px'}}
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => { setNombre(e.target.value)
                    onInputChange(e);}}
                />
            </div>
            <div>
                <label htmlFor="email" style={{width: '195px'}}></label>
                <input style={{ width: '230px', height: '28px', borderRadius: '7px', margin: '5px'}}
                    type="email"
                    id="email"
                    placeholder="tuemail@ejemplo.com"
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value);
                    onInputChange(e);
                }}
                />
                {mensajeErrors.email && <span>{mensajeErrors.email}</span>}
            </div>
            <div>
                <label htmlFor="contrasena"></label>
                <input style={{ width: '230px', height: '28px', borderRadius: '7px', margin: '2px'}}
                    type="password"
                    id="contrasena"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => {
                        setContrasena(e.target.value);
                        onInputChange(e);
                    }}
                />
            </div>
            <div>
                <label htmlFor="confirmContrasena"></label>
                <input style={{ width: '230px', height: '28px', borderRadius: '7px', margin: '4px'}}
                    type="password"
                    id="confirmContrasena"
                    placeholder="Confirmar tu Contraseña"
                    value={confirmContrasena}
                    onChange={(e) => {
                        setConfirmContrasena(e.target.value);
                        onInputChange(e);
                    }}
                />
                {mensajeErrors.confirmContrasena && <span>{mensajeErrors.confirmContrasena}</span>}
              
            </div>
            <button style={{
                            width: '238px',
                            height: '34px',
                            margin: '7px',
                            borderRadius: '5px',
                            backgroundColor: '#126327',
                            color: '#ffffff',
                            }}
                            type="submit">Registrarse</button>
            <div className="card d-flex flex-column-center" style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height:'50px',
                            width: '235px',
                            borderRadius: '6px',
                        }}
                    >

                    {mensajeErrors && <Alert message={mensajeErrors} type="danger"/>}
                    {mensajeExito && <Alert message={mensajeExito} type="success"/>}
                </div>
            </div>
            

        </form>
    );
}