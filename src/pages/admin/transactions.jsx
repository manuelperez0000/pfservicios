import { useEffect, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { axios } from "../../utils"
import { TabMenu } from 'primereact/tabmenu';
import { Dialog } from 'primereact/dialog';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Elements } from '../../components';




const statusType = [
    'PENDIENTE',
    'APROBADO',
    'RECHAZADO'
]
const statusColor = [
    'yellow-500',
    'green-500',
    'red-500'
]

const DateComponent = (user) => {
    return new Date(user.createdAt).toLocaleDateString('en-GB')
}

const TimeComponent = (user) => {
    return new Date(user.createdAt).toLocaleTimeString('en-GB')
}

const DiferenceComponent = (user) => {
    return user.user.email === user.paymentMethod.paymentOrder.payer.email_address ? <div className='text-center text-green-500'>Si</div> : <div className='text-center text-red-500'>No</div>
}





export default function Transactions() {

    const [showBill, setShowBill] = useState(false);
    const [transactions, setTransactions] = useState({ ordenes: [], total: 0 });
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTransaction, setActiveTransaction] = useState(null);




    const itemRenderer = (item, itemIndex) => {

        const opacity = activeIndex === itemIndex ? 'opacity-100' : 'opacity-50'
        const hoverColor = [
            'hover:text-yellow-500 hover:border-b-yellow-500',
            'hover:text-green-500 hover:border-b-green-500',
            'hover:text-red-500 hover:border-b-red-500'
        ]
        const itemColor = [
            'text-yellow-500 border-b-yellow-500',
            'text-green-500 border-b-green-500',
            'text-red-500 border-b-red-500'
        ]


        return (
            <button className={`p-menuitem-link duration-300 transition-all hover:opacity-100 ${opacity} ${hoverColor[itemIndex]} hover border-b-2 flex align-items-center w-full px-3 py-2 gap-2 ${itemColor[itemIndex]} `} onClick={() => setActiveIndex(itemIndex)}>
                <span className="font-bold">{item.name}</span>
            </button>
        )
    };
    const items = [
        {
            name: 'Pendientes',

            template: (item) => itemRenderer(item, 0)
        },
        {
            name: 'Aprobadas',

            template: (item) => itemRenderer(item, 1)
        },
        {
            name: 'Rechazadas',

            template: (item) => itemRenderer(item, 2)
        }
    ]


    const getOrders = async () => {
        const fetchOrders = await axios.createAxios().get('/order/getorders')
        const { ordenes, total } = await fetchOrders.data.data;
        setTransactions({ ordenes, total });
    }

    const openDetail = (orderId) => {
        const order = transactions.ordenes.find((order) => order.id === orderId)
        setActiveTransaction(order)
        setShowBill(true)
    }

    const StatusComponent = (user) => {
        const selectRef = useRef(null)
        const [trigger, setTrigger] = useState(false)
        const textColor = user.status === 'PENDIENTE' ? 'text-yellow-500' : user.status === 'APROBADO' ? 'text-green-500' : 'text-red-500'

        const updateStatus = async () => {
            const statusRef = selectRef.current.value;
            const updateStatus = await axios.createAxios().post('/order/update', { status: statusRef, id: user.id })
            const updataData = await updateStatus.data;
            console.log(updataData);
            if (updataData.status === 200) {
                setTrigger(false)
                getOrders()
            }
        }

        return !trigger ? (<div className='relative flex items-center min-w-[140px] text-sm gap-2 justify-start'> <span className={`text-sm ${textColor}`}>{user.status}</span>  <button
            className='p-2 text-sm'
            onClick={() => setTrigger(true)}
        >
            <i className='text-green-500 text-md hover:text-green-600 bi bi-pencil-square' />
        </button> </div>) : (<div className='relative text-md flex items-center justify-start gap-2 min-w-[140px]'><div className='flex button-container'>
            <select ref={selectRef} className='text-sm bg-transparent'>
                {
                    statusType.map((status, index) => <option key={index} className={`text-sm text-${statusColor[index]}`} selected={user.status === status} value={status}>{status}</option>)
                }
            </select>
            <button >
                <i className='text-sm text-green-500 hover:text-green-600 bi bi-check' onClick={updateStatus} />
            </button>
            <button onClick={() => setTrigger(false)}>
                <i className='text-sm text-red-500 hover:text-red-600 bi bi-x' />
            </button>
        </div></div>)
    }

    useEffect(() => {
        getOrders()
    }, [])
    return (
        <div className="container relative px-4 block shadow-sm w-full h-full bg-white rounded-md min-h-[70vh]">
            <h1 className="mt-6 mb-4 text-3xl font-bold text-center text-gray-800">
                Lista de transacciones
            </h1>
            <div className="container block min-w-full px-2 mb-4">
                <TabMenu model={items} pt={{
                    root: {
                        className: "w-full"
                    },
                    menu: {
                        className: "w-full justify-end"
                    }
                }} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
            <DataTable value={transactions.ordenes.filter((order) => order.status === statusType[activeIndex])} paginator rows={20} pt={{
                table: {
                    className: "bg-gray-900"
                },
                column: {
                    className: "bg-gray-900"
                }

            }} stripedRows emptyMessage="No hay Transacciones" tableStyle={{ minWidth: '70vw' }}>
                <Column field="createdAt" header="Fecha" body={DateComponent} />
                <Column field="createdAt" header="Hora" body={TimeComponent} />
                <Column field="user.email" header="Correo de usuario" />
                <Column field="amount" header="Monto" />
                <Column field="user.email" header="Mismo correo" body={DiferenceComponent} />
                <Column field="status" header="Estado" body={StatusComponent} />
                <Column field="user.id" header="Ver Detalle" body={(user) => { const id = user.id; return <button onClick={() => openDetail(id)} className='p-2 px-3 text-sm text-white rounded hover:bg-secondary bg-primary'>Detalles</button> }} />
            </DataTable>
            <Dialog visible={showBill} breakpoints={{ '960px': '75vw', '641px': '100vw' }} style={{ padding: '5px', width: '100%', overflowY: 'auto', maxWidth: '680px' }} className="xl:overflow-hidden" onHide={() => { setShowBill(false) }}>
                <ScrollPanel style={{ width: '100%', minHeight: '60vh', overflowY: 'auto' }}>

                    {
                        activeTransaction && <Elements.Billing orderData={activeTransaction.paymentMethod.paymentOrder} userData={activeTransaction.user} />
                    }

                </ScrollPanel>
                <div className="flex justify-center w-full">

                </div>
            </Dialog>
        </div>

    );
}