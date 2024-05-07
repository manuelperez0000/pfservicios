/* eslint-disable react/prop-types */
import './billing.scss';

export default function Billing({ orderData, userData }) {

    const { description, amount } = orderData.purchase_units[0];
    const { payer: { name, email_address, payer_id } } = orderData;
    const getDate = (date) => {
        return new Date(date).toLocaleDateString('en-GB')
    }
    return (
        <>
            <table style={{ borderCollapse: 'collapse', tableLayout: 'fixed', borderSpacing: 0, msoTableLspace: '0pt', msoTableRspace: '0pt', verticalAlign: 'top', minWidth: '320px', margin: '0 auto', backgroundColor: '#e7e7e7', width: '100%' }} cellPadding={0} cellSpacing={0}>
                <tbody>
                    <tr style={{ verticalAlign: 'top' }}>
                        <td style={{ wordBreak: 'break-word', borderCollapse: 'collapse !important', verticalAlign: 'top' }}>
                            <table width="100%" cellPadding={0} cellSpacing={0} border={0}><tbody><tr><td align="center" style={{ backgroundColor: '#e7e7e7' }}>
                                <table cellPadding={0} cellSpacing={0} border={0} style={{ margin: '0 auto', minWidth: '320px', maxWidth: '600px' }}>
                                    <tbody><tr>
                                        <td style={{ backgroundImage: 'url(https://cdn.templates.unlayer.com/assets/1650477101141-header.png)' }} valign="top" width="100%">

                                            <div className="u-row-container" style={{ padding: '0px', backgroundImage: 'url("/bill/image-4.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', backgroundColor: 'transparent' }}>
                                                <div className="u-row" style={{ margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent' }}>
                                                    <div style={{ borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                                                        <table width="100%" cellPadding={0} cellSpacing={0} border={0}><tbody><tr><td style={{ padding: '0px', backgroundImage: 'url("/bill/image-4.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', backgroundColor: 'transparent' }} align="center"><table cellPadding={0} cellSpacing={0} border={0} style={{ width: '600px' }}><tbody><tr style={{ backgroundColor: 'transparent' }}>
                                                            <td align="center" width={600} style={{ width: '600px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                                <div className="u-col u-col-100" style={{ maxWidth: '320px', minWidth: '600px', display: 'table-cell', verticalAlign: 'top' }}>
                                                                    <div style={{ height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                        <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                            <table style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                            <table width="100%"><tbody><tr><td>
                                                                                                <h1 className="v-font-size" style={{ margin: '0px', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontSize: '30px', fontWeight: 700 }}><strong style={{ color: '#1E68FA' }}>PFSERVICIOS</strong></h1>
                                                                                            </td></tr></tbody></table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr></tbody></table></td></tr></tbody></table>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody></table>
                                <div className="u-row-container" style={{ padding: '0px', backgroundColor: 'transparent' }}>
                                    <div className="u-row no-stack" style={{ margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent' }}>
                                        <div style={{ borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                                            <table width="100%" cellPadding={0} cellSpacing={0} border={0}><tbody><tr><td style={{ padding: '0px', backgroundColor: 'transparent' }} align="center"><table cellPadding={0} cellSpacing={0} border={0} style={{ width: '600px' }}><tbody><tr style={{ backgroundColor: 'transparent' }}>
                                                <td align="center" width={199} style={{ backgroundColor: '#ffffff', width: '199px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-33p33" style={{ maxWidth: '320px', minWidth: '199.98px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table id="u_content_image_4" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '40px 5px 5px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                                                    <tbody><tr>
                                                                                        <td style={{ paddingRight: '0px', paddingLeft: '0px' }} align="center">
                                                                                            <img align="center" border={0} src="/bill/image-3.png" alt="Barcode " title="Barcode " style={{ outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic', clear: 'both', display: 'inline-block !important', border: 'none', height: 'auto', float: 'none', width: '27%', maxWidth: '51.29px' }} width="51.29" className="v-src-width v-src-max-width" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '12px 10px 38px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '14px', fontWeight: 400 }}><span>Factura NO: <strong>{orderData.id}</strong></span></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td align="center" width={210} style={{ backgroundColor: '#ffffff', width: '210px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-35" style={{ maxWidth: '320px', minWidth: '210px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table id="u_content_image_5" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '40px 5px 5px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                                                    <tbody><tr>
                                                                                        <td style={{ paddingRight: '0px', paddingLeft: '0px' }} align="center">
                                                                                            <img align="center" border={0} src="/bill/image-1.png" alt="Calendar " title="Calendar " style={{ outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic', clear: 'both', display: 'inline-block !important', border: 'none', height: 'auto', float: 'none', width: '17%', maxWidth: '34px' }} width={34} className="v-src-width v-src-max-width" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table id="u_content_heading_3" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 10px 38px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '14px', fontWeight: 400 }}><span>Fecha de facturación:<br /><strong>{getDate(orderData.update_time)}</strong></span></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td align="center" width={190} style={{ backgroundColor: '#ffffff', width: '190px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-31p67" style={{ maxWidth: '320px', minWidth: '190.02px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table id="u_content_image_6" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '41px 5px 5px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                                                                                    <tbody><tr>
                                                                                        <td style={{ paddingRight: '0px', paddingLeft: '0px' }} align="center">
                                                                                            <img align="center" border={0} src="/bill/image-2.png" alt="Dollar " title="Dollar " style={{ outline: 'none', textDecoration: 'none', msInterpolationMode: 'bicubic', clear: 'both', display: 'inline-block !important', border: 'none', height: 'auto', float: 'none', width: '28%', maxWidth: '50.41px' }} width="50.41" className="v-src-width v-src-max-width" />
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table id="u_content_heading_4" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '12px 10px 38px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '14px', fontWeight: 400 }}>Total: <br /> <strong>$ {amount.value} {amount.currency_code}</strong></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr></tbody></table></td></tr></tbody></table>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-row-container" style={{ padding: '0px', backgroundColor: 'transparent' }}>
                                    <div className="u-row no-stack" style={{ margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent' }}>
                                        <div style={{ borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                                            <table width="100%" cellPadding={0} cellSpacing={0} border={0}><tbody><tr><td style={{ padding: '0px', backgroundColor: 'transparent' }} align="center"><table cellPadding={0} cellSpacing={0} border={0} style={{ width: '600px' }}><tbody><tr style={{ backgroundColor: 'transparent' }}>
                                                <td align="center" width={200} style={{ backgroundColor: '#1b1c4a', width: '200px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-33p33" style={{ maxWidth: '320px', minWidth: '200px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#1b1c4a', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table id="u_content_heading_5" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', color: '#ffffff', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '18px', fontWeight: 400 }}><span><span><strong>Descripción</strong></span></span></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td align="center" width={200} style={{ backgroundColor: '#1b1c4a', width: '200px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-33p33" style={{ maxWidth: '320px', minWidth: '200px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#1b1c4a', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table id="u_content_heading_6" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', color: '#ffffff', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '18px', fontWeight: 400 }}><span></span></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td align="center" width={200} style={{ backgroundColor: '#1b1c4a', width: '200px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-33p33" style={{ maxWidth: '320px', minWidth: '200px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#1b1c4a', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table id="u_content_heading_7" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', color: '#ffffff', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '18px', fontWeight: 400 }}><strong>Total</strong></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr></tbody></table></td></tr></tbody></table>
                                        </div>
                                    </div>
                                </div>


                                <div className="u-row-container" style={{ padding: '0px', backgroundColor: 'transparent' }}>
                                    <div className="u-row no-stack" style={{ margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent' }}>
                                        <div style={{ borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                                            <table width="100%" cellPadding={0} cellSpacing={0} border={0}><tbody><tr><td style={{ padding: '0px', backgroundColor: 'transparent' }} align="center"><table cellPadding={0} cellSpacing={0} border={0} style={{ width: '600px' }}><tbody><tr style={{ backgroundColor: 'transparent' }}>
                                                <td align="center" width={200} style={{ backgroundColor: '#ffffff', width: '200px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-33p33" style={{ maxWidth: '320px', minWidth: '200px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 10px 12px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '14px', fontWeight: 400 }}>{description}</h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td align="center" width={200} style={{ backgroundColor: '#ffffff', width: '200px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-33p33" style={{ maxWidth: '320px', minWidth: '200px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table id="u_content_heading_14" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '20px 10px 21px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '14px', fontWeight: 400 }}></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td align="center" width={200} style={{ backgroundColor: '#ffffff', width: '200px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-33p33" style={{ maxWidth: '320px', minWidth: '200px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table id="u_content_heading_30" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '20px 10px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '14px', fontWeight: 400 }}><strong>$ {amount.value} {amount.currency_code}</strong></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr></tbody></table></td></tr></tbody></table>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-row-container" style={{ padding: '0px', backgroundColor: 'transparent' }}>
                                    <div className="u-row no-stack" style={{ margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent' }}>
                                        <div style={{ borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                                            <table width="100%" cellPadding={0} cellSpacing={0} border={0}><tbody><tr><td style={{ padding: '0px', backgroundColor: 'transparent' }} align="center"><table cellPadding={0} cellSpacing={0} border={0} style={{ width: '600px' }}><tbody><tr style={{ backgroundColor: 'transparent' }}>
                                                <td align="center" width={400} style={{ backgroundColor: '#ffffff', width: '400px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-66p67" style={{ maxWidth: '320px', minWidth: '400px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table id="u_content_heading_31" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 0px 0px 270px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', color: '#1b1c4a', lineHeight: '140%', textAlign: 'left', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '20px', fontWeight: 400 }}><strong>TOTAL</strong></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td align="center" width={200} style={{ backgroundColor: '#1b1c4a', width: '200px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-33p33" style={{ maxWidth: '320px', minWidth: '200px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#1b1c4a', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table id="u_content_heading_15" style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 10px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', color: '#ffffff', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '18px', fontWeight: 400 }}><strong>$ {amount.value} {amount.currency_code}</strong></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr></tbody></table></td></tr></tbody></table>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-row-container" style={{ padding: '0px', backgroundColor: 'transparent' }}>
                                    <div className="u-row" style={{ margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent' }}>
                                        <div style={{ borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                                            <table width="100%" cellPadding={0} cellSpacing={0} border={0}><tbody><tr><td style={{ padding: '0px', backgroundColor: 'transparent' }} align="center"><table cellPadding={0} cellSpacing={0} border={0} style={{ width: '600px' }}><tbody><tr style={{ backgroundColor: 'transparent' }}>
                                                <td align="center" width={600} style={{ backgroundColor: '#ffffff', width: '600px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-100" style={{ maxWidth: '320px', minWidth: '600px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '20px 10px 0px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table width="100%"><tbody><tr><td>
                                                                                    <h1 className="v-font-size" style={{ margin: '0px', color: '#1b1c4a', lineHeight: '140%', textAlign: 'center', wordWrap: 'break-word', fontFamily: '"Montserrat",sans-serif', fontSize: '24px', fontWeight: 700 }}><strong style={{ color: '#1E68FA' }}>Aclaratoria</strong></h1>
                                                                                </td></tr></tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr></tbody></table></td></tr></tbody></table>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-row-container" style={{ padding: '0px', backgroundColor: 'transparent' }}>
                                    <div className="u-row" style={{ margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent' }}>
                                        <div style={{ borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                                            <table width="100%" cellPadding={0} cellSpacing={0} border={0}><tbody><tr><td style={{ padding: '0px', backgroundColor: 'transparent' }} align="center"><table cellPadding={0} cellSpacing={0} border={0} style={{ width: '600px' }}><tbody><tr style={{ backgroundColor: 'transparent' }}>
                                                <td align="center" width={600} style={{ backgroundColor: '#ffffff', width: '600px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-100" style={{ maxWidth: '320px', minWidth: '600px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px 10px 20px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <div className="v-font-size" style={{ fontSize: '14px', lineHeight: '180%', textAlign: 'center', wordWrap: 'break-word' }}>
                                                                                    <p style={{ fontSize: '14px', lineHeight: '110%' }}><span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px' }}> Yo, <b style={{ color: '#1E68FA', fontWeight: 700 }}>{userData.username} </b> de la persona, titular del correo de cuenta PayPal <b style={{ color: '#1E68FA', fontWeight: 700 }}>{userData.email}</b>, he quedado totalmente satisfecho con el servicio profesional recibido, renunciando a cualquier tipo de reembolso.</span></p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr></tbody></table></td></tr></tbody></table>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-row-container" style={{ padding: '0px', backgroundColor: 'transparent' }}>
                                    <div className="u-row" style={{ margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent' }}>
                                        <div style={{ borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                                            <table width="100%" cellPadding={0} cellSpacing={0} border={0}><tbody><tr><td style={{ padding: '0px', backgroundColor: 'transparent' }} align="center"><table cellPadding={0} cellSpacing={0} border={0} style={{ width: '600px' }}><tbody><tr style={{ backgroundColor: 'transparent' }}>
                                                <td align="center" width={600} style={{ backgroundColor: '#ffffff', width: '600px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-100" style={{ maxWidth: '320px', minWidth: '600px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table height="0px" align="center" border={0} cellPadding={0} cellSpacing={0} width="100%" style={{ borderCollapse: 'collapse', tableLayout: 'fixed', borderSpacing: 0, msoTableLspace: '0pt', msoTableRspace: '0pt', verticalAlign: 'top', borderTop: '1px solid #dfdfdf', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%' }}>
                                                                                    <tbody>
                                                                                        <tr style={{ verticalAlign: 'top' }}>
                                                                                            <td style={{ wordBreak: 'break-word', borderCollapse: 'collapse !important', verticalAlign: 'top', fontSize: '0px', lineHeight: '0px', msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%' }}>
                                                                                                <span>
                                                                                                    <h2 style={{ fontSize: '16px', textAlign: 'left', color: '#1E68FA', lineHeight: 1.5 }}> Datos del cliente </h2>
                                                                                                    <p style={{ textAlign: 'left', fontSize: '10px', color: 'black', lineHeight: 1.2 }}><b style={{ color: 'black', fontWeight: 600 }}>Nombre del cliente:</b> {userData.username}</p>
                                                                                                    <p style={{ textAlign: 'left', fontSize: '10px', color: 'black', lineHeight: 1.2 }}><b style={{ color: 'black', fontWeight: 600 }}>Correo del cliente:</b> {userData.email}</p>
                                                                                                    <p style={{ textAlign: 'left', fontSize: '10px', color: 'black', lineHeight: 1.2 }}><b style={{ color: 'black', fontWeight: 600 }}>Identificación del cliente:</b> {userData.indentification}</p>
                                                                                                    <p style={{ textAlign: 'left', fontSize: '10px', color: 'black', lineHeight: 1.2 }}><b style={{ color: 'black', fontWeight: 600 }}>Teléfono del cliente:</b> {userData.phone}</p>
                                                                                                </span>
                                                                                            </td>
                                                                                            <td style={{ wordBreak: 'break-word', borderCollapse: 'collapse !important', verticalAlign: 'top', fontSize: '0px', lineHeight: '0px', msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%' }}>
                                                                                                <span>
                                                                                                    <h2 style={{ fontSize: '16px', textAlign: 'left', color: '#1E68FA', lineHeight: 1.5 }}>Datos cuenta Paypal</h2>
                                                                                                    <p style={{ textAlign: 'left', fontSize: '10px', color: 'black', lineHeight: 1.2 }}><b style={{ color: 'black', fontWeight: 600 }}>Nombre:</b> {name.given_name}  {name.surname}</p>
                                                                                                    <p style={{ textAlign: 'left', fontSize: '10px', color: 'black', lineHeight: 1.2 }}><b style={{ color: 'black', fontWeight: 600 }}>Correo:</b>{email_address}</p>
                                                                                                    {/**payer_id */}
                                                                                                    <p style={{ textAlign: 'left', fontSize: '10px', color: 'black', lineHeight: 1.2 }}><b style={{ color: 'black', fontWeight: 600 }}>Paypal Id:</b>{payer_id}</p>
                                                                                                </span>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr></tbody></table></td></tr></tbody></table>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-row-container" style={{ padding: '0px', backgroundColor: 'transparent' }}>
                                    <div className="u-row" style={{ margin: '0 auto', minWidth: '320px', maxWidth: '600px', overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word', backgroundColor: 'transparent' }}>
                                        <div style={{ borderCollapse: 'collapse', display: 'table', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                                            <table width="100%" cellPadding={0} cellSpacing={0} border={0}><tbody><tr><td style={{ padding: '0px', backgroundColor: 'transparent' }} align="center"><table cellPadding={0} cellSpacing={0} border={0} style={{ width: '600px' }}><tbody><tr style={{ backgroundColor: 'transparent' }}>
                                                <td align="center" width={600} style={{ backgroundColor: '#ffffff', width: '600px', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }} valign="top">
                                                    <div className="u-col u-col-100" style={{ maxWidth: '320px', minWidth: '600px', display: 'table-cell', verticalAlign: 'top' }}>
                                                        <div style={{ backgroundColor: '#ffffff', height: '100%', width: '100% !important', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                            <div style={{ boxSizing: 'border-box', height: '100%', padding: '0px', borderTop: '0px solid transparent', borderLeft: '0px solid transparent', borderRight: '0px solid transparent', borderBottom: '0px solid transparent', borderRadius: '0px', WebkitBorderRadius: '0px', MozBorderRadius: '0px' }}>
                                                                <table style={{ fontFamily: 'arial,helvetica,sans-serif' }} role="presentation" cellPadding={0} cellSpacing={0} width="100%" border={0}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="v-container-padding-padding" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', padding: '10px', fontFamily: 'arial,helvetica,sans-serif' }} align="left">
                                                                                <table height="0px" align="center" border={0} cellPadding={0} cellSpacing={0} width="100%" style={{ borderCollapse: 'collapse', tableLayout: 'fixed', borderSpacing: 0, msoTableLspace: '0pt', msoTableRspace: '0pt', verticalAlign: 'top', borderTop: '1px solid #dfdfdf', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%' }}>
                                                                                    <tbody>
                                                                                        <tr style={{ verticalAlign: 'top' }}>
                                                                                            <td style={{ wordBreak: 'break-word', borderCollapse: 'collapse !important', verticalAlign: 'top', fontSize: '0px', lineHeight: '0px', msoLineHeightRule: 'exactly', msTextSizeAdjust: '100%', WebkitTextSizeAdjust: '100%' }}>
                                                                                                <span>

                                                                                                </span>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr></tbody></table></td></tr></tbody></table>
                                        </div>
                                    </div>
                                </div>
                            </td></tr></tbody></table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}