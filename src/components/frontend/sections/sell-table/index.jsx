import { Button } from 'primereact/button';

export default function SellTable() {
    return(
        <section id="sell-table" className="py-20 text-center surface-0 md:py-28">
            <div className="container px-5 mx-auto md:px-0 ">
    <div className="mb-4 text-lg font-bold text-center lg:text-3xl text-900">Nuestros <span className="uppercase text-primary ubuntu-bold-italic">
        Planes
      </span> </div>
    <div className="mb-6 text-center text-md md:text-lg xl:text-xl text-700 line-height-3"> Estas a un paso de iniciar con nuestros servicios, elige el plan que mejor se ajuste a tus necesidades.</div>

    <div className="flex flex-col gap-4 lg:flex-row">
        <div className="w-full shadow-lg lg:w-4/12">
            <div className="h-full p-3 ">
                <div className="flex flex-col h-full p-3 shadow-2" style={{ borderRadius: '6px' }}>
                    <div className="mb-2 text-xl font-bold text-primary text-900">Optimización de sistemas operativos</div>
                    <div className="text-600">Descripción del servicio</div>
                    <hr className="mx-0 my-3 border-top-1 border-bottom-none border-300" />
                    <div className="flex text-center lg:text-left">
                       
                    </div>
                    <hr className="mx-0 my-3 border-top-1 border-bottom-none border-300" />
                    <ul className="p-0 m-0 list-none flex-grow-1">
                        <li className="flex mb-3 text-center lg:text-left">
                        <i className="mr-3 text-lg bi bi-check2-circle text-lime-600"></i>
                            <span>Archivos temporales y programas innecesarios que ocupan espacio y ralentizan el sistema.</span>
                        </li>
                        <li className="flex mb-3 text-center lg:text-left">
                        <i className="mr-3 text-lg bi bi-check2-circle text-lime-600"></i>
                            <span>Errores de registro que causan inestabilidad y fallos.</span>
                        </li>
                        <li className="flex mb-3 text-center lg:text-left">
                        <i className="mr-3 text-lg bi bi-check2-circle text-lime-600"></i>
                            <span>Configuración deficiente que limita el rendimiento del hardware.</span>
                        </li>
                    </ul>
                    <hr className="mx-0 mt-auto mb-3 border-top-1 border-bottom-none border-300" />
                    <Button label="Contratar" className="w-full p-3 mt-auto" />
                </div>
            </div>
        </div>
        <div className="w-full shadow-lg lg:w-4/12">
            <div className="h-full p-3">
                <div className="flex flex-col h-full p-3 shadow-2" style={{ borderRadius: '6px' }}>
                    <div className="mb-2 text-xl font-bold text-primary text-900">Eliminación de virus de forma segura</div>
                    <div className="text-600">Descripción del servicio</div>
                    <hr className="mx-0 my-3 border-top-1 border-bottom-none border-300" />
                    
                    <hr className="mx-0 my-3 border-top-1 border-bottom-none border-300" />
                    <ul className="p-0 m-0 list-none flex-grow-1">
                        <li className="flex mb-3 text-center lg:text-left">
                        <i className="mr-3 text-lg bi bi-check2-circle text-lime-600"></i>

                            <span>Detectar y eliminar virus, malware y spyware.</span>
                        </li>
                        <li className="flex mb-3 text-center lg:text-left">
                        <i className="mr-3 text-lg bi bi-check2-circle text-lime-600"></i>
                            <span>Instalar y configurar herramientas que Neutralicen posibles amenazas en tiempo real.</span>
                        </li>
                        <li className="flex mb-3 text-center lg:text-left">
                        <i className="mr-3 text-lg bi bi-check2-circle text-lime-600"></i>

                            <span>Proteger tu privacidad y datos confidenciales.</span>
                        </li>
                    </ul>
                    <hr className="mx-0 mt-auto mb-3 border-top-1 border-bottom-none border-300" />
                    <Button label="Contratar" className="w-full p-3 mt-auto" />
                </div>
            </div>
        </div>
        <div className="w-full shadow-lg lg:w-4/12">
            <div className="h-full p-3">
                <div className="flex flex-col h-full p-3 shadow-2" style={{ borderRadius: '6px' }}>
                    <div className="mb-2 text-xl font-bold text-primary text-900">Asesoría en gestión de servidores</div>
                    <div className="text-600">Descripción del servicio</div>
                    <hr className="mx-0 my-3 border-top-1 border-bottom-none border-300" />
                    <hr className="mx-0 my-3 border-top-1 border-bottom-none border-300" />
                    <ul className="p-0 m-0 list-none flex-grow-1">
                        <li className="flex mb-3 text-center lg:text-left">
                        <i className="mr-3 text-lg bi bi-check2-circle text-lime-600"></i>
                            <span>Mejorar el rendimiento y la disponibilidad.</span>
                        </li>
                        <li className="flex mb-3 text-center lg:text-left">
                        <i className="mr-3 text-lg bi bi-check2-circle text-lime-600"></i>
                            <span>Reducir costos y aumentar la seguridad.</span>
                        </li>
                        <li className="flex mb-3 text-center lg:text-left">
                        <i className="mr-3 text-lg bi bi-check2-circle text-lime-600"></i>
                            <span>Escalar tu infraestructura de forma eficiente.</span>
                        </li>
                    </ul>
                    <hr className="mx-0 mt-auto mb-3 border-top-1 border-bottom-none border-300" />
                    <Button label="Contratar" className="w-full p-3 mt-auto" />
                </div>
            </div>
        </div>
    </div>
</div>
        </section>
    )
}