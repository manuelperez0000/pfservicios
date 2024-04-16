// eslint-disable-next-line react/prop-types
export default function CallToAction({title, description, buttonTitle, link}) {
    return(
        <section className="px-5 py-20 md:py-24 md:px-0 bg-secondary">
            <div className="container flex flex-col mx-auto md:flex-row">
                <div className="w-full text-center md:w-9/12 md:text-left">
                    <h2 className="text-3xl font-bold text-white">{title}</h2>
                    <p className="text-xl text-white">{description}</p>
                </div>
                <div className="flex items-center justify-center w-full pt-8 md:pt-0 md:w-3/12">
                    <a href={`${link}`} className="px-6 py-2 mr-3 font-bold uppercase bg-white rounded-md text-primary hover:bg-gray-300">{buttonTitle}</a>
                </div>
            </div>
        </section>
    )
}