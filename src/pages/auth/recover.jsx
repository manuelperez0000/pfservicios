import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Elements, FrontendComponents } from "../../components";
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import {  useNavigate } from "react-router-dom";
import './inputs.scss'
import { Zustand } from "../../libs";


const schema = yup.object({
    recoverEmail: yup.string().email('Debe ser un correo valido').required("El correo es requerido")
}).required();

// eslint-disable-next-line react/prop-types
const Greetings = ({name})=>{return(<div className="text-center"><h3 className="text-3xl font-bold">Bienvenido {name}</h3> <h4 className="text-xl font-semibold">Presione el boton abajo para entrar a su cuenta</h4></div>)}

const Footer = ()=>{
    const {setAuthModal} = Zustand.useStore()
    const navigate = useNavigate(); 
    const onClick = ()=>{
        navigate('/login')
        setAuthModal({open:false})
    }  
    return( <div className="flex justify-content-center"><button className="px-4 py-2 text-white duration-300 bg-primary hover:bg-secondary" onClick={onClick}>Aceptar</button></div> )
}
export default function Recover(){
    const toast = useRef(null);
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
        const {recoverEmail} = data
        const userData = {username:'Juan', email:'juanvs23@gmail.com', phone:'12345678', role:'admin', indentification:'12345678'}
        
        if (recoverEmail== userData.email) {
            setUserData(userData)
            setIsAdmin('admin')
            setAuthModal({open:true, content:<Greetings name={data.username} />, title:"Acceso exitoso",setOpen:()=>{setAuthModal({open:false})},footer:<Footer />})
            
        }else{
            toast.current.show({severity:'error', summary: 'Correo no encontrado', detail:'El correo no coincide con nuestros registros', life: 3000});
        }
      }
    useEffect(()=>{
        if (isLogin) {
          navigate('/login')
        }
    },[])
    return (<>
     <Helmet>
            <title>PFServicios | Recuperar contraseña</title>
        </Helmet>
        <FrontendComponents.Layout.AuthLayout bgBackground="/tarde.jpg">
        <Toast ref={toast} />
             <Elements.CardComponent title={<h1 className="text-center">Recuperar contraseña</h1>} subtitle={ <h3 className="text-lg text-center text-white">Si no recuerdas tu contraseña, puedes restablecerla aqui, introduzca su correo, y le enviaremos un enlace para restablecerla</h3> }>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="container flex flex-col ">
                        <div className="w-full pb-10">
                        <FloatLabel  className="flex flex-col w-full gap-2">
                            <label className="text-center" htmlFor="recoverEmail">Correo electrónico</label>
                            <InputText id="recoverEmail" {...register("recoverEmail")} placeholder="Ej. juan@pfservicios" />
                            {errors.recoverEmail && <p className="text-red-500">{errors.recoverEmail.message}</p>}
                        </FloatLabel>
                        </div>
                    </div>
            
           <button className="w-full py-3 text-center text-white duration-300 rounded-md bg-secondary hover:bg-primary">Recuperar contraseña</button>
           </form>      


</Elements.CardComponent>
        </FrontendComponents.Layout.AuthLayout>
    </>
    )
}