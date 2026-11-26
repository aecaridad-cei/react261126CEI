import { useState, useEffect } from 'react'

export const StateEffectPanel = () => {

    const [interactions, setInteractions] = useState<number>(0)
    const [lastRegister, setLastRegister] = useState<string>("Sin actividad aun")

    useEffect(() => {
        document.title = `Interacciones: ${interactions}`

        return () => {
            document.title = "Bitácora React | Aventura de código"
        }
    }, [interactions])

    const handleAdd = () => {
        setInteractions((prev) => prev + 1)
        const hour = new Date().toLocaleTimeString()
        setLastRegister(`Ultima actualización a las ${hour}`)
    }

    const handleReset = () => {
        setInteractions(0)
        setLastRegister("Contador Reiniciado")
    }

    return (
        <section className="relative w-full overflow-hidden border-[3px] border-[#202b34] bg-[#fffaf0] p-5 text-[#202b34] shadow-[7px_7px_0_#ad554c] sm:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute right-4 top-4 size-12 bg-[radial-gradient(#202b34_1px,transparent_1px)] bg-size-[5px_5px] opacity-15" />
            <div className="relative mb-5 flex items-center justify-between gap-4 border-b-2 border-dashed border-[#9a9a8d] pb-4">
                <p className="text-[10px] font-black tracking-[0.16em] text-[#ad554c]">
                    MÓDULO // 01
                </p>
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#536f7a]">
                    ESTADO: NAVEGANDO
                </p>
            </div>
            <h2 className="mb-2 text-xl font-black uppercase leading-tight text-[#202b34] sm:text-2xl">
                Nivel 1: useState y useEffect
            </h2>
            <p className="max-w-xl text-sm font-medium leading-6 text-[#53666c]">
                Observa cómo cambia el título de la pestaña al modificar el estado.
            </p>
            <div className="my-7 flex flex-wrap items-center gap-3">
                <span className="flex min-h-16 min-w-20 items-center justify-center border-[3px] border-[#202b34] bg-[#e7d8b5] px-5 text-3xl font-black tabular-nums text-[#202b34] shadow-[4px_4px_0_#c5a35b]">
                    {interactions}
                </span>
                <button
                    type="button"
                    className="min-h-12 cursor-pointer border-[3px] border-[#202b34] bg-[#536f7a] px-5 text-xs font-black uppercase tracking-wider text-[#fffaf0] shadow-[4px_4px_0_#202b34] transition duration-150 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#202b34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad554c] active:translate-y-1 active:shadow-none"
                    onClick={handleAdd}
                >
                    +1 Interacción
                </button>
                <button
                    type="button"
                    className="min-h-12 cursor-pointer border-[3px] border-[#202b34] bg-[#ad554c] px-5 text-xs font-black uppercase tracking-wider text-[#fffaf0] shadow-[4px_4px_0_#202b34] transition duration-150 hover:-translate-y-0.5 hover:bg-[#96483f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#536f7a] active:translate-y-1 active:shadow-none"
                    onClick={handleReset}
                >
                    Reiniciar
                </button>
            </div>
            <p aria-live="polite" className="border-l-[3px] border-[#ad554c] pl-3 text-xs font-medium leading-5 text-[#53666c]">
                {lastRegister}
            </p>
        </section>
    )
}