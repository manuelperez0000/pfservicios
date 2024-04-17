import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form"
import { Elements, FrontendComponents } from "../../components";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import { Password } from "primereact/password";

export default function Register(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>{
        console.log(data)
        console.log(errors);
      }
    return (
       <>
        <Helmet>
            <title>PFServicios | Registrarse</title>
        </Helmet>
        <FrontendComponents.Layout.AuthLayout bgBackground="/register.jpg"> 
            <Elements.CardComponent title={<h1 className="text-center">Registrarse</h1>} subtitle="" >
                <Divider />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container flex flex-col gap-4 md:flex-row">
                        <div className="w-full pb-3 md:w-6/12">
                        <FloatLabel className="flex flex-col w-full gap-2">
                            <label htmlFor="username">Username</label>
                            <InputText id="username" {...register("username", { required: true, minLength: 3 })} placeholder="Nombre" />
                        </FloatLabel>
                        </div>
                        <div className="w-full pb-3 md:w-6/12">
                        <FloatLabel  className="flex flex-col w-full gap-2">
                            <label htmlFor="email">Email</label>
                            <InputText id="email" {...register("email", { required: true,  })} placeholder="Email" />
                        </FloatLabel>
                        </div>
                    </div>
                    <div className="container flex flex-col gap-4 md:flex-row">
                        <div className="w-full pb-3 md:w-6/12">
                        <FloatLabel className="flex flex-col w-full gap-2">
                            <label htmlFor="password">Contraseña</label>
                            <Password id="password" {...register("password", { required: true,minLength: 8  })} placeholder="Contraseña" className="block w-full" feedback={false} tabIndex={1}  toggleMask/>
                        </FloatLabel>
                        </div>
                        <div className="w-full pb-3 md:w-6/12">
                        <FloatLabel className="flex flex-col w-full gap-2">
                            <label htmlFor="confirm">confirmar Contraseña</label>
                            <Password id="confirm" {...register("confirm", { required: true,minLength: 8  })} placeholder="Contraseña" className="block w-full" feedback={false} tabIndex={1}  toggleMask  />
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