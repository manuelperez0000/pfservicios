/* eslint-disable react/prop-types */

const Greetings = ({ title, text }) => {
    return (<div className="text-center">
        <h3 className="text-3xl font-bold">{title}</h3>
        <h4 className="text-xl font-semibold">{text}</h4></div>
    )
}

export default Greetings;