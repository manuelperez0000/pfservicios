import { Skeleton } from 'primereact/skeleton';
import { Zustand } from "../../../libs"
import './lateralNav.scss'
import { adminRoutes } from '../../../router';
import LateralNavItems from './lateralNavItems';
export default function LateralNav() {
    const { openLateralNav, userData } = Zustand.useStore()
    const lateralWidth = openLateralNav ? ' open' : ''
    return (
        <aside className={`lateralNav${lateralWidth} p-4 shadow-md`}>
            <nav role="navigation" className="menu-container">
                <div className="block mb-4">
                    <div className="flex items-center justify-start ">
                        <div className="flex items-center justify-center gap-2 ">
                            {
                                userData.username ? (<div className="flex items-center w-[40px] h-[40px] justify-center h-full p-3">
                                    <i className={`text-xl bi bi-person-circle`}></i>
                                </div>) : <Skeleton shape="circle" size="2rem" className="" />
                            }
                        </div>

                        {
                            userData.username ? <h2 className="text-2xl font-bold text-items-title">{userData.username}</h2> : <Skeleton shape="circle" size="4rem" className="" />
                        }

                    </div>
                </div>
                {
                    adminRoutes.map((route, index) => {
                        return <LateralNavItems key={index} route={route} />
                    })
                }

            </nav>
        </aside>
    )
}