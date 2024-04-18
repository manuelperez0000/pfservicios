import { Dialog } from 'primereact/dialog';
import { Zustand } from "../../../libs";
import { Divider } from 'primereact/divider';

export default function AuthModal(){
    const { open, content,setOpen, title,footer } = Zustand.useStore((state) => state.authModal)

    return(
        <Dialog header={title} visible={open} style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} onHide={() => setOpen(false)} footer={footer}>
             <Divider />
              {content}
            </Dialog>
    )

}