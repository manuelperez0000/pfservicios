function HeroComponent() {
  return (
    <div className="flex flex-col-reverse justify-between md:flex-row surface-0 text-800">
    <div className="flex items-center w-full p-6 text-center md:w-6/12 md:text-left align-items-center justify-content-center ">
        <section>
            <h1 className="block mb-1 text-4xl font-bold">¿Necesita ayuda con su tecnología?</h1>
            <h2 className="mb-3 text-2xl font-bold lg:text-4xl text-primary">Expertos en informática a su servicio</h2>
            <p className="mt-0 mb-4 text-700 line-height-3">Contamos con un equipo de expertos experimentados que pueden ayudarlo a lograr sus objetivos.</p>

            <a href="/#services"  className="px-6 py-2 mr-3 font-bold text-white uppercase rounded-md bg-primary hover:bg-secondary">
                Servicios
            </a>
            <a href="/#about"  className="px-6 py-2 mr-3 font-bold text-white uppercase rounded-md bg-primary hover:bg-secondary">
                Nosotros
            </a>
            
        </section>
    </div>
    <div className="w-full overflow-hidden md:w-6/12">
        <img src="/hero-1.png" alt="hero-1" className="block object-cover w-full md:ml-auto md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
    </div>
</div>
  )
}

export default HeroComponent