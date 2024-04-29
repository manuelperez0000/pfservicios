import { Zustand } from "../../../libs";

export default function OpenButton() {
    const { openLateralNav, setLateralNav } = Zustand.useStore()
    return (
        <button onClick={() => setLateralNav()} className="p-2">
            {
                openLateralNav ? <i className="text-3xl bi bi-list" /> : <i className="text-3xl bi bi-x-lg" />
            }
        </button>
    )
}