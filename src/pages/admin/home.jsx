import { Outlet } from "react-router-dom";
import { FrontendComponents } from "../../components";
import { Helmet } from "react-helmet";

export default function Home() {

    return (
        <>
            <Helmet>
                <title>PFServicios | Administración</title>
            </Helmet>
            <FrontendComponents.Layout.AdminLayout><Outlet /></FrontendComponents.Layout.AdminLayout>
        </>
    )
}