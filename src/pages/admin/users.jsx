/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { axios } from "../../utils"
import { Zustand } from '../../libs';
import { Toast } from 'primereact/toast';




const DateComponent = (user) => {
    //console.log(user);
    const date = new Date(user.createdAt)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
}

const statusType = [
    {
        label: 'Activo',
        value: true,
        color: 'green'
    },
    {
        label: 'Inactivo',
        value: false,
        color: 'red'
    }
]
const userType = [
    'user',
    'admin'
]

export default function AdminUsers() {
    const { userData } = Zustand.useStore()
    const [users, setUsers] = useState([]);
    const inputRef = useRef(null);

    const getAllUsers = async () => {
        const fetchUsers = await axios.createAxios().get('/user/getusers/admin');
        const usersData = await fetchUsers.data
        const { data: { users } } = usersData.data
        setUsers(users)
    }

    const RoleComponent = ({ user }) => {
        const userRef = useRef(null)
        //   console.log(user);
        const [trigger, setTrigger] = useState(false)
        const [statusValue, setStatusValue] = useState(user.role)

        const updateStatus = async () => {

            const updateStatus = await axios.createAxios().put('/user/update', { role: statusValue, id: user.id })
            const updataData = await updateStatus.data;
            // console.log(updataData);
            if (updataData.status === 200) {
                const { msg, data: { role } } = updataData.data

                getAllUsers()
                setStatusValue(role)
                setTrigger(false)
                userRef.current.show({ severity: 'success', summary: msg, detail: '', life: 3000 })
            }
        }
        return !trigger ? (<div className='relative flex items-start min-w-[140px] text-sm gap-2 justify-start'> <span className='text-sm'>{user.role}</span> <button
            className='p-2 pt-0 text-sm'
            onClick={() => setTrigger(true)}
        >
            <i className='text-green-500 text-md hover:text-green-600 bi bi-pencil-square' />
        </button> </div>) : (<div className='relative text-md flex items-start justify-start gap-2 min-w-[140px]'><div className='flex button-container'>
            <select onChange={(e) => setStatusValue(e.target.value)} value={statusValue} className='text-sm bg-transparent'>
                {
                    userType.map((type, index) => <option key={index} className={`text-sm text-zinc-900`} selected={user.role === type} value={type}>{type}</option>)
                }
            </select>
            <button >
                <i className='text-sm text-green-500 hover:text-green-600 bi bi-check' onClick={() => updateStatus()} />
            </button>
            <button onClick={() => setTrigger(false)}>
                <i className='text-sm text-red-500 hover:text-red-600 bi bi-x' />
            </button>
        </div>
            <Toast userRef={inputRef} />
        </div>)

    }

    const StatusComponent = ({ user }) => {
        const userRef = useRef(null)
        //  console.log(user);
        const [trigger, setTrigger] = useState(false)
        const [statusValue, setStatusValue] = useState(user.active)

        const updateStatus = async () => {

            const updateStatus = await axios.createAxios().put('/user/delete', { active: statusValue, id: user.id })
            const updataData = await updateStatus.data;
            // console.log(updataData);
            if (updataData.status === 200) {
                const { msg, user: { active } } = updataData.data
                // console.log(updataData);
                getAllUsers()
                setStatusValue(active)
                setTrigger(false)
                userRef.current.show({ severity: 'success', summary: msg, detail: '', life: 3000 })
            }
        }
        return !trigger ? (<div className='relative flex items-start min-w-[140px] text-sm gap-2 justify-start'> <span className='text-sm'>{statusValue ? 'Activo' : 'Inactivo'}</span>  <button
            className='p-2 pt-0 text-sm'
            onClick={() => setTrigger(true)}
        >
            <i className='text-green-500 text-md hover:text-green-600 bi bi-pencil-square' />
        </button> </div>) : (<div className='relative text-md flex items-start justify-start gap-2 min-w-[140px]'><div className='flex button-container'>
            <select onChange={(e) => setStatusValue(e.target.value)} value={statusValue} className='text-sm bg-transparent'>
                {
                    statusType.map((status, index) => <option key={index} className='text-slate-900' selected={statusValue === status.value} value={status.value}>{status.label}</option>)
                }
            </select>
            <button >
                <i className='text-sm text-green-500 hover:text-green-600 bi bi-check' onClick={() => updateStatus()} />
            </button>
            <button onClick={() => setTrigger(false)}>
                <i className='text-sm text-red-500 hover:text-red-600 bi bi-x' />
            </button>
        </div>
            <Toast userRef={inputRef} />
        </div>)
    }

    const searchUser = async () => {
        // console.log(inputRef.current.value);
        if (inputRef.current.value.length > 0) {
            try {
                const fetchUsers = await axios.createAxios().get('/user/getusers')
                const usersData = await fetchUsers.data
                const { data: { users } } = usersData.data
                setUsers(users.filter(user => user.email.includes(inputRef.current.value)))
            } catch (error) {
                console.log(error);
            }
        }
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div className="container relative flex flex-col  items-center justify-start shadow-sm w-full h-full bg-white rounded-md min-h-[70vh] px-3">
            <h1 className="mt-6 mb-4 text-3xl font-bold text-center text-gray-800">
                Lista de usuarios
            </h1>

            <div className="w-full px-4 py-2 mb-4 rounded-md bg-zinc-400 max-w-[70vw]">
                <div className="flex flex-row items-center justify-between flex-1 p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="text-gray-900 bi bi-search"></i>
                    </span>
                    <input type="text" className='w-6/12 h-12 p-2 rounded-none p-inputtext ' ref={inputRef} onChange={searchUser} id="" />
                </div>
            </div>
            <div className="container min-h-[70vh]">
                <DataTable value={users} paginator rows={20} pt={{
                    table: {
                        className: "bg-gray-900"
                    }
                }} stripedRows emptyMessage="No hay usuarios" tableStyle={{ minWidth: '70vw' }}>
                    <Column field="username" header="Usuario" />
                    <Column field="email" header="Correo" />
                    <Column field="phone" header="Telefono" />
                    <Column field="indentification" header="Identificación" />
                    <Column field="role" header="Rol" body={(user) => user.email !== userData.email ? <RoleComponent user={user} /> : <span className='text-sm'>{user.role}</span>} />
                    <Column field="active" header="Activo" body={(user) => user.email !== userData.email ? <StatusComponent user={user} /> : <></>} />
                    <Column field="createdAt" header="Usuario creado" body={DateComponent} />
                </DataTable>
            </div>
        </div >
    )
}




/**
 * Prueba datatable
 */

