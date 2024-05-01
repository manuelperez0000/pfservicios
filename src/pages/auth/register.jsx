/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Elements, FrontendComponents } from "../../components";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import { useNavigate } from "react-router-dom";
import './inputs.scss'
import { Zustand } from "../../libs";
import es from 'react-phone-input-2/lang/es.json'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { axios, cookieToken } from "../../utils";
import { Toast } from 'primereact/toast';



const schema = yup.object({
    username: yup.string().required("El nombre es requerido"),
    email: yup.string().email('Debe ser un correo valido').required("El correo es requerido"),
    phone: yup.string().required("El teléfono es requerido"),
    indentification: yup.string().required("La identificación es requerida"),
    newpassword: yup.string().required("La contraseña es requerida"),
    confirmPass: yup
        .string()
        .oneOf([yup.ref("newpassword")], "Las contraseñas no coinciden").required("Confirme la contraseña"),
}).required();

// eslint-disable-next-line react/prop-types
const Greetings = ({ name }) => { return (<div className="text-center"><h3 className="text-3xl font-bold">Gracias por registrarte {name}</h3> <h4 className="text-xl font-semibold">Presione el boton abajo para entrar a su cuenta</h4></div>) }
const Footer = () => {
    const { setAuthModal, selectOption } = Zustand.useStore()
    const navigate = useNavigate();
    const onClick = () => {
        if (selectOption) {
            navigate('/checkout')
        } else {
            navigate('/profile')

        }
        setAuthModal({ open: false })
    }
    return (<div className="flex justify-content-center"><button className="px-4 py-2 text-white duration-300 bg-primary hover:bg-secondary" onClick={onClick}>Aceptar</button></div>)
}

export default function Register() {
    const { setAuthModal, setIsLogin, setUserData, isLogin, setIsAdmin, selectOption } = Zustand.useStore()
    const navigate = useNavigate();
    const toast = useRef(null);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })



    const onSubmit = async (data) => {
        try {
            const response = await axios.createAxios().post('/user/create', data)
            const responseData = response.data

            if (response && response.status === 200) {
                const { data: { username, email, phone, indentification, role }, token } = responseData.data
                setUserData({ username, email, phone, indentification, role })
                setIsLogin(true)
                setIsAdmin(role)
                cookieToken.setCookieToken(token)
                setAuthModal({ open: true, content: <Greetings name={data.username} />, title: "Usuario creado", setOpen: () => { setAuthModal({ open: false }) }, footer: <Footer /> })
            }

        } catch (error) {
            const { data: { msg } } = error.response.data
            // console.log(data);
            toast.current.show({ severity: 'error', summary: msg.error.toUpperCase(), detail: msg.msg, life: 3000 });
        }
    }

    useEffect(() => {
        console.log(selectOption);
        if (isLogin) {
            navigate('/profile')
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>PFServicios | Registrarse</title>
            </Helmet>
            <FrontendComponents.Layout.AuthLayout bgBackground="/register.jpg">
                <Elements.CardComponent title={<h1 className="text-center text-blue-500">Registrarse</h1>} subtitle="" >
                    <Divider />
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="container flex flex-col gap-4 md:flex-row text-blue-900">
                            <div className="w-full pb-3 md:w-6/12">
                                <FloatLabel className="flex flex-col w-full gap-2">
                                    <label htmlFor="username">Nombre</label>
                                    <InputText id="username" {...register("username")} placeholder="Ej. Juan Pérez" />
                                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                                </FloatLabel>
                            </div>
                            <div className="w-full pb-3 md:w-6/12 text-blue-900">
                                <FloatLabel className="flex flex-col w-full gap-2">
                                    <label htmlFor="email">Correo</label>
                                    <InputText id="email" {...register("email")} placeholder="Ej. juan@pfservicios" />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                </FloatLabel>
                            </div>
                        </div>
                        <div className="container flex flex-col gap-4 md:flex-row text-blue-900">
                            <div className="w-full pb-3 md:w-6/12">
                                <FloatLabel className="flex flex-col w-full gap-2">
                                    <label htmlFor="phone">Teléfono de contacto</label>
                                    <div className="pass-wrapper">
                                        <Controller
                                            control={control}
                                            name="phone"
                                            render={({ field: { ref, ...field } }) => (
                                                <PhoneInput
                                                    {...field}
                                                    inputExtraProps={{
                                                        ref,
                                                        required: true,
                                                        autoFocus: true
                                                    }}
                                                    placeholder="Ej. +58000-000-0000"
                                                    localization={es}
                                                    country={'ve'}
                                                    className="m-0 w-full font-sans text-white/80 bg-gray-900 border border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg hover:border-blue-500 focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] p-3 text-base"
                                                    type="text"
                                                    id="phone"
                                                />
                                            )}
                                        />
                                    </div>
                                    {/*  <PhoneInputType register={register} indicator="phone" control={control}  placeHolder="Ej. +58000-000-0000" /> */}
                                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                                </FloatLabel>
                            </div>
                            <div className="w-full pb-3 md:w-6/12 text-blue-900">
                                <FloatLabel className="flex flex-col w-full gap-2">
                                    <label htmlFor="indentification">Cedula</label>
                                    <InputText id="indentification" {...register("indentification")} placeholder="Ej. 99.999.999" />
                                    {errors.indentification && <p className="text-red-500">{errors.indentification.message}</p>}
                                </FloatLabel>
                            </div>
                        </div>
                        <div className="container flex flex-col gap-4 md:flex-row text-blue-900">
                            <div className="w-full pb-3 md:w-6/12">
                                <FloatLabel className="flex flex-col w-full gap-2 pass">
                                    <label htmlFor="newpassword">Contraseña</label>
                                    <Elements.PasswordInput register={register} placeholder="Contraseña" indicator="newpassword" />
                                    {/*     <Password id="newpassword" className="block w-full"  {...register("newpassword")} placeholder="Contraseña"  feedback={false} tabIndex={1}  toggleMask/> */}
                                    {errors.newpassword && <p className="text-red-500">{errors.newpassword.message}</p>}
                                </FloatLabel>
                            </div>
                            <div className="w-full pb-3 md:w-6/12">
                                <FloatLabel className="flex flex-col w-full gap-2 pass">
                                    <label htmlFor="confirmPass">Confirmar Contraseña</label>
                                    <Elements.PasswordInput register={register} placeholder="Confirmar Contraseña" indicator="confirmPass" />
                                    {errors.confirmPass && <p className="text-red-500">{errors.confirmPass.message}</p>}
                                </FloatLabel>
                            </div>
                        </div>
                        <button className="w-full py-3 text-center text-white duration-300 rounded-md bg-secondary hover:bg-primary">Registrarse</button>
                    </form>
                </Elements.CardComponent>
                <Toast ref={toast} />
            </FrontendComponents.Layout.AuthLayout>
        </>
    )
}