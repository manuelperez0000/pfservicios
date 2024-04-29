import { Outlet } from "react-router-dom";
import { FrontendComponents } from "../../components";

export default function Home() {

    return (
        <FrontendComponents.Layout.AdminLayout><Outlet /></FrontendComponents.Layout.AdminLayout>
    )
}