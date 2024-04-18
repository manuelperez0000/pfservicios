import { useEffect } from 'react';
import { FrontendComponents } from '../../components';
import { Zustand } from '../../libs';
import { useNavigate } from 'react-router-dom';
export default function Profile() {
    const {isLogin} = Zustand.useStore()
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isLogin) navigate('/login')
    })
    return (
        <FrontendComponents.Layout.AuthLayout bgBackground="https://picsum.photos/1920/1080">Profile</FrontendComponents.Layout.AuthLayout>
    )
}