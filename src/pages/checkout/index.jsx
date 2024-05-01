/* eslint-disable no-irregular-whitespace */

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Elements, FrontendComponents } from "../../components";
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from "primereact/inputnumber";
import { SelectButton } from "primereact/selectbutton";
import { Dialog } from "primereact/dialog";
import { ScrollPanel } from "primereact/scrollpanel";
import { axios } from "../../utils";
import { Toast } from "primereact/toast";
import useCheckout from "./useCheckout";

const clientId = import.meta.env.VITE_CLIENT_ID;

export default function Checkout() {

    const { downloadPdf, targetRef, value, selectOptions, setValue, amount, setOpenDialog, openDialog,
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
    } = useCheckout()

    /* console.log(selectOption, userData); */

    return (
        <FrontendComponents.Layout.AuthLayout bgBackground="https://picsum.photos/1920/1080">
            <Elements.CardComponent title="Checkout" subtitle="Selecciona el servicio y el método de pago">

                <div className="flex flex-col w-full gap-2 pb-10">
                    <label htmlFor="selectOption">Seleccione un servicio</label>

                    <Dropdown
                        id="selectOption"
                        name="selectOption"
                        className="w-full min-w-full"
                        value={value}
                        options={selectOptions}
                        onChange={(e) => setValue(e.value)}
                    />

                </div>
                <div className="flex flex-col w-full gap-2 mb-4">
                    <label htmlFor="selectOption">Precio a pagar por el servicio</label>

                    <InputNumber pt={{
                        root: {
                            className: "block flex flex-col  w-full min-w-full"
                        }
                    }} inputId="currency-us" className="block w-full min-w-full" placeholder="$0.00" value={amount} onValueChange={(e) => setAmount(e.value)} mode="currency" currency="USD" locale="en-US" />

                </div>

                <div className="flex justify-center w-full pb-10">
                    <button
                        type="button"
                        disabled={value && amount ? false : true}
                        className={`px-6 py-2 mr-3 font-bold text-white uppercase rounded-md disabled:opacity-50 bg-primary hover:bg-secondary disabled:cursor-not-allowed`}
                        onClick={() => setOpenDialog(true)}>Pagar
                    </button>
                </div>
                <Dialog visible={openDialog} breakpoints={{ '960px': '75vw', '641px': '100vw' }} style={{ width: '50vw' }} onHide={() => { setChecked(options[0]); setOpenDialog(false) }}>

                    <ScrollPanel style={{ width: '100%', height: '200px' }}>
                        <div className="flex flex-col flex-wrap items-center justify-center w-full gap-2">
                            <div className="w-12/12">
                                <p className="pb-4 text-lg text-center semi-bold">
                                    Yo, <b className="text-xl bold text-primary">{userData.username} </b> de la persona, titular del correo de cuenta PayPal <b className="text-xl bold text-primary">{userData.email}</b>, he realizado el pago de <b className="text-xl bold text-primary">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)} USD</b> por el servicio <b className="text-xl bold text-primary">{getDescriptionByOption(value)}</b> realizados conscientemente por mi persona y a mi entera satisfacción, quedando totalmente satisfecho con el servicio profesional recibidos, renunciando a cualquier tipo de reembolso.
                                </p>
                            </div>
                        </div>
                    </ScrollPanel>
                    <div className="flex justify-center w-full pt-4">
                        <SelectButton className="flex justify-center" value={checked} onChange={(e) => setChecked(e.value)} options={options} />
                    </div>
                    <div className="block w-full pt-6">
                        <div className="flex justify-center flex-1 mx-auto">
                            {accessToken && amount && checked === options[1] && (<PayPalScriptProvider options={{ clientId: clientId }}>
                                <PayPalButtons createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                description: getDescriptionByOption(value),
                                                amount: {
                                                    value: amount,
                                                    currency_code: "USD"
                                                }
                                            }
                                        ]
                                    })
                                }}
                                    onApprove={async (data, actions) => {
                                        const order = await actions.order.capture();
                                        axios.createAxios().post(`/order/create`, {
                                            user: userData,
                                            description: getDescriptionByOption(value),
                                            amount: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount),
                                            paymentMethod: {
                                                payment_gateway: 'paypal',
                                                paymentOrder: order
                                            },
                                            accepted: checked,
                                        }).then(res => {
                                            const { data } = res.data;
                                            console.log(data);
                                            setOpenDialog(false);
                                            setOrderData(order);
                                            setChecked(options[0]);
                                            setShowBill(true);
                                            setAmount(null);
                                        }).catch(err => {
                                            console.log(err)
                                            toast.current.show({ severity: 'error', summary: 'Error', detail: 'No se pudo revisar el pago', life: 3000 });
                                        })

                                        // Aqui enviaremos la orden a la base de datos

                                    }}
                                />
                            </PayPalScriptProvider>)
                            }
                        </div>
                    </div>

                </Dialog>
            </Elements.CardComponent>
            <Dialog visible={showBill} breakpoints={{ '960px': '75vw', '641px': '100vw' }} style={{ padding: '5px', width: '100%', overflowY: 'auto', maxWidth: '680px' }} className="xl:overflow-hidden" onHide={() => { setShowBill(false) }}>
                <ScrollPanel style={{ width: '100%', minHeight: '60vh', overflowY: 'auto' }}>
                    <div ref={targetRef}>
                        <Elements.Billing orderData={orderData} userData={userData} />
                    </div>
                </ScrollPanel>
                <div className="flex justify-center w-full">
                    <button
                        type="button"
                        className={`px-6 py-2 mr-3 font-bold text-white uppercase rounded-md disabled:opacity-50 bg-primary hover:bg-secondary disabled:cursor-not-allowed`}
                        onClick={downloadPdf}><i className="bi bi-printer"></i> imprimir</button>
                </div>
            </Dialog>
            <Toast ref={toast} />
        </FrontendComponents.Layout.AuthLayout>
    );
}
