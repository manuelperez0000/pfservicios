import { OpenButton } from "../lateralNav";
import Logo from './../../frontend/header/logo';

export default function AdminHeader() {
    return (
        <header
            id="admin-auth"
            className={` shadow-md header z-50 fixed top-0 w-full h-[70px] flex items-center justify-center transition-all duration-300 bg-white`}
        >
            <div className="container flex items-center justify-between w-full px-4">
                <Logo logoUrl={'/admin'} />
                <div className="flex items-center justify-end gap-2 menu-section">
                    <div className="flex items-center justify-end gap-2">
                        <OpenButton />
                    </div>
                </div>
            </div>
        </header>
    )
}