import { Helmet } from "react-helmet";
import { Elements, FrontendComponents } from "../../components";

export default function Recover(){

    return (<>
     <Helmet>
            <title>PFServicios | Iniciar sesión</title>
        </Helmet>
        <FrontendComponents.Layout.AuthLayout bgBackground="/tarde.jpg">
             <Elements.CardComponent title={<h1 className="text-center">Iniciar sesión</h1>} subtitle="" >

</Elements.CardComponent>
        </FrontendComponents.Layout.AuthLayout>
    </>
    )
}