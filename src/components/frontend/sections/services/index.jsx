export default function Services() {
    return(
        <section id="services" className="py-20 text-center surface-0 md:py-28">
            <div className="px-5 pb-10 md:px-0">
                <h2 className="pb-10 mb-3 text-3xl font-bold">
                    <span className="text-900">Nuestros, </span>
                    <span className="text-primary">Servicios y soluciones</span>
                </h2>
                <div className="mb-6 text-700">Trabajamos con usted para comprender sus necesidades y brindarle las mejores soluciones posibles.</div>

            </div>
    <div className="">
        <article id="system" className="py-20 md:py-24">
            <div className="container flex flex-col-reverse items-center px-5 mx-auto md:flex-row justify-content-center md:px-0">
                <div className="w-full md:w-6/12">
                    <h3 className="mb-3 text-xl font-medium md:text-2xl text-primary text-900">Optimización de sistemas operativos</h3>
                        <p className="text-700 line-height-3">¿Cansado de la lentitud?  Nuestro servicio te ayuda a que tu equipo vuele. ¡Diagnóstico y solución de problemas!  <b>Contáctanos</b> y disfruta de una experiencia más rápida y segura.</p>
                </div>
                <div className="w-full pb-6 md:w-6/12 md:pb-0">
                    <img
                        src="/system-op.svg"
                        alt="Optimización de sistemas operativos"
                        className="w-full"
                    />
                </div> 
            </div>
        </article>
        <article id="virus" className="py-20 md:py-24 bg-zinc-100">
            <div className="container flex flex-col items-center px-5 mx-auto md:flex-row justify-content-center md:px-0">
            <div className="w-full pb-6 md:w-6/12 md:pb-0">
                    <img
                        src="/virus.svg"
                        alt="Eliminación de virus de forma segura"
                        className="w-full"
                    />
                </div> 
                <div className="w-full md:w-6/12 ">
                    <h3 className="mb-3 text-xl font-medium md:text-2xl text-primary text-900">Eliminación de virus de forma segura</h3>
                        <p className="text-700 line-height-3">¿Sospechas que tu equipo está infectado? Nuestro servicio de eliminación de virus te ayuda a eliminar cualquier amenaza de forma segura y proteger tu información.</p>
                </div>
                
            </div>
        </article>
        <article id="servers" className="py-20 md:py-24">
            <div className="container flex flex-col-reverse items-center px-5 mx-auto md:flex-row justify-content-center md:px-0">
                <div className="w-full md:w-6/12">
                    <h3 className="mb-3 text-xl font-medium md:text-2xl text-primary text-900">Asesoría en gestión de servidores</h3>
                        <div className="text-700 line-height-3">Optimiza la gestión de tus servidores con nuestra asesoría experta.</div>
                </div>
                <div className="w-full pb-6 md:w-6/12 md:pb-0">
                    <img
                        src="/servers.svg"
                        alt="Asesoría en gestión de servidores"
                        className="w-full"
                    />
                </div> 
            </div>
        </article>
       
        
    </div>
</section>
    )
}