/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import useLogout from "../../../hooks/useLogout";



const LateralLink = ({ route }) => {
    let location = useLocation();
    const isActive = location.pathname === `${route.path}` ? true : false;
    //  console.log(location);
    return (
        <Link to={route.path} className={`block w-full rounded-md mb-2  hover:bg-primary hover:text-white ${isActive ? "bg-primary text-white" : ""}`}>
            <div className="flex items-center gap-2">
                <div className="flex items-center w-[40px] h-[40px] justify-center h-full p-3">
                    <i className={`text-xl ${route.icon}`}></i>
                </div> <h3 className="flex items-center justify-start w-full h-full text-items-title text-md">{route.title}</h3>
            </div>
        </Link>
    )
}

const LateralAction = ({ route }) => {
    let action
    let logout = useLogout();
    switch (route.action) {
        case 'logout':
            action = () => logout();
            break;
        default:
            action = () => { };
            break;
    }
    return (<button className={`block w-full rounded-md mb-2 hover:bg-primary hover:text-white`} onClick={action} >
        <div className="flex items-center gap-2">
            <div className="flex items-center w-[40px] h-[40px] justify-center h-full p-3">
                <i className={`text-xl ${route.icon}`}></i>
            </div> <h3 className="flex items-center justify-start w-full h-full text-items-title text-md">{route.title}</h3>
        </div>
    </button>)
}

export default function LateralNavItems({ route }) {

    return (
        <>
            {
                route.action ? <LateralAction route={route} /> : <LateralLink route={route} />
            }
        </>
    )
}