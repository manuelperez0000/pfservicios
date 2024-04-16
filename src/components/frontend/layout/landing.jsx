import Footer from "../footer";
import {Header} from "../header";

// eslint-disable-next-line react/prop-types
export default function LandingLayout({children}){
    return(
        <>
    <Header/>    
   <main> {children}</main>
    <Footer />
        </>
    )
}