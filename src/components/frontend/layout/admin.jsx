/* eslint-disable react/prop-types */
import { Zustand } from "../../../libs";
import { AdminHeader } from "../../elements";
import { LateralNav } from "../../elements/lateralNav";
import './admin.scss'

export default function AdminLayout({ children }) {
    const { openLateralNav, userData } = Zustand.useStore()
    const lateralWidth = openLateralNav ? 'open' : ''
    return userData && (
        <div className="relative admin">
            <AdminHeader />
            <LateralNav />
            <main className={`min-h-screen justify-center items-start flex transition-all duration-500 p-3 main-content bg-slate-100 ${lateralWidth}`}>{children}</main>
        </div>
    )
}