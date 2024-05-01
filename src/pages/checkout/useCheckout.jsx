import generatePDF from "react-to-pdf";
import { Zustand } from "../../libs";
import { useState, useEffect, useRef } from "react";
import { config } from '../../../config'

const useCheckout = () => {

    const targetRef = useRef()

    const toast = useRef(null);
    const { selectOption, userData } = Zustand.useStore();
    const [orderData, setOrderData] = useState({})
    const options = ['No', 'Si'];
    const [value, setValue] = useState(selectOption);
    const [amount, setAmount] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [checked, setChecked] = useState(options[0]);
    const [showBill, setShowBill] = useState(false);

    const downloadPdf = () => generatePDF(targetRef, {
        filename: `${orderData.id}.pdf`,
        page: {
            margin: 20
        }
    })

    const getDescriptionByOption = (option) => {
        const description = selectOptions.find((item) => item.value === option).label
        return description;
    }

    const GetAccessToken = async () => {
        const url = `${config.devServerUrl}/api/paypal/gettoken`;
        const getToken = await fetch(url)
        const data = await getToken.json();
        setAccessToken(data);
    }

    useEffect(() => { GetAccessToken() }, [])

    const selectOptions = [

        {
            label: 'Optimización de sistemas operativos',
            value: 'optimization'
        },
        {
            label: 'Eliminación de virus de forma segura',
            value: 'eliminacion-de-virus'
        },
        {
            label: 'Asesoría en gestión de servidores',
            value: 'gestion-de-servidores'
        }
    ]

    return {
        downloadPdf, 
        targetRef, 
        value, 
        selectOptions, 
        setValue, 
        amount, 
        setOpenDialog, 
        openDialog,
        userData,
        checked,
        setChecked,
        accessToken,
        options,
        getDescriptionByOption,
        setOrderData,
        setShowBill,
        setAmount,
        toast,
        showBill,
        orderData
    }
}

export default useCheckout