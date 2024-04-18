import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Elements, FrontendComponents } from "../../components";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import {  useNavigate } from "react-router-dom";
import './inputs.scss'
import { Zustand } from "../../libs";


const schema = yup.object({
    email: yup.string().email('Debe ser un correo valido').required("El correo es requerido"),
    newpassword: yup.string().required("La contraseña es requerida"),
}).required();


// eslint-disable-next-line react/prop-types
const Greetings = ({name})=>{return(<div className="text-center"><h3 className="text-3xl font-bold">Bienvenido {name}</h3> <h4 className="text-xl font-semibold">Presione el boton abajo para entrar a su cuenta</h4></div>)}

const Footer = ()=>{
    const {setAuthModal} = Zustand.useStore()
    const navigate = useNavigate(); 
    const onClick = ()=>{
        navigate('/profile')
        setAuthModal({open:false})
    }  
    return( <div className="flex justify-content-center"><button className="px-4 py-2 text-white duration-300 bg-primary hover:bg-secondary" onClick={onClick}>Aceptar</button></div> )
}

const LostPassword = ()=>{
    const navigate = useNavigate();
    const getRecover = ()=>{
        navigate('/recover')
    }
    const getRegister = ()=>{
        navigate('/register')
    }
    return( <div className="flex flex-col justify-content-end"> <span className="text-white">¿Olvidaste tu contraseña? <button onClick={getRecover} className="duration-300 text-primary hover:text-secondary">Recuperar contraseña</button></span> <span className="text-white">¿No tienes una cuenta? <button onClick={getRegister} className="duration-300 text-primary hover:text-secondary">Registrate</button></span> </div> )
}


export default function Login() {
    const {setAuthModal,setIsLogin,setUserData,isLogin,setIsAdmin} = Zustand.useStore()
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })

      const onSubmit = (data) =>{
        console.log(data)
        console.log(errors);
        setIsLogin(true)
        const {email} = data
        const userData = {username:'Juan', email:email, phone:'12345678', role:'admin', indentification:'12345678'} 
        setUserData(userData)
        setIsAdmin('admin')
        setAuthModal({open:true, content:<Greetings name={data.username} />, title:"Acceso exitoso",setOpen:()=>{setAuthModal({open:false})},footer:<Footer />})
      }
      useEffect(()=>{
        if (isLogin) {
          navigate('/profile')
        }
    },[])

    return (
        <>
        <Helmet>
            <title>PFServicios | Iniciar sesión</title>
        </Helmet>
        <FrontendComponents.Layout.AuthLayout bgBackground="/logon-bg.jpg">
            <Elements.CardComponent title={<h1 className="text-center">Iniciar sesión</h1>} subtitle="" >
                <Divider/>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container flex flex-col gap-4">
                        <div className="w-full pb-3">
                        <FloatLabel  className="flex flex-col w-full gap-2">
                            <label htmlFor="email">Correo</label>
                            <InputText id="email" {...register("email")} placeholder="Ej. juan@pfservicios" />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </FloatLabel>
                        </div>
                        <div className="w-full pb-3">
                        <FloatLabel className="flex flex-col w-full gap-2 pass">
                            <label htmlFor="newpassword">Contraseña</label>
                            <Elements.PasswordInput register={register} placeholder="Contraseña" indicator="newpassword" />
                        {/*     <Password id="newpassword" className="block w-full"  {...register("newpassword")} placeholder="Contraseña"  feedback={false} tabIndex={1}  toggleMask/> */}
                            {errors.newpassword && <p className="text-red-500">{errors.newpassword.message}</p>}
                        </FloatLabel>
                        </div>
                    </div>
           <button className="w-full py-3 text-center text-white duration-300 rounded-md bg-secondary hover:bg-primary">Iniciar sesión</button>
                </form>
                <Divider/>
                <LostPassword/>
            </Elements.CardComponent>
        </FrontendComponents.Layout.AuthLayout>
        </>
    )
}