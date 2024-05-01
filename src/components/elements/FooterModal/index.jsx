import { useNavigate } from "react-router-dom";
import { Zustand } from "../../../libs";

export default function FooterModal() {
    const { setAuthModal, isAdmin, selectOption } = Zustand.useStore()
    const navigate = useNavigate();
    const onClick = () => {
        if (isAdmin === 'admin') {
            navigate('/admin')
        } else {
            if (selectOption) {
                navigate('/checkout')
            } else {
                navigate('/profile')
            }
        }
        setAuthModal({ open: false })
    }
    return (<div className="flex justify-content-center"><button className="px-4 py-2 text-white duration-300 bg-primary hover:bg-secondary" onClick={onClick}>Aceptar</button></div>)
}
