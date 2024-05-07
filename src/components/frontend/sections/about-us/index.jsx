export default function AboutUs() {
    return (
        <section id="about" className="flex flex-col gap-4 px-3 py-20 md:py-28 bg-zinc-100">
            <div className="container flex flex-col-reverse mx-auto md:flex-row">
                <div className="flex items-center w-full md:w-6/12">
                    <div className="flex flex-col justify-center gap-3">
                        <h2 className="pb-5 text-lg font-bold lg:text-3xl">¿Quiénes Somos en  <span className="uppercase text-primary ubuntu-bold-italic">
                            pfservicios?
                        </span></h2>
                        <div className="text-about text-md lg:text-lg">
                            <p>
                                En <span className="uppercase text-primary ubuntu-bold-italic">
                                    pfservicios
                                </span>, somos más que un simple servicio de help desk. Somos un equipo apasionado por la tecnología y comprometidos con brindarle soluciones informáticas integrales que optimicen su negocio.
                            </p>
                            <p>
                                En <span className="uppercase ubuntu-bold-italic">
                                    pfservicios
                                </span>, creemos que la tecnología es una herramienta poderosa que puede
                                ayudarlo a alcanzar sus objetivos. Por eso, estamos aquí para brindarle
                                el soporte que necesita para que pueda aprovechar al máximo su potencial.
                            </p>
                            <h3 className="mt-4 text-lg lg:text-xl">
                                ¡Contáctenos hoy mismo y experimente la diferencia de
                                <span className="uppercase text-primary ubuntu-bold-italic">
                                    pfservicios
                                </span>!
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-6/12">
                    <div className="text-3xl font-bold">
                        <img src="/about.svg" alt="hero-1" className="block object-cover w-full md:ml-auto md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}