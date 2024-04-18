import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Elements, FrontendComponents } from "../../components";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import { InputMask } from 'primereact/inputmask';
import {  useNavigate } from "react-router-dom";
import './inputs.scss'
import { Zustand } from "../../libs";


export default function CheckoutPage() {

    return (
        <>
        <Helmet>
            <title>PFServicios | Registrarse</title>
        </Helmet>
        <FrontendComponents.Layout.AuthLayout bgBackground="/register.jpg"> 
            <Elements.CardComponent title={<h1 className="text-center">Registrarse</h1>} subtitle="" >
                <Divider />
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="container flex flex-col gap-4 md:flex-row">
                        <div className="w-full pb-3 md:w-6/12">
                        <FloatLabel className="flex flex-col w-full gap-2">
                            <label htmlFor="username">Nombre</label>
                            <InputText id="username" {...register("username")} placeholder="Ej. Juan Pérez" />
                            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                        </FloatLabel>
                        </div>
                        <div className="w-full pb-3 md:w-6/12">
                        <FloatLabel  className="flex flex-col w-full gap-2">
                            <label htmlFor="email">Correo</label>
                            <InputText id="email" {...register("email")} placeholder="Ej. juan@pfservicios" />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </FloatLabel>
                        </div>
                    </div>
                    <div className="container flex flex-col gap-4 md:flex-row">
                        <div className="w-full pb-3 md:w-6/12">
                        <FloatLabel className="flex flex-col w-full gap-2">
                            <label htmlFor="phone">Nombre</label>
                            <InputMask id="phone" {...register("phone")}  mask="+58999-999-9999" placeholder="Ej. +58000-000-0000" />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                        </FloatLabel>
                        </div>
                        <div className="w-full pb-3 md:w-6/12">
                        <FloatLabel  className="flex flex-col w-full gap-2">
                            <label htmlFor="indentification">Cedula</label>
                            <InputText id="indentification" {...register("indentification")} placeholder="Ej. 99.999.999" />
                            {errors.indentification && <p className="text-red-500">{errors.indentification.message}</p>}
                        </FloatLabel>
                        </div>
                    </div>
                    <div className="container flex flex-col gap-4 md:flex-row">
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
        </FrontendComponents.Layout.AuthLayout>
       </>
    )
}