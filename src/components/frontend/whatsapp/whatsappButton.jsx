import { config } from '../../../../config'
import './whataAppButton.scss';
// eslint-disable-next-line react/prop-types
export default function WhatsappButton({show}) {
    const showButton = show ? '10px':'-150px'
    return(
        <a href={`https://wa.me/${config.telephone}?text=Hola,%20estoy%20interesado%20en%20sus%20servicios`} target="_blank" className="whatsapp-button" style={{right: showButton}}>
           <i className="bi bi-whatsapp"></i>
        </a>
    )
}