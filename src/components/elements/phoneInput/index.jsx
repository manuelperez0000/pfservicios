import { useEffect, useState } from "react"
import { Controller } from "react-hook-form"
import es from 'react-phone-input-2/lang/es.json'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './phoneInput.scss'

/* eslint-disable react/prop-types */
export default function PhoneInputType({register,indicator,placeHolder,control}) {
    const [phone, setPhone] = useState('');

    const handlerPhone = (value) => {
        setPhone(value)
      
    }
    useEffect(() => {
       
    },[phone])

    return(
        <div className="pass-wrapper">
        <Controller
          control={control}
          name="phone"
          render={({ field: { ref, ...field } }) => (
            <PhoneInput
            {...field}
            inputExtraProps={{
              ref,
              required: true,
              autoFocus: true
            }}
              placeholder={placeHolder}
              localization={es}
              className="m-0 w-full font-sans text-white/80 bg-gray-900 border border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg hover:border-blue-500 focus:outline-none focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] p-3 text-base"
              name={indicator}
              type="text"
              id={indicator}
              value={phone}
              onChange={handlerPhone}
              {... register(indicator)}
            />

          )}
        />
      </div>
    )
}