import './auth.scss'
import AuthFooter from "../footer/authFooter";

import AuthHeader from "../header/authHeader";

// eslint-disable-next-line react/prop-types
export default function AuthLayout({children,bgBackground}){
    return(
        <>
    <AuthHeader/>    
   <main className="flex items-center justify-center w-full min-h-screen bg-cover" style={{backgroundImage: `url(${bgBackground})`}}> {children}</main>
    <AuthFooter/>
        </>
    )
}