import { useNavigate } from "react-router-dom";

export default function LostPassword() {
    const navigate = useNavigate();
    const getRecover = () => {
        navigate('/recover')
    }
    const getRegister = () => {
        navigate('/register')
    }
    return (
        <div className="flex flex-col justify-content-end">
            <span className="">¿Olvidaste tu contraseña?
                <button onClick={getRecover} className="duration-300 text-primary hover:text-secondary">
                    Recuperar contraseña</button></span> <span className="">¿No tienes una cuenta?
                <button onClick={getRegister} className="duration-300 text-primary hover:text-secondary">Registrate</button>
            </span>
        </div>)
}