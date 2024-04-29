/* eslint-disable react/prop-types */
export default function ServiceButton({ tittle, link, target }) {

    return (
        <div className="flex items-center justify-center w-full mt-10">
            <a href={link} target={target} className="px-6 py-2 mr-3 font-bold text-white uppercase rounded-md bg-primary hover:bg-secondary">
                {tittle}
            </a>
        </div>
    )
}