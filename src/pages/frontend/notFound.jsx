import { Helmet } from "react-helmet";
import { FrontendComponents } from "../../components";
import Footer from "../../components/frontend/footer";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>PFServicios | Página no encontrada</title>
            </Helmet>
            <FrontendComponents.Header.AuthHeader />
            <main className="min-h-[74vh] py-20 flex flex-col justify-center items-center">
                <div className="container flex flex-col items-center justify-center gap-3">
                    <h1 className="text-5xl font-semibold text-center ">404</h1>
                    <img src="/404.svg" alt="Not Found" className="max-w-[500px] " />
                    <h2 className="text-2xl font-bold text-center text-primary">Página no encontrada</h2>
                </div>
            </main>
            <Footer />
        </>
    )
}