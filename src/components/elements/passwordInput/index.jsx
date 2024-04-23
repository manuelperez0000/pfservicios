/* eslint-disable react/prop-types */
import { useState } from "react";
import './passwordInput.scss'

const EyeIcon = ({showIcon}) =>showIcon ?<i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>

export default function PasswordInput({register,indicator}) {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    return (
        <div className="pass-wrapper">
        {" "}
        <input
          placeholder="Password"
          className="m-0 w-full font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] p-3 text-base"
          name={indicator}
          type={passwordShown ? "text" : "password"}
          {...register(indicator)}
        />
        <button className="absolute right-0 p-3" onClick={togglePasswordVisiblity}><EyeIcon showIcon={passwordShown} /></button>{" "}
      </div>
    )
}