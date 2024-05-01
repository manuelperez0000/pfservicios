import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Elements, FrontendComponents } from "../../components";
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import { useNavigate } from "react-router-dom";
import './inputs.scss'
import { Zustand } from "../../libs";
import { axios } from "../../utils";



const schema = yup.object({
    recoverEmail: yup.string().email('Debe ser un correo valido').required("El correo es requerido")
}).required();

// eslint-disable-next-line react/prop-types
const Greetings = ({ name }) => { return (<div className="text-center"><h3 className="text-3xl font-bold">Bienvenido {name}</h3> <h4 className="text-xl font-semibold">Hemos enviado un correo para restablecer tu contraseña</h4></div>) }

const Footer = () => {
    const { setAuthModal } = Zustand.useStore()
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/login')
        setAuthModal({ open: false })
    }
    return (<div className="flex justify-content-center"><button className="px-4 py-2 text-white duration-300 bg-primary hover:bg-secondary" onClick={onClick}>Aceptar</button></div>)
}
export default function Recover() {
    const toast = useRef(null);
    const { setAuthModal, isLogin } = Zustand.useStore()
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {

        const { recoverEmail } = data

        try {
            const recoverResponse = await axios.createAxios().post('/user/forgotpassword', { email: recoverEmail })

            console.log(recoverResponse.data)
            if (recoverResponse.data.status === 200 && recoverResponse.data.error === null) {
                setAuthModal({ open: true, content: <Greetings name={data.username} />, title: "Correo enviado", setOpen: () => { setAuthModal({ open: false }) }, footer: <Footer /> })
            }
        } catch (error) {
            const errorData = error.response.data;
            console.log(errorData);
            toast.current.show({ severity: 'error', summary: errorData.data.error, detail: 'El correo no coincide con nuestros registros', life: 3000 });
        }

    }
    useEffect(() => {
        if (isLogin) {
            navigate('/#sell-table')
        }
    }, [])
    return (<>
        <Helmet>
            <title>PFServicios | Recuperar contraseña</title>
        </Helmet>
        <FrontendComponents.Layout.AuthLayout bgBackground="/tarde.jpg">
            <Toast ref={toast} />
            <Elements.CardComponent title={<h1 className="text-center">Recuperar contraseña</h1>} subtitle={<h3 className="text-lg text-center">Si no recuerdas tu contraseña, puedes restablecerla aquí, introduzca su correo, y le enviaremos un enlace para restablecerla</h3>}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="container flex flex-col ">
                        <div className="w-full pb-10">
                            <FloatLabel className="flex flex-col w-full gap-2">
                                <label className="" htmlFor="recoverEmail">Correo electrónico</label>
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