import { useState, useEffect } from 'react'

export const StateEffectPanel = () => {

    const [interactions, setInteractions] = useState<number>(0)
    const [lastRegister, setLastRegister] = useState<string>("Sin actividad aun")

    useEffect(() => {
        document.title = `Interacciones: ${interactions}`

        return () => {
            document.title = "Laboratorio React + TS"
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
        <section className="relative w-full max-w-3xl border-2 border-[#00f0ff] bg-[#0d1420]/95 p-5 shadow-[8px_8px_0_#ff2bd6] sm:p-8">
            <div aria-hidden="true" className="absolute -left-2 -top-2 size-3 bg-[#fcee0a]" />
            <div aria-hidden="true" className="absolute -bottom-2 -right-2 size-3 bg-[#fcee0a]" />
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#263443] pb-4">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#ff2bd6]">
                    MÓDULO // 01
                </p>
                <p className="text-[10px] tracking-[0.16em] text-[#00f0ff]">
                    ESTADO: EN LÍNEA
                </p>
            </div>
            <h2 className="mb-2 text-xl font-black uppercase leading-tight text-white sm:text-2xl">
                Nivel 1: useState y useEffect
            </h2>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
                Observa como cambia el titulo de la pestaña del navegador al modificar el estado
            </p>
            <div className="my-7 flex flex-wrap items-center gap-3">
                <span className="flex min-h-16 min-w-20 items-center justify-center border-2 border-[#fcee0a] bg-[#fcee0a]/10 px-5 text-3xl font-black tabular-nums text-[#fcee0a] shadow-[4px_4px_0_#fcee0a]">
                    {interactions}
                </span>
                <button
                    className="min-h-12 cursor-pointer border-2 border-[#00f0ff] bg-[#00f0ff] px-5 text-xs font-black uppercase tracking-wider text-[#080b14] transition duration-150 hover:-translate-y-1 hover:bg-transparent hover:text-[#00f0ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00f0ff] active:translate-y-0"
                    onClick={handleAdd}
                >
                    +1 Interacción
                </button>
                <button
                    className="min-h-12 cursor-pointer border-2 border-[#ff2bd6] px-5 text-xs font-black uppercase tracking-wider text-[#ff2bd6] transition duration-150 hover:-translate-y-1 hover:bg-[#ff2bd6] hover:text-[#080b14] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff2bd6] active:translate-y-0"
                    onClick={handleReset}
                >
                    Reiniciar
                </button>
            </div>
            <p aria-live="polite" className="border-l-2 border-[#ff2bd6] pl-3 text-xs leading-5 text-slate-400">
                {lastRegister}
            </p>
        </section>
    )
}